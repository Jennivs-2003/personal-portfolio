# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive emails when someone submits the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Janani,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

4. Click **Save**
5. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 5: Update Your Code

Open `script.js` and replace these placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your actual Public Key (line 89)
2. Replace `YOUR_SERVICE_ID` with your Service ID (line 120)
3. Replace `YOUR_TEMPLATE_ID` with your Template ID (line 120)

**Example:**
```javascript
emailjs.init("abc123xyz789"); // Your Public Key

// ... later in the code ...

emailjs.send('service_abc123', 'template_xyz789', emailParams)
```

## Step 6: Test the Form

1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email inbox (and spam folder) for the message

## Free Plan Limits

- **200 emails per month** (free plan)
- Perfect for portfolio websites
- No credit card required

## Troubleshooting

- **Emails not arriving?** Check your spam folder
- **Error in console?** Make sure all IDs are correct
- **Form not submitting?** Check browser console for errors

## Alternative: Formspree

If you prefer, you can also use Formspree:
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a form
3. Get your form endpoint URL
4. Update the form action in HTML

---

**Need help?** Check EmailJS documentation: https://www.emailjs.com/docs/
