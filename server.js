
require('dotenv').config();
const express = require('express');
const mailgun = require('mailgun-js');
const app = express();
app.use(express.json());

const mg = mailgun({
  apiKey: process.env.VITE_MAILGUN_API_KEY,
  domain: process.env.VITE_MAILGUN_DOMAIN,
});

app.post('/send-email', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    projectType,
    projectDetails,
    streetAddress,
    city,
    state,
    zipCode
  } = req.body;

  const messageBody = `
    New Estimate Request:
    
    Contact Information:
    -------------------
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}
    
    Project Information:
    -------------------
    Type: ${projectType}
    Details: ${projectDetails}
    
    Address:
    --------
    Street: ${streetAddress}
    City: ${city}
    State: ${state}
    Zip Code: ${zipCode}
  `;

  const data = {
    from: `Eugene Roofing Website <no-reply@${process.env.MAILGUN_DOMAIN}>`,
    to: 'eugeneroofingnw@gmail.com', // Replace with your recipient email
    subject: 'New Roofing Estimate Request',
    text: messageBody,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error("Mailgun Error:", error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log("Mailgun Response:", body);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
