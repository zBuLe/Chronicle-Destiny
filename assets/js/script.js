document.addEventListener('DOMContentLoaded', () => {
    const container      = document.getElementById('container');
    const sbToggle       = document.getElementById('sidebar-toggle');
    const asideToggle    = document.getElementById('aside-toggle');
  
    sbToggle.addEventListener('click', () =>
      container.classList.toggle('sidebar-collapsed')
    );
    asideToggle.addEventListener('click', () =>
      container.classList.toggle('aside-collapsed')
    );
  });
  