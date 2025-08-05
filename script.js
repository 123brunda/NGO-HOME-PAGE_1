// navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Volunteer form 
  const volunteerForm = document.querySelector('form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function (e) {
      e.preventDefault(); 
      alert("Thank you for your interest in volunteering! We'll get in touch with you soon.");
      volunteerForm.reset(); 
    });
  }
  
  
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark', 'shadow');
    } else {
      navbar.classList.remove('bg-dark', 'shadow');
    }
  });
  