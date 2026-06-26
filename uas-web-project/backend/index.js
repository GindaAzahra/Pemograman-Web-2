require('dotenv').config();
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

// Custom Middleware Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request ke ${req.url}`);
    next();
});

// Gunakan router
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});