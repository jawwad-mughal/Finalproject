const navbar = document.querySelector('#navbar');
const navlogo = document.querySelector('#navlogo')

window.addEventListener('scroll', () => {
    navlogo.classList[window.scrollY >= 100 ? 'add' : 'remove']('navlogo');
    navbar.classList[window.scrollY >= 140 ? 'add' : 'remove']('navbar');
    navbar.classList[window.scrollY >= 180 ? 'add' : 'remove']('show');
    
});

function image_banner(){
    const imageBanner = document.querySelector('#image-banner')
    const imageContent = document.querySelector('#imagecontent')
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    if(mediaQuery.matches){
        window.addEventListener('scroll', () => {
            imageContent.classList[window.scrollY >= 10 ? 'add' : 'remove']('contentimageshow');
        }); 
    }else{

        imageBanner.addEventListener('mouseenter',() => {
            imageContent.classList.add('contentimageshow')
        })
        imageBanner.addEventListener('mouseleave',() => {
            imageContent.classList.remove('contentimageshow')
        })

    }
}
image_banner()

function about(){
    const SecondSlider = document.querySelector('#SecondSlider')
    let main_image_slider = document.querySelector('#main_image_slider')
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    if(mediaQuery.matches){
    
        window.addEventListener('scroll', () => {
            SecondSlider.classList[window.scrollY >= 800 ? 'add' : 'remove']('Second_Slider_show');
            // SecondSlider.classList[window.scrollY >= 1700 ? 'remove' : 'add']('Second_Slider_show');
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

const slide1 = document.getElementById('Image1');
const slide2 = document.getElementById('Image2');

function showSlide1() {
    slide1.classList.remove('closeimage-slider1');
    slide1.classList.add('openimage-slider1');
    slide2.classList.remove('openimage-slider2');
    slide2.classList.add('closeimage-slider2');
}
function showSlide2() {
    slide1.classList.remove('openimage-slider1');
    slide1.classList.add('closeimage-slider1');
    slide2.classList.remove('closeimage-slider2');
    slide2.classList.add('openimage-slider2');
}
function timer(){
    let currentSlide = 1;
    setInterval(() => {
        if (currentSlide === 1) {
            showSlide2();
            currentSlide++;
        } else {
            showSlide1();
            currentSlide--;
        }
    }, 3000);
}
timer()

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

function service_section(){
    let service = document.querySelector('#service')
    let card1 = document.querySelector('#card1')
    let card2 = document.querySelector('#card2')
    let card3 = document.querySelector('#card3')
    let text = document.querySelector('#text')
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    if(mediaQuery.matches){
        window.addEventListener('scroll', () => {
            card1.classList[window.scrollY >= 1700 ? 'add' : 'remove']('card1show');
            card2.classList[window.scrollY >= 1700 ? 'add' : 'remove']('card2show');
            card3.classList[window.scrollY >= 1700 ? 'add' : 'remove']('card3show');
            text.classList[window.scrollY >= 1700 ? 'add' : 'remove']('textheadshow');

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

function projectsection(){
    let project = document.querySelector('#project')
    let backgroundcolor = document.querySelector('#backgroundcolor')
    let card11 = document.querySelector('#card11')
    let card22 = document.querySelector('#card22')
    let card33 = document.querySelector('#card33')
    let h2 = document.querySelector('#h2')
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    if(mediaQuery.matches){
        window.addEventListener('scroll', () => {
            backgroundcolor.classList[window.scrollY >= 3100 ? 'add' : 'remove']('backgroundcolor');
            card11.classList[window.scrollY >= 3100 ? 'add' : 'remove']('card11show');
            card22.classList[window.scrollY >= 3100 ? 'add' : 'remove']('card22show');
            card33.classList[window.scrollY >= 3100 ? 'add' : 'remove']('card33show');
            h2.classList[window.scrollY >= 3100 ? 'add' : 'remove']('h2show');
        })
    }else{
        project.addEventListener('pointerenter',() => {
            backgroundcolor.classList.add('backgroundcolor')
            card11.classList.add('card11show')
            card22.classList.add('card22show')
            card33.classList.add('card33show')
            h2.classList.add('h2show')
        })
        project.addEventListener('pointerleave',() => {
            backgroundcolor.classList.remove('backgroundcolor')
            card11.classList.remove('card11show')
            card22.classList.remove('card22show')
            card33.classList.remove('card33show')
            h2.classList.remove('h2show')
        })
    }
}
projectsection()


document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        let href = link.getAttribute('href'); 
    }

    menuToggle.addEventListener('click', toggleMobileMenu);
    
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});


