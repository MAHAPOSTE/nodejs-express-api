const express = require("express");
const app = express();
const port = 4000;

const courses = [
  { id: 1, title: "React Fundamentals", category: "Frontend", instructor: "Arjun" },
  { id: 2, title: "Node.js and Express Basics", category: "Backend", instructor: "Meera" },
  { id: 3, title: "MongoDB Essentials", category: "Database", instructor: "Ravi" },
  { id: 4, title: "Advanced JavaScript Concepts", category: "Frontend", instructor: "Sneha" },
  { id: 5, title: "REST API Development with Express", category: "Backend", instructor: "Kiran" }
];

app.get("/courses", (req, res) => {
    res.status(200).json(courses);
});

app.get("/courses/:id", (req, res) => { // named route parameter
    const id = req.params.id; // request method has a params property
    const course = courses.find(ele => ele.id === Number(id)); 
    if (!course) {
        return res.status(404).json({error: "Course not found"});
    } 
    return res.status(200).json(course);
});


app.listen(port, () => {
    console.log("Server running on the port " + port);
});