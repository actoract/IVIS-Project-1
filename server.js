const express = require('express');
const path = require('path');
var skills_json = require("./public/skills.json");

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.send("GET Request Called")
})

app.get('../skills.json', (req, res) => {    
    const fs = require("fs");
    fs.readFile("skills.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    console.log("File data:", jsonString);
    res.json(jsonString)
    });
})


app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."))



