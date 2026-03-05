# Contact Form Debugging Guide

## Quick Debug Steps

### Step 1: Check Browser Console
1. Open your portfolio website
2. Press `F12` or `Right-click → Inspect`
3. Go to the **Console** tab
4. Try submitting the form
5. Look for error messages

### Step 2: Common Error Messages & Solutions

#### Error: "EmailJS library not loaded"
**Solution:** 
- Check if EmailJS script is in HTML (should be in `<head>`)
- Check browser console for script loading errors
- Try refreshing the page

#### Error: "EmailJS not configured"
**Solution:**
- Open `script.js`
- Find `EMAILJS_CONFIG` object (around line 89)
- Replace the placeholder values:
  ```javascript
  const EMAILJS_CONFIG = {
      PUBLIC_KEY: 'your-actual-public-key',
      SERVICE_ID: 'your-actual-service-id',
      TEMPLATE_ID: 'your-actual-template-id'
  };
  ```

#### Error: Status 400 (Invalid Request)
**Solution:**
- Check your EmailJS template variable names
- Template variables must match exactly:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`

#### Error: Status 401 (Authentication Failed)
**Solution:**
- Your Public Key is incorrect
- Go to EmailJS → Account → General
- Copy the Public Key again
- Update `PUBLIC_KEY` in script.js

#### Error: Status 403 (Access Denied)
**Solution:**
- Check EmailJS service settings
- Make sure your service is active
- Verify service permissions

#### Error: Status 404 (Not Found)
**Solution:**
- Service ID or Template ID is incorrect
- Double-check IDs in EmailJS dashboard
- Update `SERVICE_ID` and `TEMPLATE_ID` in script.js

### Step 3: Verify EmailJS Setup

1. **Check Public Key:**
   - Login to EmailJS
   - Go to Account → General
   - Copy Public Key
   - Update in `script.js` line 90

2. **Check Service ID:**
   - Go to Email Services
   - Click on your service
   - Copy Service ID (starts with `service_`)
   - Update in `script.js` line 91

3. **Check Template ID:**
   - Go to Email Templates
   - Click on your template
   - Copy Template ID (starts with `template_`)
   - Update in `script.js` line 92

4. **Verify Template Variables:**
   Your template should have these exact variables:
   ```
   {{from_name}}
   {{from_email}}
   {{subject}}
   {{message}}
   ```

### Step 4: Test Configuration

After updating credentials, test:
1. Open browser console (F12)
2. Submit the form
3. Check console for:
   - "EmailJS initialized successfully" ✅
   - Any error messages ❌

### Step 5: Common Issues Checklist

- [ ] EmailJS account created and verified
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Email template created with correct variables
- [ ] Public Key copied correctly (no extra spaces)
- [ ] Service ID copied correctly
- [ ] Template ID copied correctly
- [ ] Template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Browser console shows no errors
- [ ] Form validation passes before submission

### Step 6: Still Not Working?

1. **Check Network Tab:**
   - Open DevTools → Network tab
   - Submit form
   - Look for failed requests to `api.emailjs.com`
   - Check request details

2. **Test with Simple Template:**
   Create a minimal template:
   ```
   Subject: Test
   Body: {{message}}
   ```

3. **Check EmailJS Dashboard:**
   - Go to EmailJS → Logs
   - See if requests are being received
   - Check for error messages there

4. **Verify Email Service:**
   - Make sure your email service (Gmail) is properly connected
   - Try disconnecting and reconnecting

### Quick Fix: Use Formspree Instead

If EmailJS continues to have issues, you can use Formspree:

1. Go to https://formspree.io/
2. Sign up (free plan available)
3. Create a form
4. Get your form endpoint URL
5. Update HTML form:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

**Need more help?** Check the browser console for specific error messages and share them for further debugging.
