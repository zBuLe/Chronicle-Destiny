document.querySelectorAll('div[class^="language-"]').forEach(function(codeBlock) {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'code-header';
    
    let language = codeBlock.classList[0].replace('language-', '').toUpperCase();
    if (language === 'JAVA') language = 'GML';
    headerDiv.textContent = language;

    const copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="fas fa-clipboard"></i>';   // ← ICON instead of text

    copyButton.addEventListener('click', function() {
        const codeElement = codeBlock.querySelector('pre code');
        if (!codeElement) return;

        let code = codeElement.textContent;
        let cleanedCode = code.replace(/^ {16}/gm, '').replace(/^\n/, '');

        navigator.clipboard.writeText(cleanedCode.trim()).then(function() {
            copyButton.innerHTML = '<i class="fas fa-check"></i>';   // ← Show checkmark
            setTimeout(() => copyButton.innerHTML = '<i class="fas fa-clipboard"></i>', 500);
        }).catch(function(err) {
            alert('Failed to copy code: ' + err);
        });
    });

    headerDiv.appendChild(copyButton);
    codeBlock.insertBefore(headerDiv, codeBlock.firstChild);
});
