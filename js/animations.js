// Animate skill bars when they come into view
function animateSkillBars() {
  const skillCards = document.querySelectorAll('.skill-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Animate skill levels
        const skillLevels = entry.target.querySelectorAll('.skill-level');
        skillLevels.forEach(level => {
          const width = level.getAttribute('data-level') + '%';
          level.style.width = width;
          level.setAttribute('aria-valuenow', width);
        });
        
        // Animate list items with staggered delay
        const listItems = entry.target.querySelectorAll('.skill-list li');
        listItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        });
        
        // Unobserve after animating
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  skillCards.forEach(card => {
    observer.observe(card);
  });
}

// Initialize animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  animateSkillBars();
  
  // Add hover effect for skill bars
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    bar.addEventListener('mouseenter', (e) => {
      const level = e.currentTarget.querySelector('.skill-level');
      level.style.transform = 'scaleY(1.2)';
      level.style.transition = 'transform 0.2s ease';
    });
    
    bar.addEventListener('mouseleave', (e) => {
      const level = e.currentTarget.querySelector('.skill-level');
      level.style.transform = 'scaleY(1)';
    });
  });
});
