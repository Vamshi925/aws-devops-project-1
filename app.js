const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from AWS DevOps Project Phase 1");
});


app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
