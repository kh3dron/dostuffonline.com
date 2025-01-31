async function performDIG() {
    const n = document.getElementById("digNum1").value;
    console.log(`Performing DIG with ${n}`);
    const response = await fetch("http://localhost:11000/dig?url=" + n, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    if (!response.ok) {
        document.getElementById("digResult").innerText = `Error: ${data.error}`;
    } else {
        document.getElementById("digResult").innerText = `Result: ${data.result}`;
    }
}
