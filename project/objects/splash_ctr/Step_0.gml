/// @description 
if mouse_x>anchor_x-60 and mouse_x<anchor_x+60 and mouse_y>anchor_y+90-40 and mouse_y<anchor_y+90+40{
	c_btn=c_dkgray	
	if mouse_check_button(mb_left){
		room_goto(rm_test);	
	}
}else{
	c_btn=c_black
}
if keyboard_check(vk_enter){
	room_goto(rm_test);	
}