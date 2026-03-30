const express = require("express");
const app = express();
const port = 3050;
const hostname = '127.0.0.1'
app.listen(port, hostname, () => {
    console.log("Express server is running on port " + port);
});
app.get("/", (req, res) => {
    res.send("Welcome to the site");
});
app.get("/about", (req, res) => {
    res.send("About the comapny");
});
app.get("/contact", (req, res) => {
    res.send("Contact Details");
});
const users = [
    { id: 1, name: "Dinesh" },
    { id: 2, name: "Suresh"}
];
app.get("/users", (req, res) => {
    res.json(users);
});
app.get("/hello", (req, res) => {
    console.log(req.method + " : " + req.url); //  it will return GET : /hello
    res.json({"message": "Hello World"});
// res.status(200).json({"message": "Hello World"}); -> we can manually set the status code to 200, 201
});