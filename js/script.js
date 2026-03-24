document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Dynamic header on scroll (optional, can be added later)
    // window.addEventListener('scroll', function() {
    //     const header = document.querySelector('header');
    //     if (window.scrollY > 50) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // });

    // Redirect all buttons and clickable images to google.com
    document.querySelectorAll('a.btn, a.btn-small, .clickable-image').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'https://google.com';
        });
    });

    // Form submission redirect
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Redirecionando para o Google.');
            window.location.href = 'https://google.com';
        });
    }
});
