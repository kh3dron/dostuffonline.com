from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/subtract", methods=["POST"])
def subtract():
    try:
        data = request.get_json()
        num1 = float(data["num1"])
        num2 = float(data["num2"])
        result = num1 - num2
        return jsonify({"result": result}), 200
    except (KeyError, ValueError) as e:
        return jsonify({"error": str(e)}), 400


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy"}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10001)
