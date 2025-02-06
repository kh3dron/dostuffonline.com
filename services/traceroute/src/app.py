from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)


@app.route("/traceroute", methods=["GET"])
def traceroute():
    url = request.args.get("url")
    if not url:
        return "Error: URL parameter is required\n", 400

    def generate():
        try:
            process = subprocess.Popen(["traceroute", url], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            for line in iter(process.stdout.readline, ''):
                yield line
            process.stdout.close()
            process.wait()
        except Exception as e:
            yield f"Error: {str(e)}\n"

    return app.response_class(generate(), mimetype='text/plain')


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=11001)
