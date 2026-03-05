// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-card, .cert-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Formspree Configuration
const FORMPREE_FORM_ID = 'mqeyzbko'; // Your Formspree form ID

// EmailJS Configuration (ALTERNATIVE OPTION)
// Uncomment and configure if you prefer EmailJS instead
/*
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_SERVICE_ID',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
};
*/

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
        
        // Check which service is configured
        if (FORMPREE_FORM_ID && FORMPREE_FORM_ID !== 'YOUR_FORMPREE_FORM_ID') {
            // Use Formspree (EASIER OPTION)
            fetch(`https://formspree.io/f/${FORMPREE_FORM_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
                    return response.json().then(data => {
                        throw new Error(data.error || 'Form submission failed');
                    });
                }
            })
            .catch(error => {
                console.error('Formspree Error:', error);
                showMessage('Something went wrong. Please contact me directly at jananivs73@gmail.com', 'error');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            });
        } else {
            // Fallback: Show configuration message
            showMessage('Email service not configured. Please contact me directly at jananivs73@gmail.com', 'error');
            console.error('Please configure Formspree or EmailJS. See QUICK_SETUP.md for instructions.');
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        }
    });
}

// Resume Button Handler
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    // Set the resume file path
    const resumeFileName = 'resume.pdf.pdf'; // Your actual resume filename
    
    // Direct download - href attribute handles it
    // Fallback handler for browsers that need it
    resumeBtn.addEventListener('click', function(e) {
        // Check if file exists, if not show error
        fetch(resumeFileName, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    console.warn('Resume file not found. Make sure resume.pdf.pdf exists in the same folder.');
                }
            })
            .catch(error => {
                console.warn('Resume file check failed:', error);
            });
    });
}

// Configuration check on page load
window.addEventListener('load', function() {
    if (FORMPREE_FORM_ID === 'YOUR_FORMPREE_FORM_ID') {
        console.warn('Formspree not configured. Please update FORMPREE_FORM_ID in script.js');
        console.info('Quick setup: Go to https://formspree.io/ and create a free form, then update FORMPREE_FORM_ID');
    } else {
        console.log('Formspree configured. Form ID:', FORMPREE_FORM_ID);
    }
});

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Animate skill progress bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillBarObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillBarObserver.observe(bar);
});
