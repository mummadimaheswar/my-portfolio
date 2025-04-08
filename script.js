
toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
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
  scrollFadeIn();
  addButtonHoverEffects();
});

window.addEventListener('scroll', scrollFadeIn);

// Toggle theme on button click
const themeButton = document.querySelector('.theme-toggle');
if (themeButton) {
  themeButton.addEventListener('click', toggleDarkMode);
}

