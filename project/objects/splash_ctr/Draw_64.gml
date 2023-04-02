/// @description 
draw_set_color(c_white);
draw_set_font(fnt_title);
draw_set_halign(fa_middle);
draw_set_valign(fa_center);
draw_text(anchor_x,anchor_y,"Chronicle Destiny");
draw_set_font(fnt_subtitle);
draw_text(anchor_x,anchor_y+48,"In Development");

draw_set_font(fnt_btn);
draw_set_color(c_btn);
draw_rectangle(anchor_x-60,anchor_y+90-20,anchor_x+60,anchor_y+90+20,false)
draw_set_color(c_white)
draw_text(anchor_x,anchor_y+90,"Play");

