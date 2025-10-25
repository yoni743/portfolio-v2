const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

function isValidEmail(email) {
  return /.+@.+\..+/.test(email);
}

app.get('/', (_req, res) => {
  res.json({ ok: true, message: 'Portfolio Backend Running' });
});

// Placeholder: list projects (replace with DB or shared content in future)
app.get('/api/projects', (_req, res) => {
  res.json({ ok: true, projects: [], note: 'Placeholder endpoint. Populate when backend APIs are added.' });
});

// Placeholder: contact analytics (aggregate counts in future)
app.get('/api/contact/analytics', (_req, res) => {
  res.json({ ok: true, totalSubmissions: 0, lastSubmissionAt: null, note: 'Placeholder endpoint.' });
});

app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields: name, email, message' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email format' });
    }

    // Email sending is handled by Formspree on the frontend now.
    // Keep this endpoint for future use; currently it just logs and returns ok.
    console.log('[CONTACT:RECEIVED]', { name, email, message });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Error handling /contact:', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
