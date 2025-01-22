async function performAddition() {
    const num1 = document.getElementById("addNum1").value;
    const num2 = document.getElementById("addNum2").value;
    console.log(`Performing addition with ${num1} and ${num2}`);
    const response = await fetch("http://localhost:10000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2 }),
    });
    const data = await response.json();
    document.getElementById("addResult").innerText = `Result: ${data.result}`;
}

async function performSubtraction() {
    const num1 = document.getElementById("subNum1").value;
    const num2 = document.getElementById("subNum2").value;
    console.log(`Performing subtraction with ${num1} and ${num2}`);
    const response = await fetch("http://localhost:10001/subtract", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2 }),
    });
    const data = await response.json();
    document.getElementById("subResult").innerText = `Result: ${data.result}`;
}
