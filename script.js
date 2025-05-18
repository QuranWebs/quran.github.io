// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Toggle dark mode and save preference
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

function toggleMoreEmotions() {
  const extraCards = document.querySelectorAll('.extra-card');
  const arrow = document.getElementById('arrow');
  const showing = extraCards[0].classList.contains('show');

  extraCards.forEach(card => {
    card.classList.toggle('show');
  });

  arrow.textContent = showing ? '▾' : '▴';
}
