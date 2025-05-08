hljs.registerLanguage('gml', function(hljs) {
  return {
    name: 'GML',
    aliases: ['gamemaker'],
    keywords: {
      keyword:
        'if else for while do switch case break continue return with var global new ' +
        'function exit repeat until instance_create_depth instance_destroy',
      literal:
        'true false null',
      built_in:
        'alarm argument argument_count background_get_texture background_index ' +
        'clamp choose color_get_red color_get_green color_get_blue cos degtorad ' +
        'draw_circle draw_line draw_rectangle draw_self draw_sprite draw_text ' +
        'instance_place instance_nearest instance_find instance_exists keyboard_check ' +
        'keyboard_check_pressed keyboard_check_released lengthdir_x lengthdir_y ' +
        'mouse_x mouse_y place_free point_direction point_distance random random_range ' +
        'room_goto room_restart show_debug_message sin sqrt string string_length ' +
        'string_upper surface_create surface_set_target surface_reset tan'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
});
