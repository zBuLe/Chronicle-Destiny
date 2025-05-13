document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
      const target = document.getElementById(this.dataset.target);
      target.classList.toggle('collapsed');
    });
  });
});
