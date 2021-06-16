// copy sgtarwars server.js

// html routes

// get route to the index.html
// get route to the notes.HTML

// api Routes
// api get notes /api/notes GET
// api save notes /api/notes POST
// api delete notes /api/notes/${id} DELETE

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));




























// // Dependencies
// const express = require('express');
// const path = require('path');

// // Tells Node that we are creating an express server
// // Sets up the Express App (Tells Node that we are creating an express server)
// const app = express();

// // set inital portc
// const PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Routes
// // Basic route that sends the user first to the AJAX page
// // Basic route that sends the user first to the AJAX Page
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
// app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
// app.get('/api/notes', (req, res) => res.json(notes));

// app.post('/api/notes', (req, res) => {
//     const newNote = req.body;
//     console.log(newNote);
// });

// // Starts the server to begin listening
// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
