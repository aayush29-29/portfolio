// Typed Text Effect
const typedText = document.querySelector('.typed-text');
const textArray = [
  "I'm a Computer Engineering Student.",
  "I love coding in HTML, CSS, JavaScript.",
  "I also know C, C++, C#, and Python.",
  "Creative Developer & Problem Solver."
];
let textIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newTextDelay = 2000; // Pause before typing next text

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Responsive Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('primary-menu');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
});

// Dark Mode Toggle
const darkSwitch = document.getElementById('darkSwitch');
darkSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

// Load dark mode preference
document.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark');
  }
});

// Skills and animation
const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "C", level: 80 },
  { name: "C++", level: 75 },
  { name: "C#", level: 70 },
  { name: "Python", level: 80 },
];

const skillContainer = document.querySelector('.skill-list');
skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'skill-bar';
  skillDiv.innerHTML = `
    <span>${skill.name}</span>
    <div class="bar-bg">
      <div class="bar-fill" style="width:0;"></div>
    </div>
  `;
  skillContainer.appendChild(skillDiv);
});

function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const windowBottom = window.innerHeight + window.scrollY;
  if (windowBottom > skillsSection.offsetTop + 100) {
    document.querySelectorAll('.bar-fill').forEach((bar, i) => {
      bar.style.width = skills[i].level + '%';
    });
    window.removeEventListener('scroll', animateSkills);
  }
}
window.addEventListener('scroll', animateSkills);

// Scroll to Top Button
const toTopBtn = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 400){
    toTopBtn.style.display = 'flex';
  } else {
    toTopBtn.style.display = 'none';
  }
});
toTopBtn.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// ScrollReveal Animations
ScrollReveal().reveal('.hero-content', {delay: 300, distance: '50px', origin: 'bottom', duration: 700});
ScrollReveal().reveal('.about-img-wrapper', {delay: 400, distance: '50px', origin: 'left', duration: 700});
ScrollReveal().reveal('.about-text', {delay: 500, distance: '50px', origin: 'right', duration: 700});
ScrollReveal().reveal('.card', {delay: 300, distance: '20px', origin: 'bottom', duration: 700, interval: 100});
ScrollReveal().reveal('.section-skills h2', {delay: 300, origin: 'top', duration: 700});
ScrollReveal().reveal('.skill-bar', {delay: 400, origin: 'bottom', duration: 700, interval: 100});
