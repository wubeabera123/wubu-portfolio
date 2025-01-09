import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true, // Enable debug logging
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('Received contact form submission:', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      // Test the connection first
      await transporter.verify();
      console.log('SMTP connection verified successfully');

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `
New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
        `,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <h3 style="color: #444;">Message:</h3>
    <div style="background-color: white; padding: 15px; border-radius: 3px;">
      ${message.replace(/\n/g, '<br>')}
    </div>
  </div>
</div>
        `,
      };

      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);

      return res.status(200).json({
        message: 'Message sent successfully',
        messageId: info.messageId,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      throw new Error(`Failed to send email: ${emailError.message}`);
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      message: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
