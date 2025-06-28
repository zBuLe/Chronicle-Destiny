var _hspd=keyboard_check(ord("D"))-keyboard_check(ord("A"));
var _vspd=keyboard_check(ord("S"))-keyboard_check(ord("W"));

_hspd*=mspd;
_vspd*=mspd;

if place_meeting(x+_hspd,y,oWall){
	_hspd=0;
	
}
if place_meeting(x,y+_vspd,oWall){
	_vspd=0;
	
}


x+=_hspd;
y+=_vspd;