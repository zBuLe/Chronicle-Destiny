// assets/js/theme-toggle.js
(function() {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) {
      root.setAttribute('data-theme', storedTheme);
  }

  button.addEventListener('click', function(e) {
      e.preventDefault();
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
  });
})();
