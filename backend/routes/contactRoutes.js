const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const contact = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
  };

  if (!contact.name || contact.name.length > 100) {
    return res.status(400).json({ message: 'Name must be between 1 and 100 characters.' });
  }

  if (
    contact.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)
  ) {
    return res.status(400).json({ message: 'Enter a valid email address.' });
  }

  if (!contact.message || contact.message.length > 2000) {
    return res.status(400).json({ message: 'Message must be between 1 and 2000 characters.' });
  }

  await Contact.create(contact);
  return res.status(201).json({ message: 'Thanks for reaching out. Your message was sent.' });
});

module.exports = router;