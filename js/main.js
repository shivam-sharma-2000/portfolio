// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const navbarHeight = 100; // Height of navbar in pixels

window.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    }
  });
});

// Typewriter Effect
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="wrap">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize TypeWriter when DOM loads
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.typewrite');
  const words = JSON.parse(txtElement.getAttribute('data-type'));
  const wait = txtElement.getAttribute('data-period');
  
  // Initialize TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Animate elements on scroll
const animateOnScroll = () => {
  // Animate fadeInUp elements
  const elements = document.querySelectorAll('.animate-fadeInUp');
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate-fadeInUp-visible');
    }
  });
  
  // Animate skill items
  const skillItems = document.querySelectorAll('.skill-item');
  const skillsSection = document.getElementById('skills');
  
  if (skillsSection) {
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
    
    if (skillsPosition < screenPosition) {
      skillItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
          
          // Animate progress bars
          const progressBar = item.querySelector('.progress-bar');
          if (progressBar) {
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
              progressBar.style.width = width;
            }, 50);
          }
        }, index * 150);
      });
    }
  }
  
  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  const experienceSection = document.getElementById('experience');
  
  if (experienceSection) {
    const experiencePosition = experienceSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
    
    if (experiencePosition < screenPosition) {
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 200);
      });
    }
  }
};

// Initialize animations on load
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add Bootstrap tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Certificate Modal Functionality
const certificateModal = document.getElementById('certificateModal');
if (certificateModal) {
  const modalImg = document.getElementById('modalCertificateImg');
  const modalTitle = document.getElementById('certificateModalLabel');
  const downloadBtn = document.getElementById('downloadCertificate');
  
  certificateModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const imgSrc = button.getAttribute('data-img');
    const title = button.getAttribute('data-title');
    
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    downloadBtn.href = imgSrc;
    downloadBtn.download = title.replace(/\s+/g, '_').toLowerCase() + '.png';
  });
  
  // Handle image load error
  modalImg.addEventListener('error', function() {
    this.src = 'images/placeholder-certificate.jpg';
    this.alt = 'Certificate image not available';
  });
}

// Handle certificate modal
const certificateImages = document.querySelectorAll('.certificate-item img');
const modal = document.createElement('div');
modal.className = 'certificate-modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <img src="" alt="Certificate" class="modal-certificate">
  </div>
`;
document.body.appendChild(modal);

certificateImages.forEach(img => {
  img.addEventListener('click', () => {
    const modalImg = modal.querySelector('.modal-certificate');
    modal.style.display = 'flex';
    modalImg.src = img.src;
    document.body.style.overflow = 'hidden';
  });
});

modal.querySelector('.close-modal').addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
