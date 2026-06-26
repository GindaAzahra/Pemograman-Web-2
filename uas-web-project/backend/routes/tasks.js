const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET: Ambil semua tugas
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST: Tambah tugas baru
router.post('/', async (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: 'Judul tugas wajib diisi' });

    try {
        const [result] = await db.query('INSERT INTO tasks (title) VALUES (?)', [title]);
        res.status(201).json({ id: result.insertId, title, is_completed: false });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE: Hapus tugas
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.json({ message: 'Tugas berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT: Edit tugas
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        await db.query('UPDATE tasks SET title = ? WHERE id = ?', [title, id]);
        res.json({ message: 'Tugas berhasil diupdate' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;