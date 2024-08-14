// here is the entry point of the server
const express = require('express');
const fs = require('fs');
const path = require('path');

const note = express();
const port = 3001;
note.use(express.json());
note.use(express.static(path.join(__dirname, 'public')));

note.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

note.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

note.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({error: 'Failed to read notes file'})
    }
    let notes;
    try {
      notes = JSON.parse(data);
      if (!Array.isArray(notes)) {
        notes = [];
      }
    } catch (e) {
      console.error('Error parsing JSON:', e);
      notes = [];
    }
    res.json(notes);
  });
});

note.post('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({error: 'Failed to read notes file'})
    };
    let notes;
    try {
      notes = JSON.parse(data) || [];
      console.log('Notes array after parsing:', notes);
    } catch (e) {
      console.error('Error parsing JSON:', e);
      notes = [];
    }

    const newNote = req.body;
    console.log('New note data:', newNote);
    
    if(!newNote || !newNote.title || !newNote.text) {
      console.error('Invalid note data:', newNote);
      return res.status(400).json({error: 'Invalid note data'});
    }

    newNote.id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    notes.push(newNote);
    fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({error: 'Failed to save note'});
      }
      res.json(newNote);
    });
  });
});

note.delete('/api/notes/:id', (req, res) => {
  fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== parseInt(req.params.id));
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json({ success: true });
    });
  });
});

note.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});