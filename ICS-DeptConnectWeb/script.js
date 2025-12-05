
// hamburger

    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.onclick = () => {
        navbar.classList.toggle('active');
    };

    dropdowns.forEach(drop => {
        drop.querySelector('.dropbtn').onclick = function(e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                drop.classList.toggle('open');
            }
        };
    });

