// === Advanced Portfolio JS with GSAP and ScrollTrigger ===

// Toggle dark mode with class switch and save preference to localStorage
const toggleDarkMode = () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Apply stored theme or system preference on page load
const applyStoredTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Listen to system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  });
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

// Add fade-in animation classes
const animateOnLoad = () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('pre-fade');
    setTimeout(() => el.classList.add('visible'), 100);
  });
};

// Smooth scroll for internal links
const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// Modal popup for image previews
const initModals = () => {
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal img');
  const closeModal = document.querySelector('.modal .close');

  if (modal && modalImg && closeModal) {
    document.querySelectorAll('.previewable').forEach(img => {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('show');
      });
    });

    closeModal.addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('show');
    });
  }
};

// GSAP and ScrollTrigger animations
const initGSAPAnimations = () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray('.gsap-fade-in').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
      });
    });
  }
};

// Theme toggle visual cue animation
const addThemeToggleCue = () => {
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.classList.add('bump');
    setTimeout(() => btn.classList.remove('bump'), 300);
  }
};

// Initialization
window.addEventListener('DOMContentLoaded', () => {
  applyStoredTheme();
  scrollFadeIn();
  addButtonHoverEffects();
  animateOnLoad();
  smoothScroll();
  initModals();
  initGSAPAnimations();

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      toggleDarkMode();
      addThemeToggleCue();
    });
  }
});

// Scroll event with debounce and element check for performance
if (document.querySelectorAll('.fade-in').length > 0) {
  window.addEventListener('scroll', debounce(scrollFadeIn));
}
