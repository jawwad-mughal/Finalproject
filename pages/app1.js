const navbar = document.querySelector('#navbar');
const navlogo = document.querySelector('#navlogo')

window.addEventListener('scroll', () => {
    navlogo.classList[window.scrollY >= 100 ? 'add' : 'remove']('navlogo');
    navbar.classList[window.scrollY >= 100 ? 'add' : 'remove']('navbar');
    navbar.classList[window.scrollY >= 150 ? 'add' : 'remove']('show');
    
});


function about(){
    const SecondSlider = document.querySelector('#SecondSlider')
    let main_image_slider = document.querySelector('#main_image_slider')
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    if(mediaQuery.matches){
        window.addEventListener('scroll', () => {
            SecondSlider.classList[window.scrollY >= 50 ? 'add' : 'remove']('Second_Slider_show');
            // console.log(window.scrollY)
        })
    }else{

        main_image_slider.addEventListener('mouseenter',() => {
            SecondSlider.classList.add('Second_Slider_show')
        })
        main_image_slider.addEventListener('mouseleave',() => {
            SecondSlider.classList.remove('Second_Slider_show')
        })
    }
}
about()

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