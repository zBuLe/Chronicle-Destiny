const toggleSidebar = document.getElementById('toggleSidebar');
const toggleRightPanel = document.getElementById('toggleRightPanel');
const sidebar = document.getElementById('sidebar');
const rightPanel = document.getElementById('rightPanel');
const modeToggle = document.getElementById('modeToggle');

// === Load saved states ===
const savedTheme = localStorage.getItem('theme');
const savedLeft = localStorage.getItem('leftPanel') === 'open';
const savedRight = localStorage.getItem('rightPanel') === 'open';

// Theme state
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    modeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

// Left panel state
if (savedLeft) {
    document.body.classList.add('left-open');
    sidebar.classList.remove('collapsed');
} else {
    sidebar.classList.add('collapsed');
}

// Right panel state
if (savedRight) {
    document.body.classList.add('right-open');
    rightPanel.classList.remove('collapsed');
} else {
    rightPanel.classList.add('collapsed');
}

// === Toggles ===
toggleSidebar.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('left-open');
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('leftPanel', isOpen ? 'open' : 'closed');
});

toggleRightPanel.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('right-open');
    rightPanel.classList.toggle('collapsed');
    localStorage.setItem('rightPanel', isOpen ? 'open' : 'closed');
});

modeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    modeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
});
