
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};


const applyStoredTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};


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


const addButtonHoverEffects = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('hover-effect'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('hover-effect'));
  });
};


const animateOnLoad = () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('pre-fade');
    setTimeout(() => el.classList.add('visible'), 100);
  });
};

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
    themeButton.addEventListener('click', toggleDarkMode);
  }
});

if (document.querySelectorAll('.fade-in').length > 0) {
  window.addEventListener('scroll', debounce(scrollFadeIn));
}
