const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const allowedExtensions = new Set([
  '.pdf', '.png', '.jpg', '.jpeg', '.webp', '.svg', '.dwg', '.dxf', '.doc', '.docx', '.zip'
]);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9-_]/g, '-');
    cb(null, `${Date.now()}-${base}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024, files: 5 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.has(ext)) {
      return cb(new Error('Unsupported file type. Please upload PDFs, images, or drawing files.'));
    }
    cb(null, true);
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'SCHMIEDE API is running.' });
});

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function removeUploadedFiles(files) {
  if (!files) return;
  files.forEach((file) => {
    if (file.path && fs.existsSync(file.path)) fs.unlinkSync(file.path);
  });
}

app.post('/api/quote', upload.array('attachments', 5), async (req, res) => {
  const { name, company, email, phone, message } = req.body;
  const uploadedFiles = req.files || [];

  if (!name || !email || !message) {
    removeUploadedFiles(uploadedFiles);
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }

  const mailText = [
    'New SCHMIEDE Engineering enquiry',
    '',
    `Name: ${name}`,
    `Company: ${company || 'Not provided'}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    '',
    'Project details:',
    message
  ].join('\n');

  const mailHtml = `
    <h2>New SCHMIEDE Engineering Enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
    <h3>Project Details</h3>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      removeUploadedFiles(uploadedFiles);
      return res.status(500).json({ success: false, message: 'Email service is not configured. Please add your Gmail credentials in .env file.' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || 'emmaculatekhulek@gmail.com',
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: mailText,
      html: mailHtml,
      attachments: uploadedFiles.map((file) => ({ 
        filename: file.originalname, 
        path: file.path 
      }))
    });

    removeUploadedFiles(uploadedFiles);
    res.json({ success: true, message: 'Thank you. Your enquiry has been sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    removeUploadedFiles(uploadedFiles);
    res.status(500).json({ success: false, message: 'We could not send your enquiry. Please try again later.' });
  }
});

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ success: false, message: error.message });
  }
  if (error) {
    return res.status(400).json({ success: false, message: error.message || 'An unexpected error occurred.' });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`SCHMIEDE Engineering running at http://localhost:${PORT}`);
});