// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Create mobile menu toggle button
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');

  const navToggle = document.createElement('button');
  navToggle.className = 'nav-toggle';
  navToggle.innerHTML = '<i class="fa fa-bars"></i>';

  header.querySelector('.container').insertBefore(navToggle, nav);

  // Toggle mobile menu
  navToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
      navToggle.innerHTML = '<i class="fa fa-times"></i>';
    } else {
      navToggle.innerHTML = '<i class="fa fa-bars"></i>';
    }
  });

  // Close mobile menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      nav.classList.remove('active');
      navToggle.innerHTML = '<i class="fa fa-bars"></i>';
    }
  });

  // Testimonial Slider
  const testimonials = [
    {
      quote: "I have nothing but great things to say about CREM Management. CREM Management is the best partner on the ground to effectively manage and communicate with tenants. The value that they bring to the table exceeds both what annual expenses a management site costs us and what our larger, corporate client says.",
      author: "MITCHELL KENT, TRAVERS LLC INVESTMENTS"
    },
    {
      quote: "Working with CREM Management has been a game-changer for our real estate investments. Their attention to detail and proactive approach has maximized our returns while minimizing headaches.",
      author: "JENNIFER SMITH, PROPERTY OWNER"
    },
    {
      quote: "The team at CREM consistently delivers exceptional service. They handle tenant issues promptly and keep our properties in excellent condition. Highly recommended for any property owner in Los Angeles.",
      author: "MICHAEL JOHNSON, REAL ESTATE INVESTOR"
    }
  ];

  let currentTestimonial = 0;
  const testimonialQuote = document.querySelector('.testimonial p');
  const testimonialAuthor = document.querySelector('.testimonial h3');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (testimonialQuote && testimonialAuthor && prevBtn && nextBtn) {
    // Display testimonial function
    function displayTestimonial(index) {
      testimonialQuote.textContent = testimonials[index].quote;
      testimonialAuthor.textContent = testimonials[index].author;
    }

    // Previous testimonial
    prevBtn.addEventListener('click', function() {
      currentTestimonial--;
      if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
      }
      displayTestimonial(currentTestimonial);
    });

    // Next testimonial
    nextBtn.addEventListener('click', function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
      }
      displayTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials
    setInterval(function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
      }
      displayTestimonial(currentTestimonial);
    }, 10000); // Change testimonial every 10 seconds
  }

  // Form Validation
  const contactForms = document.querySelectorAll('form');

  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input, textarea');

      inputs.forEach(input => {
        if (input.value.trim() === '') {
          isValid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '';
        }
      });

      if (isValid) {
        // In a real site, this would send data to the server
        alert('Thank you for your message! We will contact you soon.');
        form.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  });

  // Smooth Scrolling for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Account for fixed header
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          navToggle.innerHTML = '<i class="fa fa-bars"></i>';
        }
      }
    });
  });

  // Header Transparency on Scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
  });
});
