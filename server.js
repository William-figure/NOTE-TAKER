// here is the entry point of the server
const express = require('express');
const path = require('path');

const note = express();
const port = 3001;

note.use(express.static(path.join(__dirname, 'public')));

note.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

note.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

note.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})