$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay:false,
        easing: 'ease', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                    speed:300,
                }
            }
        ]
    });
});

 // Smooth scroll to the top
 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById('menuToggle')?.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
});
window.addEventListener('scroll', function () {
    var swipeUpContainer = document.getElementById('swipeUpContainer');
    if (window.scrollY > 100) { 
        swipeUpContainer.classList.remove('scale-0');
        swipeUpContainer.classList.add('scale-100');
    } else {
        swipeUpContainer.classList.remove('scale-100');
        swipeUpContainer.classList.add('scale-0');
    }
});

// Collapse script
function toggleCollapse(event) {
    const toggle = event.currentTarget;
    const content = toggle.closest('.collapse-parent').querySelector('.accordion-content');
    const iconDark = toggle.querySelector('.dark-icon');
    const iconLight = toggle.querySelector('.light-icon');
    const isDarkMode = document.documentElement.classList.contains('dark');

    document.querySelectorAll('.accordion-content').forEach(otherContent => {
        if (otherContent !== content) {
            otherContent.classList.add('hidden');
            otherContent.style.maxHeight = null;
            const otherToggle = otherContent.closest('.collapse-parent').querySelector('.collapse-toggle');
            const otherIconDark = otherToggle.querySelector('.dark-icon');
            const otherIconLight = otherToggle.querySelector('.light-icon');
            if (otherIconDark) otherIconDark.src = '../assets/images/icons/collapse-close-icon.svg';
            if (otherIconLight) otherIconLight.src = '../assets/images/icons/collapse-light-close-icon.svg';
        }
    });

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('transition-max-height');
        requestAnimationFrame(() => {
            content.style.maxHeight = content.scrollHeight + "px";
        });
        if (isDarkMode && iconDark) {
            iconDark.src = '../assets/images/icons/collapse-open-icon.svg';
        } else if (iconLight) {
            iconLight.src = '../assets/images/icons/collapse-light-open-icon.svg';
        }
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.remove('transition-max-height'); 
        requestAnimationFrame(() => {
            content.style.maxHeight = null;
            setTimeout(() => {
                content.classList.add('hidden');
                if (isDarkMode && iconDark) {
                    iconDark.src = '../assets/images/icons/collapse-close-icon.svg';
                } else if (iconLight) {
                    iconLight.src = '../assets/images/icons/collapse-light-close-icon.svg';
                }
            }, 300); 
        });
    }
}
document.querySelectorAll('.collapse-toggle').forEach(toggle => {
    toggle.addEventListener('click', toggleCollapse);
});

// sidebar script
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
    const sidebarMenu = document.getElementById('sidebarMenu');

    toggleButton.addEventListener('click', () => {
        sidebarMenu.classList.toggle('-translate-x-full');
        sidebarMenu.classList.toggle('translate-x-0');
    });
});

// scroll behaiver
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Sticky navabar
document.addEventListener('scroll', function() {
    const header = document.getElementById('site-header');
    const headerContainer = header.querySelector('div');

    if (window.scrollY > 1) {
        headerContainer.classList.remove('py-20');
        headerContainer.classList.add('py-4');
    } else {
        headerContainer.classList.remove('py-4');
        headerContainer.classList.add('py-20');
    }
});


//script for toggle button
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        themeIcon.src = '../assets/images/icons/sun-icon.svg';
    } else {
        document.documentElement.classList.add('dark');
        themeIcon.src = '../assets/images/icons/moon-icon.svg';
    }
    document.documentElement.classList.add('theme-transition');
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 100); 
});
// Function to update slick dots based on theme mode
function updateSlickDots() {
    var isDarkMode = document.body.classList.contains('dark-mode');
    var slickDots = document.querySelectorAll('.slick-dots li button');

    slickDots.forEach(function(dot) {
        if (isDarkMode) {
            dot.style.backgroundColor = '#7dffaf'; // Dark mode background color
        } else {
            dot.style.backgroundColor = '#022648'; // Light mode background color
        }
    });
}

updateSlickDots();
document.querySelector('#theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); 
    updateSlickDots(); 
});

