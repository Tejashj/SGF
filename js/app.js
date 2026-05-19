document.addEventListener('DOMContentLoaded', () => {
    
    // Sliders
    if (typeof Swiper !== 'undefined') {
        new Swiper('#announcement-swiper', {
            direction: 'vertical',
            loop: true,
            autoplay: { delay: 3000 },
        });

        new Swiper('#hero-swiper', {
            loop: true,
            autoplay: { delay: 5000 },
            pagination: { el: '.swiper-pagination', clickable: true },
        });
    }

    // Scroll Effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});

// Toggle About Text
function toggleAbout() {
    const text = document.getElementById('about-text');
    const btn = document.querySelector('.btn-text');
    
    if (text.style.height === 'auto') {
        text.style.height = '100px';
        text.style.overflow = 'hidden';
        btn.textContent = 'Read More';
    } else {
        text.style.height = 'auto';
        btn.textContent = 'Show Less';
    }
}