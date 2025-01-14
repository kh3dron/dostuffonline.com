from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def main():
    return render_template("index.html")

@app.route("/add", methods=["GET", "POST"])
def add():
    if request.method == "POST":
        num1 = request.form.get("num1")
        num2 = request.form.get("num2")
        try:
            response = requests.post("http://host.docker.internal:10000/add", json={"num1": num1, "num2": num2})
            response.raise_for_status()  # Raise an error for bad responses
            result = response.json().get("result")
        except requests.exceptions.RequestException as e:
            result = f"Error: {e}"
        return render_template("add.html", result=result)
    else:
        return render_template("add.html")

@app.route("/subtract", methods=["POST"])
def subtract():
    return render_template("subtract.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9999)
 