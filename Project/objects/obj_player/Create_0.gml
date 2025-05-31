hspd=0;
vspd=0;
mspd=4;

//model = new BBMOD_Model("Data/BBMOD/Models/Cube.bbmod").freeze();
model = new BBMOD_Model("base.bbmod").freeze();
model.Materials[@ 0] = sprite_get_texture(spr_test, 0);
rx=0