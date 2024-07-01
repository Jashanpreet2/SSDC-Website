# Runs the server
from flask import Flask, request
#Enables cross origin requests
from flask_cors import CORS, cross_origin

# Gets environment variables
from dotenv import dotenv_values

# Accesses the mongo database
from pymongo import MongoClient

# Connects with the LLM
from langchain_community.llms import Ollama
# Gets string output
from langchain_core.output_parsers import StrOutputParser
# Adds prompts
from langchain_core.prompts import ChatPromptTemplate
# Creates the document based chain
from langchain.chains.combine_documents import create_stuff_documents_chain
# Creates the retrieval chain
from langchain.chains.retrieval import create_retrieval_chain

# Loads website data
from langchain_community.document_loaders import WebBaseLoader
# Creates embeddings
from langchain_community.embeddings import OllamaEmbeddings

# The documents are indexed into this vector store
from langchain_community.vectorstores import FAISS
# Splits the text into separate paragraphs, then sentences, then words, and then letters
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Can act as a document for the document chain
from langchain_core.documents import Document


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

config = dotenv_values('.env.local')

client = MongoClient(config['URI'])
app.db = client['ssdc-website']


# Retrieves all club news
def get_news():
    all_news = app.db.news.find({})

    news_context = []
    for news in all_news:
        news_context.append(f"Heading: {news['heading']}\nDate:{news['date']}\n{news['content']}")

    return news_context

# Retrieves all club events
def get_events():
    all_events = app.db.events.find({})

    event_context = []
    for event in all_events:
        event_context.append(f"Heading: {event['heading']}\nDate:{event['date']}\n{event['content']}")

    return event_context


"""
Connects with a local Ollama model and answers your questions
"""
class Bot:
    """
    parameters:
        model: The locally installed Ollama model's name that you want to connect to
    """
    def __init__(self, model="phi3:mini"):
        # Creating the retrieval chain
        llm = Ollama(model="phi3:mini")
        output_parser = StrOutputParser()
        prompt = ChatPromptTemplate.from_template("""Use the following context to help answer any queries.:

        <context>
        {context}
        </context>

        Question: {input}""")
        embeddings = OllamaEmbeddings(model="phi3:mini")
        news = get_news()
        events = get_events()
        all_texts = news + events
        text_splitter = RecursiveCharacterTextSplitter()
        texts = text_splitter.split_text("abc")
        vector = FAISS.from_texts(all_texts, embeddings)
        retriever = vector.as_retriever()
        document_chain = create_stuff_documents_chain(llm, prompt) | output_parser

        self.retrieval_chain = create_retrieval_chain(retriever, document_chain)

    def ask(self, query):
        print("asking hte bot")
        return self.retrieval_chain.invoke({"input": query})["answer"]


# Create the chatbot interface
app.chatbot = Bot()

"""
Refreshes the bot's context. Should be used whenever the context is updated. For example, when a new event is posted
"""
@app.route('/refresh')
@cross_origin()
def refresh():
    app.chatbot = Bot()
    return "Bot refreshed successfull!"


@app.route('/')
@cross_origin()
def ask():
    query = request.args.get("query")
    return app.chatbot.ask(query)

