import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',  // or another service
  auth: {
    user: process.env.EMAIL_USER || 'priyanshu.intern24@gmail.com',  // your email
    pass: process.env.EMAIL_PASS,  // your app password
  },
});

/**
 * IMPORTANT: To implement actual email sending, follow these steps:
 * 
 * 1. Install an email sending package:
 *    npm install nodemailer
 *    
 * 2. Import and configure it at the top of this file:
 *    import nodemailer from 'nodemailer';
 *    
 *    const transporter = nodemailer.createTransport({
 *      service: 'gmail',  // or another service
 *      auth: {
 *        user: process.env.EMAIL_USER,  // your email
 *        pass: process.env.EMAIL_PASS,  // your app password
 *      },
 *    });
 *    
 * 3. Create a .env.local file in the project root with your credentials:
 *    EMAIL_USER=your-email@gmail.com
 *    EMAIL_PASS=your-app-password
 *    
 * 4. Uncomment and use the sendEmail function in the POST handler
 */

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, title, message, recipientEmail } = body;
    
    // Validate the input
    if (!name || !email || !title || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, we'll just log the data and return a success response
    console.log('Contact form submission:', {
      name,
      email,
      title,
      message,
      recipientEmail: recipientEmail || 'priyanshu.intern24@gmail.com'
    });

    // Send email using nodemailer
    try {
      await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER || 'priyanshu.intern24@gmail.com'}>`,
        to: 'priyanshu.intern24@gmail.com',
        replyTo: email,
        subject: `Contact Form: ${title}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`
      });
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Still return success to the user, but log the email sending error
    }

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}