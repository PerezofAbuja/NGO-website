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