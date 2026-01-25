import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// SMTP2GO Welcome Email Function
async function sendWelcomeEmail(email, name) {
  const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
  
  if (!SMTP2GO_API_KEY) {
    console.error('SMTP2GO_API_KEY not configured');
    return false;
  }

  const firstName = name ? name.split(' ')[0] : 'Beautiful Soul';
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Free Gift: The Deepening</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #1a0a2e; color: #ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 100%);">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px;">
          
          <!-- Header with Logo -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <img src="https://shankara-pull.b-cdn.net/images/shankara-logo.webp" alt="Shankara" width="180" style="max-width: 180px;">
            </td>
          </tr>
          
          <!-- Welcome Message -->
          <tr>
            <td style="padding: 30px; background: rgba(255,255,255,0.05); border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
              <h1 style="margin: 0 0 20px 0; font-size: 32px; color: #ffffff; text-align: center; font-weight: normal;">
                Welcome, ${firstName} ✨
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 18px; line-height: 1.8; color: #e0d0f0; text-align: center;">
                Thank you for joining our sacred community. Your journey toward deeper self-awareness and spiritual awakening begins now.
              </p>
              <p style="margin: 0; font-size: 18px; line-height: 1.8; color: #e0d0f0; text-align: center;">
                As a gift of gratitude, please accept this free ebook:
              </p>
            </td>
          </tr>
          
          <!-- Ebook Section -->
          <tr>
            <td style="padding: 40px 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <!-- Book Cover -->
                    <img src="https://shankara-pull.b-cdn.net/ebooks/the-deepening-cover.webp" alt="The Deepening" width="250" style="max-width: 250px; border-radius: 10px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 30px;">
                    <h2 style="margin: 0 0 15px 0; font-size: 28px; color: #ff00ff; font-weight: normal;">
                      The Deepening
                    </h2>
                    <p style="margin: 0 0 25px 0; font-size: 16px; color: #c0b0d0; font-style: italic;">
                      A Sacred Journey Into Your Authentic Self
                    </p>
                    <a href="https://shankara-pull.b-cdn.net/ebooks/the-deepening-v4.pdf" style="display: inline-block; padding: 18px 40px; background: linear-gradient(135deg, #ff00ff 0%, #9900ff 100%); color: #ffffff; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 50px; box-shadow: 0 10px 30px rgba(255,0,255,0.4);">
                      Download Your Free Ebook
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Divider -->
          <tr>
            <td align="center" style="padding: 20px 0;">
              <div style="width: 100px; height: 2px; background: linear-gradient(90deg, transparent, #ff00ff, transparent);"></div>
            </td>
          </tr>
          
          <!-- Promotional Card for Shankara Oracle -->
          <tr>
            <td style="padding: 30px; background: linear-gradient(135deg, rgba(255,0,255,0.15) 0%, rgba(100,0,150,0.15) 100%); border-radius: 20px; border: 1px solid rgba(255,0,255,0.3);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="40%" style="vertical-align: top; padding-right: 20px;">
                    <img src="https://shankara-pull.b-cdn.net/images/full-system.webp" alt="The Shankara Oracle" width="200" style="max-width: 200px; border-radius: 15px;">
                  </td>
                  <td width="60%" style="vertical-align: top;">
                    <p style="margin: 0 0 10px 0; font-size: 12px; color: #ff00ff; text-transform: uppercase; letter-spacing: 2px;">
                      ✦ Sacred Technology ✦
                    </p>
                    <h3 style="margin: 0 0 15px 0; font-size: 24px; color: #ffffff; font-weight: normal;">
                      The Shankara Oracle
                    </h3>
                    <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.7; color: #c0b0d0;">
                      A living technology of consciousness featuring 4 sacred decks, 300+ cards, 18 obsidian stones, and a sacred geometry board.
                    </p>
                    <a href="https://theshankaraexperience.com/shop" style="display: inline-block; padding: 12px 25px; background: #ffffff; color: #1a0a2e; text-decoration: none; font-size: 14px; font-weight: bold; border-radius: 50px;">
                      Explore the Oracle →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Quote Section -->
          <tr>
            <td style="padding: 40px 20px; text-align: center;">
              <p style="margin: 0 0 15px 0; font-size: 20px; font-style: italic; color: #e0d0f0; line-height: 1.6;">
                "Shankara is my heart's offering to your awakening. It is designed to mirror your soul's journey and provide the precise guidance you need in every moment."
              </p>
              <p style="margin: 0; font-size: 16px; color: #ff00ff;">
                — Krishna Kalesh (Paul Wagner)
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
              <p style="margin: 0 0 15px 0; font-size: 14px; color: #a090b0;">
                With love and blessings,<br>
                <strong style="color: #ffffff;">Paul Wagner (Krishna Kalesh)</strong>
              </p>
              <p style="margin: 0 0 20px 0; font-size: 12px; color: #706080;">
                © 2024 Believe In Miracles LLC. All rights reserved.
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <tr>
                  <td style="padding: 0 10px;">
                    <a href="https://www.instagram.com/paulwagner1008/" style="color: #ff00ff; text-decoration: none; font-size: 12px;">Instagram</a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://www.facebook.com/paulwagner1008/" style="color: #ff00ff; text-decoration: none; font-size: 12px;">Facebook</a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://theshankaraexperience.com" style="color: #ff00ff; text-decoration: none; font-size: 12px;">Website</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const textContent = `
Welcome, ${firstName}!

Thank you for joining our sacred community. Your journey toward deeper self-awareness and spiritual awakening begins now.

As a gift of gratitude, please download your free ebook "The Deepening":
https://shankara-pull.b-cdn.net/ebooks/the-deepening-v4.pdf

---

THE SHANKARA ORACLE

A living technology of consciousness featuring 4 sacred decks, 300+ cards, 18 obsidian stones, and a sacred geometry board.

Explore the Oracle: https://theshankaraexperience.com/shop

---

"Shankara is my heart's offering to your awakening. It is designed to mirror your soul's journey and provide the precise guidance you need in every moment."
— Krishna Kalesh (Paul Wagner)

With love and blessings,
Paul Wagner (Krishna Kalesh)

© 2024 Believe In Miracles LLC. All rights reserved.
  `;

  try {
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': SMTP2GO_API_KEY
      },
      body: JSON.stringify({
        api_key: SMTP2GO_API_KEY,
        to: [email],
        sender: 'Paul Wagner <paul@paulwagner.one>',
        subject: '✨ Your Free Gift: The Deepening Ebook',
        html_body: htmlContent,
        text_body: textContent
      })
    });

    const data = await response.json();
    
    if (data.data?.succeeded > 0) {
      console.log('Welcome email sent successfully to:', email);
      return true;
    } else {
      console.error('SMTP2GO error:', data);
      return false;
    }
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return false;
  }
}

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
      // Send welcome email with The Deepening ebook
      sendWelcomeEmail(email, name).catch(err => {
        console.error('Failed to send welcome email:', err);
      });
      
      return res.json({ success: true, message: 'Successfully subscribed! Check your email for your free gift.' });
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
