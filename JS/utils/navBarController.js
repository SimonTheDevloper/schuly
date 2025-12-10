const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenu = document.getElementById('closeMenu');
const slideOutMenu = document.getElementById('slideOutMenu');
const menuOverlay = document.getElementById('menuOverlay');

hamburgerBtn.addEventListener('click', () => {
    slideOutMenu.classList.add('open');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeMenuFunction() {
    slideOutMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeMenu.addEventListener('click', closeMenuFunction);
menuOverlay.addEventListener('click', closeMenuFunction);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && slideOutMenu.classList.contains('open')) {
        closeMenuFunction();
    }
});

const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenuFunction);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenuFunction();
    }
});