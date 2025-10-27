const donationModal = document.getElementById('donation-modal');
  const openDonationBtn = document.getElementById('open-donation-modal');
  const closeDonationBtn = donationModal.querySelector('.close');

  openDonationBtn.addEventListener('click', () => {
    donationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  closeDonationBtn.addEventListener('click', () => {
    donationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', e => {
    if (e.target === donationModal) {
      donationModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });