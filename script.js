// Función para hacer scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Función para animar elementos al hacer scroll
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const animateOnScroll = () => {
    fadeInElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('visible');
      }
    });
  };
  
  // Ejecutar la animación al hacer scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Ejecutar la animación al cargar la página (por si ya hay elementos visibles)
  window.addEventListener('load', animateOnScroll);
  
  // Función para mostrar/ocultar el menú hamburguesa
  function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
  }

  
// Particulas
const particlesContainer = document.getElementById('particles');
const numParticles = 30;
const size = Math.random() * 10 + 5; // De 5 a 15px

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const size = Math.random() * 5 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particlesContainer.appendChild(particle);

  gsap.to(particle, {
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    opacity: Math.random() * 0.8 + 0.2,
    duration: Math.random() * 5 + 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: Math.random() * 5
  });
}
