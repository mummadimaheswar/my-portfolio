// === Advanced Portfolio JavaScript ===

// Dark Mode Toggle with localStorage
const themeToggle = document.querySelector('.theme-toggle');
const rootElement = document.documentElement;

function applyDarkModePreference() {
  const isDarkMode = localStorage.getItem('theme') === 'dark';
  if (isDarkMode) {
    rootElement.classList.add('dark-mode');
  } else {
    rootElement.classList.remove('dark-mode');
  }
}

applyDarkModePreference();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    rootElement.classList.toggle('dark-mode');
    const isDark = rootElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Modal for image gallery
const modal = document.querySelector('.image-modal');
const modalImg = modal?.querySelector('img');
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    if (modal && modalImg) {
      modalImg.src = img.src;
      modal.classList.add('active');
    }
  });
});

modal?.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Debounced fade-in on scroll
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const fadeInElements = document.querySelectorAll('.fade-in');

const handleScroll = debounce(() => {
  fadeInElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}, 100);

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Smooth scroll to sections
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typewriter Effect for Headline
const typewriterElement = document.querySelector('.typewriter');
const words = ["AI Developer", "Machine Learning Engineer", "Student Portfolio"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typewriterElement) return;
  const currentWord = words[wordIndex];
  const visibleText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);
  typewriterElement.textContent = visibleText;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 60 : 100);
  }
}

type();

// Auto-hide navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!navbar) return;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-80px'; // Hide
  } else {
    navbar.style.top = '0'; // Show
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Page loader animation
const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 600);
  }
});
