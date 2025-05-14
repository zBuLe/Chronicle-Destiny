function hljsDefineGML(hljs) {
  const gmlNumberMode = {
    className: 'number',
    variants: [
      { begin: /\b0b[01]+/i },
      { begin: /\b0x[\da-f]+/i },
      { begin: /\$[0-9a-f]+/i },
      { begin: /#[0-9a-f]{6}\b/i },
      { begin: /-?\b\d+(\.\d+)?([eE][-+]?\d+)?/ }
    ],
    relevance: 0
  };

  const gmlStringMode = {
    className: 'string',
    variants: [
      { begin: /@"/, end: /"/, contains: [] },
      { begin: /\$"/, end: /"/, contains: [] },
      hljs.QUOTE_STRING_MODE
    ]
  };

  const gmlConstantMode = {
    className: 'constant',
    begin: /\b(?:true|false|undefined|noone|self|other|all|global|pi|GM_version|vk_right|c_red)\b/
  };

  return {
    name: 'GML',
    aliases: ['gamemaker', 'gamemakerlanguage'],
    keywords: {
      keyword:
        '#macro #region #endregion break case continue default do else enum exit for globalvar if repeat return switch until var while with and or not xor function',
      built_in:
        'show_message show_debug_message instance_create_layer instance_destroy keyboard_check keyboard_check_pressed'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'doctag',
        begin: '///',
        end: '$',
        relevance: 10
      },
      gmlStringMode,
      gmlNumberMode,
      gmlConstantMode // <-- NEW
    ]
  };
}
