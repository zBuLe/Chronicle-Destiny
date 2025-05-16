function hljsDefineGML(hljs) {
  const gmlNumberMode = {
    className: 'number',
    variants: [
      { begin: /0b[01]+/ },
      { begin: /0x[0-9A-Fa-f]+/ },
      { begin: /\$[0-9a-fA-F]+/ },
      { begin: /#[0-9a-fA-F]{6}/ },
      { begin: /-?\d+(\.\d+)?([eE][-+]?\d+)?/ }
    ],
    relevance: 0
  };

  const gmlStringMode = {
    className: 'string',
    variants: [
      { begin: /@"/, end: /"/ },
      { begin: /\$"/, end: /"/ },
      hljs.QUOTE_STRING_MODE
    ]
  };

  const gmlEnumMode = {
    beginKeywords: 'enum',
    contains: [{ className: 'enum', begin: /\w+/ }]
  };

  const gmlEnumEntryMode = {
    className: 'enumentry',
    begin: /\b[A-Z_]{2,}\b/
  };

  const gmlConstantMode = {
    className: 'constant',
    variants: [
      { begin: /\b(?:true|false|undefined|noone|self|other|all|global|pi|GM_version)\b/ },
      { begin: /\b(?:vk_left|vk_right|vk_up|vk_down|vk_home|vk_end|vk_pageup|vk_pagedown|vk_space)\b/ },
      { begin: /\b(?:c_red|c_blue|c_white|c_black|c_silver|c_lime|c_maroon|c_olive|c_navy)\b/ }
    ]
  };

  const gmlBuiltinVariableMode = {
    className: 'built_in',
    variants: [
      { begin: /\b(?:x|y|object_index|image_index|speed|direction|gravity|friction|hspeed|vspeed|mask_index|path_index|path_position|path_speed|path_scale|sprite_index)\b/ },
      { begin: /\bargument\d+\b/ }
    ]
  };

  const gmlGlobalMode = {
    className: 'global',
    variants: [
      { begin: /(?<=\bglobal\.)\w+\b/ },
      { begin: /(?<=\bglobalvar\s)\w+\b/ }
    ]
  };

  const gmlLocalMode = {
    className: 'local',
    variants: [
      { begin: /(?<=\bvar\s)\w+\b/ },
      { begin: /\b_+\w+\b/ }
    ]
  };

  const gmlStaticMode = {
    className: 'static',
    begin: /(?<=\bstatic\s)\w+\b/
  };

  const gmlResourceMode = {
    className: 'resource',
    variants: [
      { begin: /\b(?:obj_|spr_|bg_|rm_|fnt_|sh_|snd_|ts_|tm_)\w+\b/ },
      { begin: /\b(?:o|spr|rm|fnt|snd)[A-Z]\w*\b/ }
    ]
  };

  const gmlScriptMode = {
    className: 'scriptname',
    variants: [
      { begin: /\b(?:scr_)\w+\b/ },
      { begin: /\b(?:scr)[A-Z]\w*\b/ }
    ]
  };

  const gmlBracesMode = {
    className: 'symbol',
    begin: /[()\[\]{}]/,
    relevance: 0
  };

  const gmlOperatorMode = {
    className: 'operator',
    begin: /(\?\?=|\+\+|--|<<|>>|\+=|-=|\*=|\/=|==|!=|<=|>=|\?\?|\&\&|\|\||\^\^|[=<>+\-*/%!?~?:|&^])/,
    relevance: 0
  };

  const gmlAccessorMode = {
    className: 'operator',
    begin: /(?<=\[)\s*[|?@#$]/,
    relevance: 0
  };

  const gmlFunctionModes = [
    {
      className: 'function',
      variants: [
        { begin: /\b(?:show_message|show_debug_message|keyboard_check|keyboard_check_pressed|instance_create_layer|instance_destroy|irandom_range|string|array_create)\b/ }
      ],
      relevance: 0
    },
    {
      className: 'function',
      beginKeywords: 'function',
      end: /\(/,
      excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w+/ })]
    }
  ];

  const gmlPreprocessorMode = {
    className: 'keyword',
    begin: /^#(?:macro|region|endregion)\b/,
    relevance: 10
  };

  const gmlMacroMode = {
    className: 'macro',
    begin: /(?<=#macro\s)\w+\b/
  };

  const gmlKeywordMode = {
    className: 'keyword',
    begin: /\b(?:break|case|continue|default|do|else|enum|exit|for|globalvar|if|repeat|return|switch|until|var|while|with|and|or|not|xor|function|static)\b/
  };

  const gmlObjectVariableMode = {
    className: 'objectvar',
    begin: /\b[a-zA-Z_]\w*\b/,
    relevance: 0
  };

  return {
    name: 'GML',
    aliases: ['gamemaker', 'gamemakerlanguage'],
    contains: [
      gmlPreprocessorMode,
      gmlMacroMode,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      { className: 'doctag', begin: '///', end: '$', relevance: 10 },
      gmlEnumMode,
      gmlStringMode,
      gmlNumberMode,
      gmlBracesMode,
      gmlOperatorMode,
      gmlAccessorMode,
      gmlEnumEntryMode,
      gmlConstantMode,
      gmlBuiltinVariableMode,
      gmlGlobalMode,
      gmlLocalMode,
      gmlStaticMode,
      gmlResourceMode,
      gmlScriptMode,
      gmlFunctionModes[0],
      gmlFunctionModes[1],
      gmlKeywordMode,
      gmlObjectVariableMode
    ]
  };
}

// Register with highlight.js (auto-init fallback)
if (typeof hljs !== 'undefined') {
  hljs.registerLanguage('gml', hljsDefineGML);
}
