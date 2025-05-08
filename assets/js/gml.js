hljs.registerLanguage('gml', function(hljs) {
  return {
    name: 'GML',
    aliases: ['gamemaker'],
    keywords: {
      keyword:
        'if else for while do switch case break continue return with var global new function exit repeat until',
      literal:
        'true false null',
      built_in:
        'instance_create_depth instance_destroy alarm argument_count argument background_get_texture draw_sprite draw_text draw_self room_goto room_restart show_debug_message'
    },
    contains: [
      {
        className: 'comment',
        begin: '///',
        end: '$',
        relevance: 10
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
});
