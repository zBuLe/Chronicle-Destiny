Prism.languages.gml = {
    'comment': {
        pattern: /\/\/.*/g,
        greedy: true
    },
    'string': {
        pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'keyword': /\b(if|else|while|for|break|continue|return|var|global|with|do|until|switch|case|default|exit)\b/,
    'boolean': /\b(true|false)\b/,
    'number': /\b-?(0x[\da-f]+|\d*\.?\d+([eE][+-]?\d+)?)\b/,
    'operator': /[+\-*\/%!=<>]=?|&&|\|\|?|[\^~]/,
    'punctuation': /[{}[\];(),.:]/,
    'function': /\b[a-zA-Z_]\w*(?=\s*\()/
};
