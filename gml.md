---
title: GML Syntax Highlighting Test
layout: default
---

# GML Syntax Highlighting Demo

This page tests Prism's GML syntax highlighting.  
The code does not do anything useful; it's just for style and coverage.

```gml
#macro TOTAL_WEAPONS 10

/// @description Example GML Syntax Demo

// Single line comment
/* Multi-line
   comment */

/// @function                is_same_object(inst_id, object_id)
/// @description             Check if the given instance belongs to the given object.
/// @param {Id.Instance}     inst_id    The unique instance ID value of the instance to check.
/// @param {Asset.GMObject}  [object_id]  The object index to be checked against.
/// @return {Bool}

function is_same_object(_inst_id, _object_id=noone)
{
    return _inst_id.object_index == _object_id;
}

enum ENUM_TEST
{
    VAL = 10
}

enum RAINBOW
{
    RED = 5,
    ORANGE = 5 * 2,
    YELLOW = 15,
    GREEN = 20,
    BLUE = 25,
    INDIGO = 30,
    VIOLET = 35 * ENUM_TEST.VAL
}

var player_speed = 4;
globalvar global_value;

x=5;
orange="orange"

global.food = 5 ;

if (keyboard_check(vk_right)) {
    x += player_speed;
}

repeat (5) {
    var random_value = irandom_range(1, 100);
    show_debug_message("Value: " + string(random_value));
}

switch (argument0) {
    case 0:
        break;
    case 1:
        exit;
    default:
        return;
}

var my_array = array_create(5, 0);

my_array[0] = 1;
my_array[1] = my_array[0] * 3.14 + 0xFF;

var result = (true && false) || (1 < 2);

var undefined_value = undefined;
var pi_value = pi;

action_stop();
action_restart();

with (other) {
    hp -= 10;
}

// Constants
var some_constant = GM_version;

// Operators
x = ++x;
y = --y;
z = x ** 2;

// Complex numbers
var big_num = 1234567890;
var hex_num = 0x1A3F;
var float_num = 3.14159e-2;

#macro arara 1232 

#region
lass=$abcd
kass=0b0010

$2c8edd == #dd8e2c
#endregion

var test = @"This string has
line breaks
over multiple
lines
";

var _world = "Earth";
var _template = $"Hello {_world}!";


```