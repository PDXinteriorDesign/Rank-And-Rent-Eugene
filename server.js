require('dotenv').config();
const express = require('express');
const mailgun = require('mailgun-js');
const app = express();
app.use(express.json()); // Important for parsing JSON request bodies

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const data = {
    from: `${name} <${email}>`, // Or a verified sender email address
    to: 'your_email@example.com', // Replace with your recipient email
    subject: 'New Contact Form Submission',
    text: message,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error("Mailgun Error:", error); // More detailed error logging
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log("Mailgun Response:", body); // Log the successful response
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 3001; // Choose a different port than your React app
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
