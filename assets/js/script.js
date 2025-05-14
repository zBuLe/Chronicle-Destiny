function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const root = document.documentElement;
  const isOpen = sidenav.style.width === "250px";
  sidenav.style.width = isOpen ? "0" : "250px";
  root.style.setProperty('--panel-left', isOpen ? "0px" : "250px");
}

function toggleTOC() {
  const toc = document.getElementById("myTOC");
  const root = document.documentElement;
  const isOpen = toc.style.width === "250px";
  toc.style.width = isOpen ? "0" : "250px";
  root.style.setProperty('--panel-right', isOpen ? "0px" : "250px");
}

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

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
  } else if (savedTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
  }
});