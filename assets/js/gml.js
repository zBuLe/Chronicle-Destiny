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
    variants: [
      // Core constants
      { begin: /\b(?:true|false|undefined|noone|self|other|all|global|pi|GM_version)\b/ },
      // Keyboard constants
      { begin: /\b(?:vk_left|vk_right|vk_up|vk_down|vk_home|vk_end|vk_pageup|vk_pagedown|vk_space)\b/ },
      // Color constants
      { begin: /\b(?:c_red|c_blue|c_white|c_black|c_silver|c_lime|c_maroon|c_olive|c_navy)\b/ }
    ]
  };

  const gmlBuiltinVariableMode = {
    className: 'built_in',
    variants: [
      // Instance variables
      { begin: /\b(?:x|y|object_index|image_index|speed|direction|gravity|friction|hspeed|vspeed|mask_index|path_index|path_position|path_speed|path_scale)\b/ },
      // Argument variables
      { begin: /\b(?:argument0|argument1|argument2|argument3|argument4|argument5|argument6|argument7|argument8|argument9)\b/ }
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
      gmlConstantMode,
      gmlBuiltinVariableMode
    ]
  };
}
