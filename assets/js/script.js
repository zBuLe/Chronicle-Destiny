// Left side panel toggle
function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  const isOpen = sidenav.style.width === "250px";

  sidenav.style.width = isOpen ? "0" : "250px";
  main.style.marginLeft = isOpen ? "0" : "250px";
}

// Right side panel toggle
function toggleTOC() {
  const toc = document.getElementById("myTOC");
  const main = document.getElementById("main");
  const isOpen = toc.style.width === "250px";

  toc.style.width = isOpen ? "0" : "250px";
  main.style.marginRight = isOpen ? "0" : "250px";
}

// Dark mode toggle
function toggleTheme() {
  const html = document.documentElement;
  if (html.getAttribute('data-theme') === 'dark') {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
  } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
  }
}

// On page load: restore user preference or respect system preference
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
  } else if (savedTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
  } else {
      // No saved preference → use system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
      }
  }
});
