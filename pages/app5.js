function changeLinkColor() {
    let navLinks = document.querySelectorAll('.navlist a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            navLinks.forEach((links) => links.style.color = '')
            e.target.style.color = 'blue';
        });
        let href = link.getAttribute('href');
         if (href === '#') {
            link.style.color = 'blue';  
        }
        
    });
}
changeLinkColor();

document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
    }

    
    menuToggle.addEventListener('click', toggleMobileMenu);

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});

const navbar = document.querySelector('#navbar');
const navlogo = document.querySelector('#navlogo')

window.addEventListener('scroll', () => {
    navlogo.classList[window.scrollY >= 100 ? 'add' : 'remove']('navlogo');
    navbar.classList[window.scrollY >= 140 ? 'add' : 'remove']('navbar');
    navbar.classList[window.scrollY >= 180 ? 'add' : 'remove']('show');
    
});