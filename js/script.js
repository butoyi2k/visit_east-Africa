// Animation au scroll pour les cartes de destination
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scroll pour les liens d'ancrage
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Animation des cartes au scroll
  const cards = document.querySelectorAll('.destination-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));

  // Gestion des formulaires
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validation simple
      const inputs = this.querySelectorAll('input[required], textarea[required]');
      let valid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });

      if (valid) {
        // Message de succès
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '✓ Envoyé !';
        btn.classList.add('btn-success');
        btn.disabled = true;
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          this.reset();
        }, 3000);
      } else {
        alert('Veuillez remplir tous les champs obligatoires');
      }
    });
  });

  // Animation du navbar au scroll
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.classList.add('shadow');
      navbar.style.backgroundColor = 'rgba(25, 135, 84, 0.95)';
    } else {
      navbar.classList.remove('shadow');
      navbar.style.backgroundColor = '';
    }
    
    lastScroll = currentScroll;
  });

  // Effet hover sur les boutons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'all 0.3s ease';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Animation des éléments de liste au survol
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });

  // Message de bienvenue (optionnel)
  if (document.querySelector('.hero-section h1')) {
    console.log('🌍 Bienvenue sur Visit East Africa !');
  }

});