from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def calculator():
    if request.method == "POST":
        num1 = request.form.get("num1")
        num2 = request.form.get("num2")
        operation = request.form.get("operation")
        
        if not num1 or not num2:
            return render_template("calculator.html", error="Please enter both numbers.")
        
        try:
            num1 = float(num1)
            num2 = float(num2)
        except ValueError:
            return render_template("calculator.html", error="Invalid input. Please enter valid numbers.")
        
        if operation == "add":
            response = requests.post("http://host.docker.internal:10000/add", json={"num1": num1, "num2": num2})
        elif operation == "subtract":
            response = requests.post("http://host.docker.internal:10001/subtract", json={"num1": num1, "num2": num2})
        elif operation == "multiply":
            response = requests.post("http://host.docker.internal:10002/multiply", json={"num1": num1, "num2": num2})
        elif operation == "divide":
            if num2 == 0:
                return render_template("calculator.html", error="Cannot divide by zero.")
            response = requests.post("http://host.docker.internal:10003/divide", json={"num1": num1, "num2": num2})
        else:
            return render_template("calculator.html", error="Invalid operation.")
        
        if response.status_code == 200:
            result = response.json().get("result")
            return render_template("calculator.html", result=result)
        else:
            return render_template("calculator.html", error="Error in operation.")
    
    return render_template("calculator.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9999)
 