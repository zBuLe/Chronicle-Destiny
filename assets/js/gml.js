function hljsDefineGML(hljs) {
  const gmlNumberMode = {
    className: 'number',
    variants: [
      { begin: /\b0b[01]+/i },                                  // binary
      { begin: /\b0x[\da-f]+/i },                              // hex
      { begin: /\$[0-9a-f]+/i },                               // color hex with $
      { begin: /#[0-9a-f]{6}\b/i },                            // color hex with #
      { begin: /-?\b\d+(\.\d+)?([eE][-+]?\d+)?/ }              // decimal, float, scientific
    ],
    relevance: 0
  };

  const gmlStringMode = {
    className: 'string',
    variants: [
      { begin: /@"/, end: /"/, contains: [] },                // multiline string @" ... "
      { begin: /\$"/, end: /"/, contains: [] },               // template string $" ... "
      hljs.QUOTE_STRING_MODE                                   // normal "..."
    ]
  };

  const gmlConstantMode = {
    className: 'constant',
    variants: [
      // Core GML constants
      { begin: /\b(?:true|false|undefined|noone|self|other|all|global|pi|GM_version)\b/ },

      // Keyboard constants (expand as needed)
      { begin: /\b(?:vk_left|vk_right|vk_up|vk_down|vk_home|vk_end|vk_pageup|vk_pagedown|vk_space)\b/ },

      // Color constants (expand as needed)
      { begin: /\b(?:c_red|c_blue|c_white|c_black|c_silver|c_lime|c_maroon|c_olive|c_navy)\b/ }
    ]
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
      hljs.C_LINE_COMMENT_MODE,                                // // comments
      hljs.C_BLOCK_COMMENT_MODE,                               // /* ... */
      {
        className: 'doctag',
        begin: '///',
        end: '$',
        relevance: 10
      },
      gmlStringMode,                                           // strings
      gmlNumberMode,                                           // numbers
      gmlConstantMode                                          // constants
    ]
  };
}
