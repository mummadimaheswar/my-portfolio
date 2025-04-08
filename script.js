// === Advanced Portfolio JS ===

// Toggle dark mode with class switch and save preference to localStorage
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Apply stored theme on page load
const applyStoredTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// Debounced scroll handler for fade-in animations
const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Fade-in on scroll animation
const scrollFadeIn = () => {
  const elements = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
};

// Hover effect for buttons
const addButtonHoverEffects = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('hover-effect'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('hover-effect'));
  });
};

// Initialization
window.addEventListener('DOMContentLoaded', () => {
  applyStoredTheme();
  scrollFadeIn();
  addButtonHoverEffects();

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', toggleDarkMode);
  }
});

// Scroll event with debounce for performance
window.addEventListener('scroll', debounce(scrollFadeIn));
