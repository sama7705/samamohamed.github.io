// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Certificate card: click opens verification link
document.querySelectorAll('.project-card.certificate-card').forEach(function(card) {
  card.addEventListener('click', function() {
    var certUrl = this.getAttribute('data-cert-url');
    if (certUrl) {
      window.open(certUrl, '_blank');
    }
  });
});

// Project card (not certificate): click opens GitHub
document.querySelectorAll('.project-card.clickable:not(.certificate-card)').forEach(function(card) {
  card.addEventListener('click', function() {
    var githubUrl = this.getAttribute('data-github-url');
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  });
});

// Fade-in animation on scroll
var observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(function(el) {
  observer.observe(el);
});

// Header background change on scroll
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(250, 248, 245, 0.98)';
  } else {
    header.style.background = 'rgba(250, 248, 245, 0.95)';
  }
});
