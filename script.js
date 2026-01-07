// Animation de la boîte au clic
const animatedBox = document.getElementById('animatedBox');
const animateBtn = document.getElementById('animateBtn');
const particlesContainer = document.getElementById('particlesContainer');

let animationIndex = 0;
const animations = ['rotate', 'pulse', 'bounce'];

// Animation au clic sur la boîte
animatedBox.addEventListener('click', function() {
    // Retirer toutes les classes d'animation
    animatedBox.classList.remove(...animations);
    
    // Ajouter la prochaine animation
    const currentAnimation = animations[animationIndex % animations.length];
    animatedBox.classList.add(currentAnimation);
    
    animationIndex++;
    
    // Retirer la classe après l'animation
    setTimeout(() => {
        animatedBox.classList.remove(currentAnimation);
    }, 2000);
});

// Animation au clic sur le bouton
animateBtn.addEventListener('click', function() {
    // Créer des particules
    createParticles();
    
    // Animer la boîte
    animatedBox.classList.remove(...animations);
    animatedBox.classList.add('rotate');
    
    setTimeout(() => {
        animatedBox.classList.remove('rotate');
    }, 2000);
});

// Fonction pour créer des particules
function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Position aléatoire autour de la boîte
        const boxRect = animatedBox.getBoundingClientRect();
        const startX = boxRect.left + boxRect.width / 2;
        const startY = boxRect.top + boxRect.height / 2;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        
        // Couleur aléatoire
        const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ffffff', '#95e1d3'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Taille aléatoire
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Direction aléatoire
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const endX = startX + Math.cos(angle) * velocity;
        const endY = startY + Math.sin(angle) * velocity;
        
        particlesContainer.appendChild(particle);
        
        // Animation de la particule
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Créer des particules flottantes en arrière-plan
function createBackgroundParticles() {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Position aléatoire sur l'écran
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Taille aléatoire
        const size = Math.random() * 8 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Opacité aléatoire
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        // Délai d'animation aléatoire
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Initialiser les particules de fond au chargement
window.addEventListener('load', function() {
    createBackgroundParticles();
});

// Animation au survol de la boîte (effet supplémentaire)
animatedBox.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(5deg)';
});

animatedBox.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});

