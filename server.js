// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const uniqid = require('uniqid');

const app = express();
const PORT = process.env.PORT || 3001;

// Server settings (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"))

// HTML routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// API routes
// Gets the database of notes
app.get('/api/notes', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    })
})

// Adds new note to database
app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uniqid();
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const parseData = JSON.parse(data);
        console.log(JSON.parse(data));
        parseData.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(parseData), err => {
            if (err) throw err;
            res.json(parseData)
        })
    })
})

// Deletes note from database by its unique ID
app.delete('/api/notes/:id', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        const noteArr = JSON.parse(data).filter((note) => note.id !== req.params.id);
        fs.writeFile("./db/db.json", JSON.stringify(noteArr), err => {
            if (err) throw err;
            res.json(data)
        });
    })
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));