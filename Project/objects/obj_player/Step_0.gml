var hs=keyboard_check(ord("D"))-keyboard_check(ord("A"));
var vs=keyboard_check(ord("S"))-keyboard_check(ord("W"));

hs*=mspd;
vs*=mspd;

if place_meeting(x+hs,y,obj_wall){
	var xs=0
	while !place_meeting(x+xs+sign(hs),y,obj_wall){
		xs+=sign(hs)
	}
	hs=xs;
}

if place_meeting(x,y+vs,obj_wall){
	var ys=0
	while !place_meeting(x,y+ys+sign(vs),obj_wall){
		ys+=sign(vs);	
	}
	vs=ys;	
}



hspd=hs;
vspd=vs;

x+=hspd;
y+=vspd;