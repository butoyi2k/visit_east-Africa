// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fonctionnalité du bouton d'aide
document.querySelector('.help-button').addEventListener('click', function() {
    alert("Besoin d'aide ?\n\nContactez-nous :\n📧 Email: info@visiteastafrica.com\n📞 Téléphone: +33 1 23 45 67 89\n\nNous sommes disponibles du lundi au vendredi de 9h à 18h.");
});

// Animation au scroll pour les cartes de destination
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer toutes les cartes de destination
document.querySelectorAll('.destination-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Effet de parallaxe léger sur le hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero::before');
    if (hero) {
        document.querySelector('.hero').style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Changement de couleur du header au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(5, 150, 105, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
    }
});
function toggleMenu() {
    const menu = document.getElementById("menuList");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }