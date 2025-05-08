---
layout: default
title: GML Syntax Test
---

# GameMaker Language — Syntax Highlighting Test

This test demonstrates GML-style code syntax using `javascript` highlighting, styled via custom CSS to match GameMaker's colors.

---

## c

```c
///@function highlight_test()
///@description Demonstrates GML syntax elements

// Variable declarations
var count = 10;
var speed = 2.5;
var isActive = true;
var name = "GML";
var color = c_red;

// Arrays and structs
var data = [1, 2, 3];
var stats = { hp: 100, mp: 50, alive: true };

// Access and assignment
player.hp -= 5;
global.score += 100;
stats.hp = clamp(stats.hp - 10, 0, 100);

// Control flow
if (isActive && count > 0) {
    show_debug_message("Active: " + string(count));
} else if (!isActive) {
    instance_destroy();
} else {
    count = 0;
}

// Loop
for (var i = 0; i < array_length(data); i++) {
    data[i] *= 2;
}

// Switch
switch (count) {
    case 0: show_message("Zero"); break;
    case 1: show_message("One"); break;
    default: show_message("Many");
}

// Scripted functions
function do_magic(target, power) {
    with (target) {
        hp -= power;
        if (hp <= 0) instance_destroy();
    }
}

// Call function
do_magic(enemy, 25);

// Enum
enum STATES { IDLE, MOVE, ATTACK }
var state = STATES.MOVE;

// Repeat
repeat(3) {
    draw_text(x, y, "Looping!");
}

// Macro (define)
#define PI 3.14159
var circumference = 2 * PI * 10;

```

---

## csharp

```csharp
///@function highlight_test()
///@description Demonstrates GML syntax elements

// Variable declarations
var count = 10;
var speed = 2.5;
var isActive = true;
var name = "GML";
var color = c_red;

// Arrays and structs
var data = [1, 2, 3];
var stats = { hp: 100, mp: 50, alive: true };

// Access and assignment
player.hp -= 5;
global.score += 100;
stats.hp = clamp(stats.hp - 10, 0, 100);

// Control flow
if (isActive && count > 0) {
    show_debug_message("Active: " + string(count));
} else if (!isActive) {
    instance_destroy();
} else {
    count = 0;
}

// Loop
for (var i = 0; i < array_length(data); i++) {
    data[i] *= 2;
}

// Switch
switch (count) {
    case 0: show_message("Zero"); break;
    case 1: show_message("One"); break;
    default: show_message("Many");
}

// Scripted functions
function do_magic(target, power) {
    with (target) {
        hp -= power;
        if (hp <= 0) instance_destroy();
    }
}

// Call function
do_magic(enemy, 25);

// Enum
enum STATES { IDLE, MOVE, ATTACK }
var state = STATES.MOVE;

// Repeat
repeat(3) {
    draw_text(x, y, "Looping!");
}

// Macro (define)
#define PI 3.14159
var circumference = 2 * PI * 10;

```

---

## C++

```cpp
///@function highlight_test()
///@description Demonstrates GML syntax elements

// Variable declarations
var count = 10;
var speed = 2.5;
var isActive = true;
var name = "GML";
var color = c_red;

// Arrays and structs
var data = [1, 2, 3];
var stats = { hp: 100, mp: 50, alive: true };

// Access and assignment
player.hp -= 5;
global.score += 100;
stats.hp = clamp(stats.hp - 10, 0, 100);

// Control flow
if (isActive && count > 0) {
    show_debug_message("Active: " + string(count));
} else if (!isActive) {
    instance_destroy();
} else {
    count = 0;
}

// Loop
for (var i = 0; i < array_length(data); i++) {
    data[i] *= 2;
}

// Switch
switch (count) {
    case 0: show_message("Zero"); break;
    case 1: show_message("One"); break;
    default: show_message("Many");
}

// Scripted functions
function do_magic(target, power) {
    with (target) {
        hp -= power;
        if (hp <= 0) instance_destroy();
    }
}

// Call function
do_magic(enemy, 25);

// Enum
enum STATES { IDLE, MOVE, ATTACK }
var state = STATES.MOVE;

// Repeat
repeat(3) {
    draw_text(x, y, "Looping!");
}

// Macro (define)
#define PI 3.14159
var circumference = 2 * PI * 10;

```

---

## TypeScript

```typescript
///@function highlight_test()
///@description Demonstrates GML syntax elements

// Variable declarations
var count = 10;
var speed = 2.5;
var isActive = true;
var name = "GML";
var color = c_red;

// Arrays and structs
var data = [1, 2, 3];
var stats = { hp: 100, mp: 50, alive: true };

// Access and assignment
player.hp -= 5;
global.score += 100;
stats.hp = clamp(stats.hp - 10, 0, 100);

// Control flow
if (isActive && count > 0) {
    show_debug_message("Active: " + string(count));
} else if (!isActive) {
    instance_destroy();
} else {
    count = 0;
}

// Loop
for (var i = 0; i < array_length(data); i++) {
    data[i] *= 2;
}

// Switch
switch (count) {
    case 0: show_message("Zero"); break;
    case 1: show_message("One"); break;
    default: show_message("Many");
}

// Scripted functions
function do_magic(target, power) {
    with (target) {
        hp -= power;
        if (hp <= 0) instance_destroy();
    }
}

// Call function
do_magic(enemy, 25);

// Enum
enum STATES { IDLE, MOVE, ATTACK }
var state = STATES.MOVE;

// Repeat
repeat(3) {
    draw_text(x, y, "Looping!");
}

// Macro (define)
#define PI 3.14159
var circumference = 2 * PI * 10;

```

---

## Java

```java
///@function highlight_test()
///@description Demonstrates GML syntax elements

// Variable declarations
var count = 10;
var speed = 2.5;
var isActive = true;
var name = "GML";
var color = c_red;

// Arrays and structs
var data = [1, 2, 3];
var stats = { hp: 100, mp: 50, alive: true };

// Access and assignment
player.hp -= 5;
global.score += 100;
stats.hp = clamp(stats.hp - 10, 0, 100);

// Control flow
if (isActive && count > 0) {
    show_debug_message("Active: " + string(count));
} else if (!isActive) {
    instance_destroy();
} else {
    count = 0;
}

// Loop
for (var i = 0; i < array_length(data); i++) {
    data[i] *= 2;
}

// Switch
switch (count) {
    case 0: show_message("Zero"); break;
    case 1: show_message("One"); break;
    default: show_message("Many");
}

// Scripted functions
function do_magic(target, power) {
    with (target) {
        hp -= power;
        if (hp <= 0) instance_destroy();
    }
}

// Call function
do_magic(enemy, 25);

// Enum
enum STATES { IDLE, MOVE, ATTACK }
var state = STATES.MOVE;

// Repeat
repeat(3) {
    draw_text(x, y, "Looping!");
}

// Macro (define)
#define PI 3.14159
var circumference = 2 * PI * 10;

```

---


---

```c
///@function vertex_point_add(buff,x,y,z,nx,ny,nz,u,v)
///@description Adds a point to a vertex buffer.
///@param buffer
///@param x
///@param y
///@param z
///@param nx
///@param ny
///@param nz
///@param u
///@param v
function vertex_point_add(argument0, argument1, argument2, argument3, argument4, argument5, argument6, argument7, argument8) {
	var buffer=argument0
	var xx=argument1;
	var yy=argument2;
	var zz=argument3;
	var nx=argument4;
	var ny=argument5;
	var nz=argument6;

  var lan="rala"

	var uu=argument7;
	var vv=argument8;

	vertex_position_3d(buffer,xx,yy,zz);
	vertex_normal(buffer,nx,ny,nz);
	
	vertex_texcoord(buffer,uu,vv);
	vertex_color(buffer,c_white,1);
}

///@fuction model_block(x1,y1,z1,x2,y2,z2,hrepeat,vrepeat)
///@description Creates a block model 
///@param x1
///@param y1
///@param z1
///@param x2
///@param y2
///@param z2
///@param hrepeat
///@param vrepeat
function model_block() {

	// Gets argument into variables
	var x1=argument[0];
	var y1=argument[1];
	var z1=argument[2];
	var x2=argument[3];
	var y2=argument[4];
	var z2=argument[5];
	var hrepeat=argument[6];
	var vrepeat=argument[7];
	var zrepeat=argument[8];

	var vb = vertex_create_buffer();

	vertex_begin(vb, vertex_format);

	//bottom
	vertex_point_add(vb,	x1,y1,z1,	0,0,-1,	0,0);
	vertex_point_add(vb,	x1,y2,z1,	0,0,-1,	0,vrepeat);
	vertex_point_add(vb,	x2,y2,z1,	0,0,-1,	hrepeat,vrepeat);
												
	vertex_point_add(vb,	x2,y2,z1,	0,0,-1,	hrepeat,vrepeat);
	vertex_point_add(vb,	x2,y1,z1,	0,0,-1,	hrepeat,0);
	vertex_point_add(vb,	x1,y1,z1,	0,0,-1,	0,0);
	//top								
	vertex_point_add(vb,	x1,y1,z2,	0,0,1,	0,0);
	vertex_point_add(vb,	x2,y1,z2,	0,0,1,	hrepeat,0);
	vertex_point_add(vb,	x2,y2,z2,	0,0,1,	hrepeat,vrepeat);
										
	vertex_point_add(vb,	x2,y2,z2,	0,0,1,	hrepeat,vrepeat);
	vertex_point_add(vb,	x1,y2,z2,	0,0,1,	0,vrepeat);
	vertex_point_add(vb,	x1,y1,z2,	0,0,1,	0,0);										
	//front								
	vertex_point_add(vb,	x1,y2,z1,	0,1,0,	0,0);
	vertex_point_add(vb,	x1,y2,z2,	0,1,0,	0,zrepeat);
	vertex_point_add(vb,	x2,y2,z2,	0,1,0,	hrepeat,zrepeat);
												
	vertex_point_add(vb,	x2,y2,z2,	0,1,0,	hrepeat,zrepeat);
	vertex_point_add(vb,	x2,y2,z1,	0,1,0,	hrepeat,0);
	vertex_point_add(vb,	x1,y2,z1,	0,1,0,	0,0);
	//right										
	vertex_point_add(vb,	x2,y2,z1,	1,0,0,	0,0);
	vertex_point_add(vb,	x2,y2,z2,	1,0,0,	0,zrepeat);
	vertex_point_add(vb,	x2,y1,z2,	1,0,0,	vrepeat,zrepeat);
												
	vertex_point_add(vb,	x2,y1,z2,	1,0,0,	vrepeat,zrepeat);
	vertex_point_add(vb,	x2,y1,z1,	1,0,0,	vrepeat,0);
	vertex_point_add(vb,	x2,y2,z1,	1,0,0,	0,0);
	//back								
	vertex_point_add(vb,	x2,y1,z1,	0,-1,0,	0,0);
	vertex_point_add(vb,	x2,y1,z2,	0,-1,0,	0,zrepeat);
	vertex_point_add(vb,	x1,y1,z2,	0,-1,0,	hrepeat,zrepeat);
												
	vertex_point_add(vb,	x1,y1,z2,	0,-1,0,	hrepeat,zrepeat);
	vertex_point_add(vb,	x1,y1,z1,	0,-1,0,	hrepeat,0);
	vertex_point_add(vb,	x2,y1,z1,	0,-1,0,	0,0);
	//											
	vertex_point_add(vb,	x1,y1,z1,	-1,0,0,	0,0);
	vertex_point_add(vb,	x1,y1,z2,	-1,0,0,	0,zrepeat);
	vertex_point_add(vb,	x1,y2,z2,	-1,0,0,	vrepeat,zrepeat);
												
	vertex_point_add(vb,	x1,y2,z2,	-1,0,0,	vrepeat,zrepeat);
	vertex_point_add(vb,	x1,y2,z1,	-1,0,0,	vrepeat,0);
	vertex_point_add(vb,	x1,y1,z1,	-1,0,0,	0,0);

	vertex_end(vb);
	return vb;
}

function draw_3d_model_ext(model,texture,xx,yy,zz,rx,ry,rz,sx,sy,sz){
	var matrix=matrix_build(xx,yy,zz,rx,ry,rz,sx,sy,sz);
	matrix_set(matrix_world,matrix)
	vertex_submit(model, pr_trianglelist, texture);
	matrix_set(matrix_world,matrix_build_identity())
}
function draw_3d_model(model,texture,xx,yy,zz){
	var matrix=matrix_build(xx,yy,zz,0,0,0,1,1,1);
	matrix_set(matrix_world,matrix)
	vertex_submit(model, pr_trianglelist, texture);
	matrix_set(matrix_world,matrix_build_identity())
}

function draw_3d_sprite(ss,ii,xx,yy,zz,rx,ry,rz){
	matrix_set(matrix_world, matrix_build(xx, yy, zz, -90+rx, ry, rz, 1, 1, 1));
	draw_sprite(ss, ii, 0, 0);
	matrix_set(matrix_world, matrix_build_identity());
}
function draw_3d_sprite_ext(ss,ii,xx,yy,zz,rx,ry,rz,xs,ys,ir,cc,aa){
	matrix_set(matrix_world, matrix_build(xx, yy, zz, -90+rx, ry, rz, 1, 1, 1));
	draw_sprite_ext( ss, ii, 0, 0, xs, ys, ir, cc, aa );
	matrix_set(matrix_world, matrix_build_identity());
}

function draw_3d_billboard(ss,ii,xx,yy,zz){
	matrix_set(matrix_world, matrix_build(xx, yy, zz, -90+0, 0, cam.dir+90, 1, 1, 1.25));
	draw_sprite(ss, ii, 0, 0);
	matrix_set(matrix_world, matrix_build_identity());
}
function Billboard(spr)constructor{
	sprite_index=spr_error;
	image_index=0;
	sub_animation=0;
	draw_index=0;
	image_speed=0.2;
	dir=0;
	sprite_lenght=1;
	init=function(spr){
		sprite_index=spr;
		sprite_lenght=sprite_get_number(spr);
		sub_animation=sprite_lenght/8;
	}
	step=function(dir){
		dir=dir

		
		image_index+=image_speed;
		image_index=rollover(image_index,0,sub_animation)
		
		var ldir=rollover(dir+(-cam.dir),0,365)
		var idir=rollover((round(ldir/45)-2),0,8)

		
		draw_index=floor(image_index)+(sub_animation*idir)


		
	}
	
	draw=function(x,y,z){
		draw_3d_billboard(sprite_index,draw_index,x,y,z)
	}
	init(spr);
}

```