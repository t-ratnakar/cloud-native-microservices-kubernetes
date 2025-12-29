from flask import Flask
app = Flask(__name__)

@app.route("/api")
def home():
    return {"message": "Backend working OK"}

@app.route("/health")
def health():
    return "ok"