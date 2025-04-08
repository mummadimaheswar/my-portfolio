/* === Advanced Portfolio CSS with Visual Enhancements === */

/* Base Styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(120deg, #f4f4f4, #e8e8e8);
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
  background: linear-gradient(120deg, #121212, #1f1f1f);
  color: #eee;
}

body.auto-theme {
  background: linear-gradient(120deg, #f4f4f4, #e8e8e8);
  color: #333;
}

@media (prefers-color-scheme: dark) {
  body.auto-theme {
    background: linear-gradient(120deg, #121212, #1f1f1f);
    color: #eee;
  }
}

.transition-theme {
  transition: background-color 0.5s ease, color 0.5s ease;
}

header, footer {
  padding: 1rem;
  text-align: center;
  background-color: rgba(34, 34, 34, 0.8);
  color: #fff;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-mode header,
.dark-mode footer,
body.auto-theme header,
body.auto-theme footer {
  background-color: rgba(28, 28, 28, 0.8);
  color: #eee;
}

/* Navigation */
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

nav a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.3s, color 0.3s;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: -4px;
  background: #ff6b81;
  transition: width 0.3s;
}

nav a:hover::after {
  width: 100%;
}

nav a:hover {
  background-color: rgba(255, 107, 129, 0.1);
}

/* Sections */
section {
  padding: 2rem;
  max-width: 960px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.dark-mode section,
body.auto-theme section {
  background: rgba(18, 18, 18, 0.6);
  color: #eee;
}

/* Buttons */
button {
  background-color: #ff6b81;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button.hover-effect,
button:hover {
  background-color: #ff4757;
  transform: scale(1.05);
}

/* Fade In Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal.show {
  display: flex;
}

.modal img {
  max-width: 90%;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.modal .close {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

/* GSAP Fade In */
.gsap-fade-in {
  opacity: 0;
}

/* Theme Toggle Bump Animation */
.theme-toggle.bump {
  animation: bump 0.3s ease;
}

@keyframes bump {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Resume Section */
.resume-entry {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

.resume-entry h3 {
  margin-bottom: 0.5rem;
  color: #ff6b81;
}

.resume-entry p {
  margin: 0.25rem 0;
}

.dark-mode .resume-entry,
body.auto-theme .resume-entry {
  border-color: #444;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  section {
    padding: 1rem;
  }
}

/* Dark/Light Toggle Icon Styles */
.theme-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10000;
  transition: transform 0.3s ease;
}

.theme-toggle svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.theme-toggle:hover {
  transform: scale(1.2);
}

/* Animated Theme Icon */
.theme-toggle.animate svg {
  animation: spin 0.6s ease;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Achievements Section */
.achievements {
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.dark-mode .achievements,
body.auto-theme .achievements {
  background: rgba(18, 18, 18, 0.6);
  color: #eee;
}

.achievements h2 {
  text-align: center;
  color: #ff6b81;
  margin-bottom: 1rem;
}

.achievements ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.achievements li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

