/* ========================================
   CYBERSECURITY PORTFOLIO - JAVASCRIPT
   ======================================== */

/* ========================================
   DYNAMIC TERMINAL TEXT ANIMATION
   ======================================== */

const dynamicTextEl = document.getElementById('dynamic-text');
const phrases = [
    'Penetrating firewalls...',
    'Encrypting data streams...',
    'Analyzing security protocols...',
    'Executing security audits...',
    'Patching vulnerabilities...',
    'Building secure systems...'
];

let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function animateDynamicText() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    dynamicTextEl.textContent = currentPhrase.substring(0, charIndex);
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 1500; // Pause before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        speed = 500; // Pause before typing next phrase
    }
    
    setTimeout(animateDynamicText, speed);
}

// Start animation
if (dynamicTextEl) {
    animateDynamicText();
}

/* ========================================
   HAMBURGER MENU TOGGLE
   ======================================== */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================================
   CONTACT FORM HANDLING
   ======================================== */

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert('❌ Please fill in all fields');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('❌ Please enter a valid email address');
            return false;
        }

        // Show loading message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span class="btn-icon">⏳</span> Sending...';
        submitButton.disabled = true;

        // Success message will show after FormSubmit sends the email
        setTimeout(() => {
            alert(`✅ Thank you, ${name}! Your message has been sent to workwithme067@gmail.com. I'll get back to you soon.`);
        }, 1000);
    });
}

/* ========================================
   NAVBAR BACKGROUND ON SCROLL
   ======================================== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        header.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.2)';
    } else {
        header.style.backgroundColor = 'rgba(10, 14, 39, 0.8)';
        header.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.1)';
    }
});

/* ========================================
   RESUME DOWNLOAD BUTTON
   ======================================== */

const resumeBtn = document.querySelector('.resume-btn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', function (e) {
        alert('📥 Resume download feature will be enabled soon. Contact me for your copy!');
        e.preventDefault();
    });
}

/* ========================================
   GLOWING EFFECT ON HOVER FOR CARDS
   ======================================== */

document.querySelectorAll('.skill-card, .experience-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

/* ========================================
   INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ======================================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .experience-card, .project-card, .about-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ========================================
   KEYBOARD SHORTCUTS
   ======================================== */

document.addEventListener('keydown', (e) => {
    // Ctrl+J to jump to projects
    if (e.ctrlKey && e.key === 'j') {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Ctrl+K to jump to contact
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Ctrl+L to jump to home
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

/* ========================================
   CURSOR FOLLOW EFFECT (Optional)
   ======================================== */

const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #00ff41;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.5;
    display: none;
`;
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    
    requestAnimationFrame(animateCursor);
}

// Uncomment to enable cursor follower
// cursor.style.display = 'block';
// animateCursor();

/* ========================================
   PAGE LOAD ANIMATION
   ======================================== */

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Trigger fade in
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

/* ========================================
   CONSOLE MESSAGE
   ======================================== */

console.log('%c🛡️ Welcome to JIGS.org 🛡️', 'color: #00ff41; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff41;');
console.log('%cBuilding secure systems, breaking insecure ones.', 'color: #00d4ff; font-size: 14px;');
console.log('%c👁️ Security First | Cybersecurity Engineer & Founder', 'color: #b024ff; font-size: 12px;');
console.log('%c📧 Get in touch: workwithme067@gmail.com', 'color: #00ff41; font-size: 12px;');
