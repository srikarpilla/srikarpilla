import nodemailer from 'nodemailer';

const CONTACT_TO = 'pillasrikar12@gmail.com';

function json(res, statusCode, body) {
  res.status(statusCode).json(body);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { message: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};
  const trimmedName = String(name || '').trim();
  const trimmedEmail = String(email || '').trim();
  const trimmedMessage = String(message || '').trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return json(res, 400, { message: 'Please fill in every field.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return json(res, 400, { message: 'Please enter a valid email address.' });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return json(res, 500, { message: 'Email service is not configured yet.' });
  }

  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `Portfolio Contact <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO || CONTACT_TO,
    replyTo: `${trimmedName} <${trimmedEmail}>`,
    subject: `Portfolio message from ${trimmedName}`,
    text: [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      '',
      trimmedMessage,
    ].join('\n'),
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br />')}</p>
    `,
  });

  return json(res, 200, { message: 'Message sent successfully.' });
}
