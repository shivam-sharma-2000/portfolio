// Animate blog cards when they come into view
document.addEventListener('DOMContentLoaded', function() {
  // Update current year in footer
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  const blogCards = document.querySelectorAll('.blog-card');
  
  // Function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  // Function to add animation class
  const animateOnScroll = () => {
    blogCards.forEach((card, index) => {
      if (isInViewport(card) && !card.classList.contains('animate')) {
        // Add staggered delay for each card
        setTimeout(() => {
          card.classList.add('animate');
        }, 150 * index);
      }
    });
  };

  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Also check on window resize
  window.addEventListener('resize', animateOnScroll);
});
