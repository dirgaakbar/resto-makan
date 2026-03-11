// Slider Logic
const slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(nextSlide, 5000);

// Smooth Scroll untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek Navbar saat Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = '#ffffff';
    }
});
