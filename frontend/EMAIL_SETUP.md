# Email Setup Guide for JusDote Marketing

## Setting up EmailJS to send emails to JusdoteInquiry@gmail.com

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account: **JusdoteInquiry@gmail.com**
5. Use the password: **CharlieKirkNeck67420**
6. Name your service: **service_jusdote**
7. Save the service

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{from_name}}

**Content:**
```
New contact form submission from JusDote Marketing website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service Interest: {{service}}
Budget: {{budget}}
Message: {{message}}

---
This email was sent from the JusDote Marketing contact form.
```

4. Save the template with ID: **template_contact**

### Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your "Public Key" (it looks like: user_xxxxxxxxxxxxx)

### Step 5: Update the Code
1. Open `frontend/src/components/Contact.jsx`
2. Replace `YOUR_PUBLIC_KEY` on line 63 with your actual public key
3. Save the file

### Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Submit it to test if emails are being sent to JusdoteInquiry@gmail.com

## Alternative: Simple Backend Solution

If you prefer a backend solution, you can also:

1. Create a simple Node.js/Express server
2. Use Nodemailer with Gmail SMTP
3. Set up the same email credentials
4. Create an API endpoint to handle form submissions

## Security Note
- The Gmail password is included in this setup for convenience
- In production, consider using OAuth2 or app-specific passwords
- EmailJS handles the email sending securely from the frontend

## Troubleshooting
- Make sure your Gmail account allows "less secure apps" or use app-specific passwords
- Check the EmailJS dashboard for any error logs
- Verify all template variables match the form data structure
