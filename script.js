// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Header background on scroll
function updateHeader() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
    }
}

// NEW: Parallax effect for the hero section
function initParallaxEffect() {
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const speed = 0.02; // Adjust sensitivity
            const x = (window.innerWidth / 2 - e.pageX) * speed;
            const y = (window.innerHeight / 2 - e.pageY) * speed;

            // Apply parallax to elements within the hero section and global particles
            // Includes the new '.hero-graphic-left'
            document.querySelectorAll('.bg-particles, .terminal, .hero-graphic-left').forEach(el => {
                if (el) {
                    el.style.transform = `translate(${x}px, ${y}px)`;
                    // For terminal, retain its original translateY if it has one
                    if (el.classList.contains('terminal')) {
                        el.style.transform += ` translateY(-50%)`;
                    }
                }
            });
        });
    }
}


// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    animateOnScroll();
    updateHeader();
    initParallaxEffect(); // Call the new parallax function
});

// Event listeners
window.addEventListener('scroll', function() {
    animateOnScroll();
    updateHeader();
});

// Add some interactive hover effects
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});