// ==== ELEMENT SELECTORS ====
const bigBangButton = document.querySelector('#bigBangButton');
const catIcon = document.getElementById('CatIcon');
const CalistoSection = document.getElementById('Calistosection');
const CalistoPortret = document.getElementById('CalistoPortret');
const CalistoText = document.getElementById('header-text');
const carousel = document.querySelector('.carousel-container');
const DionisSection = document.getElementById('DionisSection');
const stars = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');
const stars4 = document.getElementById('stars4');
const gradientBox = document.getElementById('gradient-box');

// ==== STAR LOGIC ====
function giveStars(n, color) {
  const shadows = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    shadows.push(`${x}px ${y}px ${color}`);
    shadows.push(`${x + 0.7}px ${y + 1}px #F7717D`);
  }
  return shadows.join(',');
}

function setStars(color) {
  stars.style.boxShadow = giveStars(900, color);
  stars2.style.boxShadow = giveStars(600, color);
  stars3.style.boxShadow = giveStars(300, color);
  stars4.style.boxShadow = giveStars(5, color);
}

function initializeDarkStars() {
  setStars('black');
}

function initializeLightStars() {
  setStars('white');
  fadeInStars();

  setTimeout(() => {
    stars.style.animation = "animStar 40s infinite";
    stars2.style.animation = "animStar 50s infinite 1.5s";
    stars3.style.animation = "animStar 60s infinite 2.2s";
    stars4.style.animation = "animStar 65s infinite 4s";
  }, 1500);
}

function fadeOutStars() {
  const fadeStyle = "fade-out 3s forwards";
  [stars, stars2, stars3, stars4, bigBangButton].forEach(el => el.style.animation = fadeStyle);
}

function fadeInStars() {
  const fadeIn = "fade-in 3s forwards";
  [stars, stars2, stars3, stars4].forEach(el => el.style.animation = fadeIn);
}

function clearOutStars() {
  fadeOutStars();

  setTimeout(() => {
    [stars, stars2, stars3, stars4].forEach(el => el.style.boxShadow = "none");
    catIcon.src = "resources/096.svg";
    bigBangButton.style.animation = "fade-in 2s forwards";
    bigBangButton.style.scale = 1.2;
    addStarsTransition();
  }, 3500);
}

function addStarsTransition() {
  setTimeout(() => {
    bigBangButton.style.animation = "fade-out 3s forwards";
    setTimeout(() => bigBangButton.style.display = "none", 3000);
    fadeInStars();
    setTimeout(initializeLightStars, 2000);
  }, 1500);
}

function expandGradient() {
  let stop = 1;
  const interval = setInterval(() => {
    if (stop > 100) {
      clearInterval(interval);
      return;
    }
    gradientBox.style.background = `radial-gradient(circle at center, #12152B ${stop}%, white ${stop + 5}%)`;
    stop++;
  }, 50);
}

// ==== MAIN LOGIC ====
initializeDarkStars();

bigBangButton.addEventListener('click', () => {
  bigBangButton.disabled = true;
  expandGradient();
  clearOutStars();

  setTimeout(() => {
    gradientBox.style.background = `linear-gradient(to bottom, #12152B 0%, #2A2E44 100%)`;
    CalistoSection.style.display = "flex";
    CalistoSection.style.animation = "fadein-from-bottom 1.3s forwards";
    CalistoPortret.style.animation = "fadein-from-right 1.6s forwards";
    carousel.style.display = "flex";
    DionisSection.style.display = "flex";
  }, 7500);
});

// ==== OBSERVER ====
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === carousel && entry.isIntersecting) {
        carousel.classList.add('show');
      }
      if (entry.target === DionisSection && entry.isIntersecting) {
        DionisSection.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  if (carousel) observer.observe(carousel);
  if (DionisSection) observer.observe(DionisSection);
});
