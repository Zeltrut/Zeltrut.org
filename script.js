// Loading Screen Animation
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        // Fade out and remove the loading screen
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Wait for fade-out transition to complete
    }, 1000); // You can adjust this timeout if needed
});

// Sticky Navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Intersection Observer for Lazy Loading Sections
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -150px 0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
