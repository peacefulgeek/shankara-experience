import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json());

  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message, website } = req.body;

      // Honeypot check - if website field is filled, it's a bot
      if (website) {
        // Silently accept but don't send (fool the bot)
        return res.json({ success: true });
      }

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required" });
      }

      // Send email via SMTP2GO API
      const apiKey = process.env.SMTP2GO_API_KEY;
      if (!apiKey) {
        console.error("SMTP2GO_API_KEY not configured");
        return res.status(500).json({ error: "Email service not configured" });
      }

      const response = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          to: ["paul@creativelab.tv"],
          sender: "paul@paulwagner.one",
          subject: subject || `Contact Form: Message from ${name}`,
          html_body: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || "No subject"}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
          text_body: `New Contact Form Submission\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject || "No subject"}\n\nMessage:\n${message}`,
        }),
      });

      const result = await response.json();

      if (result.data?.succeeded > 0) {
        return res.json({ success: true });
      } else {
        console.error("SMTP2GO error:", result);
        return res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
