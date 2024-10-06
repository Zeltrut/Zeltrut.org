// Loading Screen Animation
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('is-loaded');
    }, 1000);
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
