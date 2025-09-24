// ===== HERO BACKGROUND SLIDESHOW =====
const hero = document.querySelector('.hero');

// List your images (use correct paths)
const heroImages = [
  'images/cows.jpg',
  'images/clearcow.jpg',
  'images/mancow.jpg',
  'images/dairycows.jpg',
  'images/farmers.jpg'

];

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



let current = 0;

function changeHeroBackground() {
  hero.style.backgroundImage = `url(${heroImages[current]})`;
  current = (current + 1) % heroImages.length; // loop back to start
}

// Set initial image
changeHeroBackground();

// Change every 3 seconds
setInterval(changeHeroBackground, 3000);


