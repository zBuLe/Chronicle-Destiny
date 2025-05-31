var xoffset=sprite_get_xoffset(sprite_index);
var yoffset=sprite_get_yoffset(sprite_index);

shader_set(sh_static);
new BBMOD_Matrix()
	.RotateZ(-0)
	.RotateX(0)
	.Scale(10, 10, -10)
	.Translate(x, y, 0)
	.ApplyWorld();
// Same as:
//matrix_set(matrix_world, matrix_multiply(
//	matrix_build(0, 0, 0, 0, 0, -45, 100, 100, 100),
//	matrix_build(x, y, 0, 45, 0, 0, 1, 1, 1)));
model.submit();
new BBMOD_Matrix().ApplyWorld();
// Same as:
//matrix_set(matrix_world, matrix_build_identity());
shader_reset();
draw_self();