from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/') # remove later - just want to serve a basic page for now.
def home():
    return "Welcome to the Music Composer App!"

@app.route('/api/score', methods=['GET'])
def get_score():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
