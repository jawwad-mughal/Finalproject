const navbar = document.querySelector('#navbar');
const navlogo = document.querySelector('#navlogo')

window.addEventListener('scroll', () => {
    navlogo.classList[window.scrollY >= 100 ? 'add' : 'remove']('navlogo');
    navbar.classList[window.scrollY >= 100 ? 'add' : 'remove']('navbar');
    navbar.classList[window.scrollY >= 150 ? 'add' : 'remove']('show');
});

function service_section(){
    let service = document.querySelector('#service')
    let card1 = document.querySelector('#card1')
    let card2 = document.querySelector('#card2')
    let card3 = document.querySelector('#card3')
    let text = document.querySelector('#text')
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    if(mediaQuery.matches){
        window.addEventListener('scroll', () => {
            card1.classList[window.scrollY >= 10 ? 'add' : 'remove']('card1show');
            card2.classList[window.scrollY >= 10 ? 'add' : 'remove']('card2show');
            card3.classList[window.scrollY >= 10 ? 'add' : 'remove']('card3show');
            text.classList[window.scrollY >= 10 ? 'add' : 'remove']('textheadshow');

        })
    }else{
        service.addEventListener('pointerenter',() => {
            card1.classList.add('card1show') 
            card2.classList.add('card2show') 
            card3.classList.add('card3show') 
            text.classList.add('textheadshow') 
        })
        service.addEventListener('pointerleave',() => {
            card1.classList.remove('card1show') 
            card2.classList.remove('card2show') 
            card3.classList.remove('card3show') 
            text.classList.remove('textheadshow') 
        })
        
    }  
}     
service_section()

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