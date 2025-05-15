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

// === Code block headers + copy button (universal: highlight.js + Rouge) ===
document.querySelectorAll(
    'pre code[class*="language-"], div[class*="language-"] > div.highlight > pre > code'
).forEach(function(codeElement) {
    let preBlock = codeElement.closest('pre');
    if (!preBlock) return;

    const headerDiv = document.createElement('div');
    headerDiv.className = 'code-header';

    // ✅ universal language detection
    let languageClass = Array.from(codeElement.classList).find(cls => cls.startsWith('language-'));
    if (!languageClass) {
        const wrapperDiv = codeElement.closest('div[class*="language-"]');
        if (wrapperDiv) {
            languageClass = Array.from(wrapperDiv.classList).find(cls => cls.startsWith('language-'));
        }
    }

    let language = languageClass ? languageClass.replace('language-', '').toUpperCase() : '';
    headerDiv.textContent = language;
    headerDiv.setAttribute('data-language', language.toLowerCase());

    const copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="fas fa-clipboard"></i>';

    copyButton.addEventListener('click', function() {
        let code = codeElement.textContent;
        let cleanedCode = code.replace(/^ {16}/gm, '').replace(/^\n/, '');

        navigator.clipboard.writeText(code.trim()).then(function() {
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => copyButton.innerHTML = '<i class="fas fa-clipboard"></i>', 500);
        }).catch(function(err) {
            alert('Failed to copy code: ' + err);
        });
    });

    headerDiv.appendChild(copyButton);
    preBlock.parentNode.insertBefore(headerDiv, preBlock);
});
