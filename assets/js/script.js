function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  const isOpen = sidenav.style.width === "250px";

  sidenav.style.width = isOpen ? "0" : "250px";
  main.style.marginLeft = isOpen ? "0" : "250px";
}

function toggleTOC() {
  const toc = document.getElementById("myTOC");
  const main = document.getElementById("main");
  const isOpen = toc.style.width === "250px";

  toc.style.width = isOpen ? "0" : "250px";
  main.style.marginRight = isOpen ? "0" : "250px";
}

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
      toggle.addEventListener('click', function() {
          document.documentElement.toggleAttribute('data-theme', 'dark');
      });
  }
});
