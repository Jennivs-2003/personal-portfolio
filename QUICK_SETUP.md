# Quick Email Setup - Choose One Option

## Option 1: Formspree (EASIEST - 2 minutes) ⭐ RECOMMENDED

### Steps:
1. Go to https://formspree.io/
2. Click "Sign Up" (free account - 50 submissions/month)
3. After signup, click "New Form"
4. Form name: "Portfolio Contact"
5. Email: jananivs73@gmail.com
6. Click "Create Form"
7. Copy your Form ID (looks like: `YqXzAbCd`)

### Update Your Code:
Open `script.js` and replace the entire contact form section with this:

```javascript
// Formspree Configuration
const FORMPREE_FORM_ID = 'YOUR_FORM_ID_HERE'; // Replace with your Formspree form ID

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        
        // Send to Formspree
        fetch(`https://formspree.io/f/${FORMPREE_FORM_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
                _replyto: email
            })
        })
        .then(response => {
            if (response.ok) {
                showMessage('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            showMessage('Something went wrong. Please contact me directly at jananivs73@gmail.com', 'error');
            console.error('Formspree Error:', error);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        });
    });
}
```

**That's it!** Formspree will send emails directly to jananivs73@gmail.com

---

## Option 2: EmailJS Setup (More Control)

### Step 1: Create Account
1. Go to https://www.emailjs.com/
2. Sign up (free - 200 emails/month)

### Step 2: Add Email Service
1. Dashboard → Email Services → Add New Service
2. Choose "Gmail" (or your email provider)
3. Click "Connect Account"
4. Authorize EmailJS to access your Gmail
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Template
1. Dashboard → Email Templates → Create New Template
2. Template Name: "Portfolio Contact"
3. Subject: `New Message from {{from_name}}`
4. Content:
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```
5. Click "Save"
6. Copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Dashboard → Account → General
2. Copy your **Public Key** (e.g., `abc123xyz789`)

### Step 5: Update script.js
Open `script.js` and update line 89-92:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your-public-key-here',        // From Account → General
    SERVICE_ID: 'service_abc123',              // From Email Services
    TEMPLATE_ID: 'template_xyz789'             // From Email Templates
};
```

Replace with your actual values!

---

## Which Should You Choose?

- **Formspree**: Easier, faster setup, works immediately
- **EmailJS**: More customization, better for advanced users

**Recommendation: Start with Formspree, then switch to EmailJS later if needed.**
