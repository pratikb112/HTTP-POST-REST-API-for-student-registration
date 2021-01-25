const express = require("express");
const Student = require("./models/students");
require("./db/conn");
const student = require("./models/students");
const app = express();
const port = process.env.port || 3000

app.get("/",(req,res) => {
    res.send("Hello from other side by pratik");
})

app.use(express.json());

//create a new student
app.post("/student",(req,res) => {
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen (port, () => {
    console.log('Connection is set up at 3000');
})