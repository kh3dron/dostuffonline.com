function clearOutput(elementId) {
    document.getElementById(elementId).innerText = "";
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

    if (!response.ok) {
        const errorText = await response.text();
        document.getElementById("digResult").innerText = `Error: ${errorText}`;
        return;
    }

    // Parse the JSON response
    try {
        const jsonResponse = await response.json();
        const digResult = jsonResponse.result; // Extract the 'result' field
        document.getElementById("digResult").innerText = `Result: ${digResult}`;
    } catch (error) {
        document.getElementById("digResult").innerText =
            `Error parsing result: ${error.message}`;
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
        mode: "no-cors",
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = "";

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        document.getElementById("tracerouteResult").innerText =
            `Result: ${result}`;
    }

    if (!response.ok) {
        document.getElementById("tracerouteResult").innerText =
            `Error: ${result}`;
    }
}

async function performNSLOOKUP() {
    const n = document.getElementById("nslookupNum1").value;
    console.log(`Performing NSLOOKUP with ${n}`);
    const response = await fetch("http://localhost:11002/nslookup?url=" + n, {
        method: "GET",
    });

    if (!response.ok) {
        const errorText = await response.text();
        document.getElementById("nslookupResult").innerText =
            `Error: ${errorText}`;
        return;
    }

    const result = await response.text();
    const resultJson = JSON.parse(result);
    document.getElementById("nslookupResult").innerText = `Result: ${resultJson.result}`;
}
