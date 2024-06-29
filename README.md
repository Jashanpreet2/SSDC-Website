# Getting started

## 1. Install and run Llama3 with Ollama.
Download Ollama from here https://github.com/ollama/ollama?tab=readme-ov-file
Then start it in command prompt using "ollama run llama3"

## 2. Setup virtual environment for the chatbot with the dependencies
Navigate to chatbot folder
python -m venv .venv                (Sets up the virtual environment folder named .venv)
.venv/scripts/activate              (Runs the activation script to activate the virtual environment)
pip install -r requirements.txt     (Installs the dependencies listed in the requirements.txt)

## 3. Install node module dependencies
Navigate to client folder
npm i                               (Installs the dependencies)

## Start the client and chatbot servers
Navigate to chatbot folder
flask --app main run

Navigate to client folder
npm run dev

You can now access the application at localhost:3000
