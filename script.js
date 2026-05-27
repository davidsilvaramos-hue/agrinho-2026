// Menu mobile
document.querySelector('.hamburger').addEventListener('click', () => {
    const menu = document.querySelector('.nav-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Animação ao scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.card, .benefit-card, .timeline-item');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ Site de Economia Circular carregado com sucesso!', 'color: #1b5e20; font-size: 16px;');
});