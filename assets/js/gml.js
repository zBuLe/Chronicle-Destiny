function hljsDefineGML(hljs) {
  const gmlNumberMode = {
    className: 'number',
    variants: [
      { begin: /\b0b[01]+/i },                                   // binary
      { begin: /\b0x[\da-f]+/i },                               // hex
      { begin: /\$[0-9a-f]+/i },                                // color hex with $
      { begin: /#[0-9a-f]{6}\b/i },                             // color hex with #
      { begin: /-?\b\d+(\.\d+)?([eE][-+]?\d+)?/ }               // decimal + float + scientific
    ],
    relevance: 0
  };

  const gmlStringMode = {
    className: 'string',
    variants: [
      { begin: /@"/, end: /"/, contains: [] },                 // multiline string @" ... "
      { begin: /\$"/, end: /"/, contains: [] },                // template string $" ... "
      hljs.QUOTE_STRING_MODE                                   // normal "text"
    ]
  };

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
      hljs.C_LINE_COMMENT_MODE,                                // // comments
      hljs.C_BLOCK_COMMENT_MODE,                               // /* ... */
      {
        className: 'doctag',                                   // /// doc-comments
        begin: '///',
        end: '$',
        relevance: 10
      },
      gmlStringMode,                                           // strings
      gmlNumberMode                                            // numbers
    ]
  };
}
