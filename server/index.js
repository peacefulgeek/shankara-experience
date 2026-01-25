import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// MailerLite Newsletter Signup Endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  const { email, name } = req.body;
  
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
  
  if (!MAILERLITE_API_KEY) {
    console.error('MAILERLITE_API_KEY not configured');
    return res.status(500).json({ success: false, message: 'Newsletter service not configured' });
  }

  try {
    // Add subscriber to MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        fields: {
          name: name || ''
        },
        status: 'active'
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.json({ success: true, message: 'Successfully subscribed!' });
    } else if (response.status === 422 && data.message?.includes('already')) {
      return res.json({ success: true, message: 'You are already subscribed!' });
    } else {
      console.error('MailerLite error:', data);
      return res.status(400).json({ success: false, message: data.message || 'Subscription failed' });
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
  }
});

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, '../dist/public')));

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
