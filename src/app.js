const express = require("express");
const app = express();
const port = process.env.port || 3000

app.get("/",(req,res) => {
    res.send("Hello from other side by pratik");
})

app.post("/student",(req,res) => {
    res.send("hello from other side.");
})

app.listen (port, () => {
    console.log('Connection is set up at ${port}');
})