const router = require('express').Router();
const saveClass = require('../db/saveClass');

router.get('/notes', (req, res) => {
  saveClass.getNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  saveClass.newNote(req.body).then((note) => res.json(note)).catch(err => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
  saveClass.removeNote(req.params.id).then(() => res.json({ ok: true })).catch(err => res.status(500).json(err));
});

module.exports = router;