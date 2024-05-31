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

// Toggle menu on mobile
document.getElementById('menuToggle')?.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
});

// Show/hide swipe up icon on scroll with scale effect
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
// Function to handle collapse toggle
function toggleCollapse(event) {
    const toggle = event.currentTarget;
    const content = toggle.closest('.collapse-parent').querySelector('.accordion-content');
    const icon = toggle.querySelector('img');

    // Close all other collapsible divs
    document.querySelectorAll('.accordion-content').forEach(otherContent => {
        if (otherContent !== content) {
            otherContent.classList.add('hidden');
            otherContent.style.maxHeight = null;
            const otherToggle = otherContent.closest('.collapse-parent').querySelector('.collapse-toggle');
            const otherIcon = otherToggle.querySelector('img');
            otherIcon.src = '../assets/images/icons/collapse-close-icon.svg';
        }
    });

    // Toggle current collapsible div
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('transition-max-height'); // Add transition class
        requestAnimationFrame(() => {
            content.style.maxHeight = content.scrollHeight + "px";
        });
        icon.src = '../assets/images/icons/collapse-open-icon.svg';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.remove('transition-max-height'); // Remove transition class
        requestAnimationFrame(() => {
            content.style.maxHeight = null;
            setTimeout(() => {
                content.classList.add('hidden');
                icon.src = '../assets/images/icons/collapse-close-icon.svg';
            }, 300); // Duration should match the CSS transition duration
        });
    }
}

// Event listeners for each toggle
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
