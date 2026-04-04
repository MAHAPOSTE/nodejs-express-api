const express = require("express");
const cors = require("cors");
// import express from "express";  // es6 modern syntax
// import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json()); // Parsing the json data
app.use(cors());

const courses = [
  { id: 1, title: "React Fundamentals", category: "Frontend", instructor: "Arjun" },
  { id: 2, title: "Node.js and Express Basics", category: "Backend", instructor: "Meera" },
  { id: 3, title: "MongoDB Essentials", category: "Database", instructor: "Ravi" },
  { id: 4, title: "Advanced JavaScript Concepts", category: "Frontend", instructor: "Sneha" },
  { id: 5, title: "REST API Development with Express", category: "Backend", instructor: "Kiran" }
];
// construction function
/* function Course({title, category, instructor}) {
this.id = courses.length + 1; // for id we can also give Date.now()
this.title = title;
this.category = category;
this.instructor = instructor;
this.createdAt = new Date(); // it will return date and time

this.save = function() {
    courses.push(this);
} 
}*/
// class 
class Course {
    // constructor method
    constructor ({title, category, instructor}) {
        this.id = courses.length + 1; 
        this.title = title;
        this.category = category;
        this.instructor = instructor;
        this.createdAt = new Date();
    }
    save() {
        courses.push(this);
    }
    static findById(id) {
        return courses.find(ele => ele.id === Number(id));
    }
    static findByTitle(title) {
        result = courses.filter(ele => ele.title.toLowerCase().includes(title.toLowerCase));
        return result;
    }
}
// @GetMapping
app.get("/courses", (req, res) => {
   //  res.setHeader("Access-Control-Allow-Origin", "*");  // domain name * -> anybody can access
    res.status(200).json(courses);
});

// @PostMapping
app.post("/create-course", (req, res) => {
    console.log("body", req.body); // Requestbody
    const course = new Course(req.body);
    course.save();  // instance method because calling the method on object
    res.status(201).json(course);
});

app.get("/courses/search", (req, res) => {
    const title = req.query.title;
    const result = Course.findByTitle(title);
    res.status(200).json(result);
});
app.get("/courses/:id", (req, res) => {  // :id is a named route parameter
    const id = req.params.id;  // request method has a params property
    const course = Course.findById(id); // calling the static method on the Course class
    if (!course) {
        return res.status(404).json({error: "Course not found"});
    } 
    return res.status(200).json(course);
});


app.listen(port, () => {
    console.log("Server running on the port " + port);
});