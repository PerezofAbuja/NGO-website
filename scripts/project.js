// Open modal
  document.querySelectorAll('.btn-project').forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modals = document.getElementById(modalId);
      modals.style.display = 'block';
      document.body.style.overflow = 'hidden'; // prevent background scroll
    });
  });

  // Close modal when 'x' clicked
  document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
      const modals = this.closest('.modals');
      modals.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  // Close modal when clicking outside content
  window.addEventListener('click', function(e) {
    document.querySelectorAll('.modals').forEach(modals => {
      if (e.target === modals) {
        modals.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

  // meet the team modal functionality
  // Open team modal
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal on 'x'
  document.querySelectorAll('.team-modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      this.closest('.team-modal').style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  // Optional: close if clicked outside modal content
  window.addEventListener('click', function(e) {
    document.querySelectorAll('.team-modal').forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });