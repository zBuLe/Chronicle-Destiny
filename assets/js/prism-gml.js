Prism.languages.gml = {
    'comment': [
        {
            pattern: /\/\/.*/g,
            greedy: true
        },
        {
            pattern: /\/\*[\s\S]*?\*\//g,
            greedy: true
        }
    ],
    'string': {
        pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'keyword': /\b(if|else|while|for|break|continue|return|var|globalvar|global|with|do|until|switch|case|default|exit|enum)\b/,
    'boolean': /\b(true|false)\b/,
    'number': /\b-?(0x[\da-fA-F]+|\d*\.?\d+(?:[eE][+-]?\d+)?)\b/,
    'constant': /\b(undefined|noone|self|other|all)\b/,
    'function': /\b[a-zA-Z_]\w*(?=\s*\()/,
    'operator': /[+\-*\/%!=<>]=?|&&|\|\|?|[\^~]/,
    'punctuation': /[{}[\];(),.:]/
};
