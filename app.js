
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    
    alert('Thank you for your message! I will get back to you soon.');
    
    
    this.reset();
  });
  
  
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Dark Mode';
  toggleButton.classList.add('btn', 'toggle-mode');
  document.body.insertBefore(toggleButton, document.body.firstChild);
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    
    toggleButton.textContent = document.body.classList.contains('dark-mode')
      ? 'Switch to Light Mode'
      : 'Switch to Dark Mode';
  });
  