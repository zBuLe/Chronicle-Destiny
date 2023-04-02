/// @description 
var _hspd=keyboard_check(key_right)-keyboard_check(key_left);
var _vspd=keyboard_check(key_down)-keyboard_check(key_up);

var _len=min(point_distance(0,0,_hspd,_vspd),1);
var _dir=point_direction(0,0,_hspd,_vspd)
if _len!=0{
	_hspd=lengthdir_x(_len,_dir);
	_vspd=lengthdir_y(_len,_dir);
	
}

_hspd*=mspd;
_vspd*=mspd;

if place_meeting(x+_hspd,y,wall){
	while (!place_meeting(x+sign(_hspd),y,wall)){
		x+=sign(_hspd);
	}
	_hspd=0;
}
if place_meeting(x,y+_vspd,wall){
	while (!place_meeting(x,y+sign(_vspd),wall)){
		y+=sign(_vspd);
	}
	_vspd=0;
}

x+=_hspd;
y+=_vspd;