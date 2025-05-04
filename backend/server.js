import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve static files from /public
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
