// assets/js/theme-toggle.js
(function() {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');

  function updateIcon(theme) {
      button.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  if (storedTheme) {
      root.setAttribute('data-theme', storedTheme);
      updateIcon(storedTheme);
  } else {
      // Set based on system preference at first load
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = prefersDark ? 'dark' : 'light';
      updateIcon(theme);
  }

  button.addEventListener('click', function(e) {
      e.preventDefault();
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
  });
})();
