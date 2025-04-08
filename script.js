// Theme toggle with localStorage and auto detection
function toggleTheme() {
  const body = document.body;
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme === 'dark') {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }

  const btn = document.querySelector('.theme-toggle');
  btn.classList.add('animate');
  setTimeout(() => btn.classList.remove('animate'), 600);
}

// Load theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const userPreference = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const body = document.body;

  if (userPreference === 'dark') {
    body.classList.add('dark-mode');
  } else if (userPreference === 'light') {
    body.classList.remove('dark-mode');
  } else if (prefersDark) {
    body.classList.add('dark-mode');
  }

  // Animate elements with fade-in class
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 * i);
  });
});

