document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle mobile navbar
  hamburger.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });

  // Toggle mobile dropdowns
  dropdowns.forEach(drop => {
    const btn = drop.querySelector('.dropbtn');
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      drop.classList.toggle('open');
    });
  });
});