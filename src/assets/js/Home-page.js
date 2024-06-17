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
        // Add Tailwind classes for sticky positioning and padding transition
        header.classList.add('sticky', 'top-0');
        headerContainer.classList.remove('py-20');
        headerContainer.classList.add('py-4');
    } else {
        // Remove sticky positioning and revert padding transition
        header.classList.remove('sticky', 'top-0');
        headerContainer.classList.remove('py-4');
        headerContainer.classList.add('py-20');
    }
});



// desktop
document.addEventListener('DOMContentLoaded', function() {
    // Desktop version elements
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeIconDesktop = document.getElementById('theme-icon-desktop');

    // Mobile version elements
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

    // Function to toggle dark mode class on <html> element
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
    }

    // Function to update theme icon based on current mode
    function updateTheme() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        if (themeIconDesktop) {
            themeIconDesktop.src = isDarkMode ? '../assets/images/icons/moon-icon.svg' : '../assets/images/icons/sun-icon.svg';
        }
        if (themeIconMobile) {
            themeIconMobile.src = isDarkMode ? '../assets/images/icons/moon-icon.svg' : '../assets/images/icons/sun-icon.svg';
        }
    }

    // Function to update slick dots based on theme mode
    function updateSlickDots() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        const slickDots = document.querySelectorAll('.slick-dots li button');

        slickDots.forEach(function(dot) {
            dot.style.setProperty('background-color', isDarkMode ? '#7dffaf' : '#022648', 'important');
        });
    }

    // Initial update of theme icon and slick dots based on current mode
    updateTheme();
    updateSlickDots();

    // Mutation observer to update slick dots when they are added to the DOM
    const observer = new MutationObserver(() => {
        updateSlickDots();
    });

    // Observe the document for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Event listener for theme toggle (desktop)
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', () => {
            toggleDarkMode();
            updateTheme();
            updateSlickDots();
        });
    } else {
        console.error('theme-toggle-desktop element not found.');
    }

    // Event listener for theme toggle (mobile)
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', () => {
            toggleDarkMode();
            updateTheme();
            updateSlickDots();
        });
    } else {
        console.error('theme-toggle-mobile element not found.');
    }
});

//Script for Modal
const modalButton = document.getElementById('curriculumModalButton');
const modal = document.getElementById('curriculumModal');
const closeButton = document.getElementById('closeModalButton');

modalButton.onclick = () => modal.classList.remove('hidden');
closeButton.onclick = () => modal.classList.add('hidden');
window.onclick = (e) => e.target == modal ? modal.classList.add('hidden') : false;


//SCript for phone country code
document.addEventListener('DOMContentLoaded', function () {
    const phoneInputField = document.getElementById('phone');
    const iti = window.intlTelInput(phoneInputField, {
        initialCountry: 'auto',
        geoIpLookup: function (callback) {
            fetch('https://ipinfo.io', { headers: { 'Accept': 'application/json' } })
                .then((resp) => resp.json())
                .then((resp) => {
                    const countryCode = resp && resp.country ? resp.country : 'us';
                    callback(countryCode);
                });
        },
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js', // just for formatting/placeholders etc
    });
});

