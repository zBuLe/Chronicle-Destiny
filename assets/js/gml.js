function hljsDefineGML(hljs) {
  return {
    name: 'GML',
    aliases: ['gamemaker', 'gamemakerlanguage'],
    keywords: {
      keyword: 'break case continue default do else enum exit for globalvar if repeat return switch until var while with and or not xor',
      literal: 'true false undefined noone self other all global local',
      built_in: 'show_message show_debug_message instance_create_layer instance_destroy keyboard_check keyboard_check_pressed'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,         // // single line comments
      hljs.C_BLOCK_COMMENT_MODE,        // /* multi-line comments */
      {
        className: 'doctag',
        begin: '///',                    // GML doc comments
        end: '$',
        relevance: 10
      },
      hljs.QUOTE_STRING_MODE,           // "strings"
      hljs.APOS_STRING_MODE,            // 'strings'
      hljs.C_NUMBER_MODE,               // numbers
      {
        className: 'function',
        beginKeywords: 'function',      // optional, for custom additions
        end: /[{;]/,
        excludeEnd: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w+/})]
      },
      {
        className: 'symbol',
        begin: /@[a-zA-Z_]\w*/          // optional: symbols like @myvar
      }
    ]
  };
}
