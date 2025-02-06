function clearOutput(elementId) {
    document.getElementById(elementId).innerText = '';
} 

async function performDIG() {
    const n = document.getElementById("digNum1").value;
    console.log(`Performing DIG with ${n}`);
    const response = await fetch("http://localhost:11000/dig?url=" + n, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
    }

    if (!response.ok) {
        document.getElementById("digResult").innerText = `Error: ${result}`;
        return;
    }

    // Parse the JSON response
    try {
        const jsonResponse = JSON.parse(result);
        const digResult = jsonResponse.result; // Extract the 'result' field
        document.getElementById("digResult").innerText = `Result: ${digResult}`;
    } catch (error) {
        document.getElementById("digResult").innerText = `Error parsing result: ${error.message}`;
    }
}

async function performTraceroute() {
    const n = document.getElementById("tracerouteNum1").value;
    console.log(`Performing Traceroute with ${n}`);
    const response = await fetch("http://localhost:11001/traceroute?url=" + n, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: 'no-cors'
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        document.getElementById("tracerouteResult").innerText = `Result: ${result}`;
    }

    if (!response.ok) {
        document.getElementById("tracerouteResult").innerText = `Error: ${result}`;
    }
}

