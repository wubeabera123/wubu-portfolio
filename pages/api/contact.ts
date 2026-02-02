import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('Contact form API called:', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        message: 'Missing required fields',
        details: 'Please fill in all fields',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Invalid email address',
      });
    }

    console.log('Sending email via Resend...');
    console.log('From:', email);
    console.log('To:', process.env.YOUR_EMAIL);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use Resend's test domain
      to: [process.env.YOUR_EMAIL || 'wubeabera123@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #4f46e5;
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background-color: #f9fafb;
      padding: 30px;
      border-radius: 0 0 8px 8px;
      border: 1px solid #e5e7eb;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #4b5563;
      display: block;
      margin-bottom: 5px;
    }
    .value {
      color: #111827;
      font-size: 16px;
    }
    .message-box {
      background-color: white;
      padding: 20px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      margin-top: 10px;
      white-space: pre-wrap;
    }
    .divider {
      height: 1px;
      background-color: #e5e7eb;
      margin: 25px 0;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
  </div>
  
  <div class="content">
    <div class="field">
      <span class="label">Name</span>
      <span class="value">${firstName} ${lastName}</span>
    </div>
    
    <div class="field">
      <span class="label">Email</span>
      <span class="value">${email}</span>
    </div>
    
    <div class="divider"></div>
    
    <div class="field">
      <span class="label">Message</span>
      <div class="message-box">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
    
    <div class="footer">
      <p>This message was sent from your website contact form.</p>
      <p>You can reply directly to ${email}</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        message: 'Failed to send email via Resend',
        details: error.message,
      });
    }

    console.log('Email sent successfully via Resend:', data?.id);

    return res.status(200).json({
      message: 'Message sent successfully!',
      emailId: data?.id,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Unexpected error in contact API:', error);

    return res.status(500).json({
      message: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
