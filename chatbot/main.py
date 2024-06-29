from flask import Flask, request
from flask_cors import CORS, cross_origin

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


"""
Connects with a local Ollama model and answers your questions
"""
class Bot:
    """
    parameters:
        docs: The text that you want to use as context
        model: The locally installed Ollama model's name that you want to connect to
    """
    def __init__(self, docs, model="llama3"):
        # Creating the retrieval chain
        llm = Ollama(model="llama3")
        output_parser = StrOutputParser()
        prompt = ChatPromptTemplate.from_template("""Answer the following question based on the provided context only:

        <context>
        {context}
        </context>

        Question: {input}""")
        embeddings = OllamaEmbeddings(model="llama3")
        text_splitter = RecursiveCharacterTextSplitter()
        texts = text_splitter.split_text(docs)
        vector = FAISS.from_texts(texts, embeddings)
        retriever = vector.as_retriever()
        document_chain = create_stuff_documents_chain(llm, prompt) | output_parser

        self.retrieval_chain = create_retrieval_chain(retriever, document_chain)

    def ask(self, query):
        return self.retrieval_chain.invoke({"input": query})["answer"]

with open("club.txt", 'r') as f:
    docs = f.read()
chatbot = Bot(docs)

@app.route('/')
@cross_origin()
def ask():
    query = request.args.get("query")
    return chatbot.ask(query)