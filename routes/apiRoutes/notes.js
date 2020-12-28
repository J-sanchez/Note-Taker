const router = require("express").Router();
const {notes} = require('../../Develop/db/db.json');

const {addNote} = require('../../lib/addnote');

router.get('/api/notes', (req, res) => {
    let saved  = notes;
    res.json(saved);
})

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = addNote(req.body, notes);
    res.json(note);
})

module.exports = router;