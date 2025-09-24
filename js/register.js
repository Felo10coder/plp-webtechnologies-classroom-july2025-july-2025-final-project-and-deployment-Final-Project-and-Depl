function openTab(evt, tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(content => content.classList.remove("active"));

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => btn.classList.remove("active"));

  // Show selected tab
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});