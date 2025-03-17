document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    function toggleMobileMenu() {
      mobileMenu.classList.toggle('active');
      
      // Toggle icons
      if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', toggleMobileMenu);
    });
    
    // Handle header scroll state
    const header = document.getElementById('header');
    
    function updateHeader() {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        header.style.padding = '1rem 0';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
        header.style.boxShadow = 'none';
        header.style.padding = '1.5rem 0';
      }
    }
    
    window.addEventListener('scroll', updateHeader);
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('.submit-button');
        submitButton.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitButton.disabled = true;
        
        setTimeout(() => {
          // Reset form
          contactForm.reset();
          
          // Show success message
          alert('Thank you for your message! I will get back to you soon.');
          
          // Reset button
          submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
          submitButton.disabled = false;
        }, 1500);
      });
    }
    
    // Add scroll animation to reveal elements
    const revealElements = document.querySelectorAll('.section-header, .about-content, .skills-content, .project-card, .contact-content');
    
    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animated');
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Apply initial styles to elements
    revealElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.8s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  });