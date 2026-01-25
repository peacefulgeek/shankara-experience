import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist/public
app.use(express.static(join(__dirname, 'public')));

// SPA fallback - serve index.html for all routes (Express 5 syntax)
app.use((req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
