const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const hostname = "0.0.0.0";
const port = 9999;

app.use(express.static(__dirname));

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
