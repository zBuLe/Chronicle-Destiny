function hljsDefineGML(hljs) {
  return {
    name: 'GML',
    aliases: ['gamemaker', 'gamemakerlanguage'],
    keywords: {
      keyword:
        '#macro #region #endregion break case continue default do else enum exit for globalvar if repeat return switch until var while with and or not xor function',
      literal:
        'true false undefined noone self other all global local',
      built_in:
        'show_message show_debug_message instance_create_layer instance_destroy keyboard_check keyboard_check_pressed'
    },
    contains: [
      // Single line comments //
      hljs.C_LINE_COMMENT_MODE,
      // Multi-line comments /* ... */
      hljs.C_BLOCK_COMMENT_MODE,
      // Doc comments (/// ...)
      {
        className: 'doctag',
        begin: '///',
        end: '$',
        relevance: 10
      },
      // Strings "..." or '...'
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      // Numbers (decimal, hex)
      hljs.C_NUMBER_MODE
    ]
  };
}
