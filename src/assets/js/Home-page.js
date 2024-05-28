$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
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
                    slidesToScroll: 1
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

    // Close all other collapsible divs
    document.querySelectorAll('.accordion-content').forEach(otherContent => {
        if (otherContent !== content) {
            otherContent.classList.add('hidden');
            otherContent.style.maxHeight = null; 
        }
    });

    // Toggle current collapsible div
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.style.maxHeight = content.scrollHeight + "px"; 
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; 
        setTimeout(() => {
            content.style.maxHeight = null; 
            content.classList.add('hidden');
        }, 1); 
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
        sidebarMenu.classList.toggle('hidden');
    });
});