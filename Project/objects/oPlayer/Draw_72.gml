draw_clear(#6495ED)
var camera = camera_get_active();
var view_mat=matrix_build_lookat(x+64,y+64,-64,x, y,0,0,0,1);
var pro_mat=matrix_build_projection_perspective_fov(60,window_get_width()/window_get_height(),0,1200);
camera_set_view_mat(camera,view_mat);
camera_set_proj_mat(camera,pro_mat);
camera_apply(camera);