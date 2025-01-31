from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)


@app.route("/dig", methods=["GET"])
def dig():
    try:
        url = request.args.get("url")
        if not url:
            raise ValueError("URL parameter is required")
        result = subprocess.run(["dig", url], capture_output=True, text=True)
        return jsonify({"status": "success", "result": result.stdout}), 200
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=11000)
