// Responsive nav menu toggle
// Shows/hides the nav links on tablet and mobile when the hamburger icon is clicked

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Guard clause in case a page doesn't have this markup
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close the menu automatically if a nav link is clicked
  // (better UX than leaving it open after navigating)
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
});