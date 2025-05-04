// backend/routes/courses.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Get all courses
router.get('/', (req, res) => {
  db.all(`SELECT * FROM courses`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Get course by ID
router.get('/:id', (req, res) => {
  db.get(`SELECT * FROM courses WHERE id = ?`, [req.params.id], (err, course) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  });
});

// Add new course
router.post('/', (req, res) => {
  const { title, description } = req.body;
  db.run(
    `INSERT INTO courses (title, description) VALUES (?, ?)`,
    [title, description],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
