document.querySelectorAll('div[class^="language-"]').forEach(function(codeBlock) {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'code-header';
    
    let language = codeBlock.classList[0].replace('language-', '').toUpperCase();
    if (language === 'JAVA') language = 'GML';
    headerDiv.textContent = language;

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';

    copyButton.addEventListener('click', function() {
        const codeElement = codeBlock.querySelector('pre code');
        if (!codeElement) return;

        let code = codeElement.textContent;
        // Remove exactly 16 leading spaces from each line
        let cleanedCode = code.replace(/^ {16}/gm, '');
        // Remove first empty line if exists
        cleanedCode = cleanedCode.replace(/^\n/, '');

        navigator.clipboard.writeText(cleanedCode.trim()).then(function() {
            copyButton.textContent = '✓ Copied!';
            setTimeout(() => copyButton.textContent = 'Copy', 3000);
        }).catch(function(err) {
            alert('Failed to copy code: ' + err);
        });
    });

    headerDiv.appendChild(copyButton);
    codeBlock.insertBefore(headerDiv, codeBlock.firstChild);
});
