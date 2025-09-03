// Filter functionality
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Contact button functionality
  const contactButtons = document.querySelectorAll('.contact-btn');
  contactButtons.forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.card');
      const name = card.querySelector('.name').textContent;
      const position = card.querySelector('.position').textContent;

      this.textContent = 'Connecting...';
      this.style.opacity = '0.8';

      setTimeout(() => {
        this.textContent = 'Connected!';
        this.style.background = '#2ecc71';

        setTimeout(() => {
          this.textContent = `Contact ${name.split(' ')[0]}`;
          this.style.opacity = '1';

          // Revert to original color based on card class
          const cardClass = Array.from(card.classList).find(cls => cls.startsWith('card-'));
          if (cardClass) {
            if (cardClass === 'card-1') this.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
            if (cardClass === 'card-2') this.style.background = 'linear-gradient(to right, #00c9ff, #92fe9d)';
            if (cardClass === 'card-3') this.style.background = 'linear-gradient(to right, #f09819, #edde5d)';
            if (cardClass === 'card-4') this.style.background = 'linear-gradient(to right, #834d9b, #d04ed6)';
            if (cardClass === 'card-5') this.style.background = 'linear-gradient(to right, #4b6cb7, #182848)';
            if (cardClass === 'card-6') this.style.background = 'linear-gradient(to right, #fd746c, #ff9068)';
          }
        }, 1500);
      }, 1000);

      // Show notification
      alert(`Connecting you with ${name}, ${position}...`);
    });
  });

  // Add hover effect with JavaScript for better compatibility
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
    });
  });
});