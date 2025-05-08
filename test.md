---
layout: default
title: Markdown Test
---

# Markdown Syntax Test

This page is to check how markdown elements look in your theme.

---

## Headings

# H1 Heading  
## H2 Heading  
### H3 Heading  
#### H4 Heading  
##### H5 Heading  
###### H6 Heading

---

## Paragraph & Emphasis

This is a paragraph with **bold**, *italic*, ***bold italic***, and `inline code`.

> This is a blockquote.
>
> - With a list inside
> - To check rendering

---

## Lists

### Unordered List
- Apple
- Banana
  - Nested item
- Cherry

### Ordered List
1. First
2. Second
   1. Sub-item
3. Third

---

## Code Block

### javascript

```javascript
function helloWorld() {
  console.log("Hello, world!");
}
````

---

### GameMaker Language

<<pre> ```gml /// @function is_same_object(inst_id, object_id) /// @description Check if the given instance belongs to the given object. /// @param {Id.Instance} inst_id The unique instance ID value of the instance to check. /// @param {Asset.GMObject} object_id The object index to be checked against. /// @return {Bool} function is_same_object(_inst_id, _object_id) { var inst_id = _inst_id; var object_id = _object_id return inst_id.object_index == _object_id; } ``` </pre>


```gml
/// @function                is_same_object(inst_id, object_id)
/// @description             Check if the given instance belongs to the given object.
/// @param {Id.Instance}     inst_id    The unique instance ID value of the instance to check.
/// @param {Asset.GMObject}  object_id  The object index to be checked against.
/// @return {Bool}

function is_same_object(_inst_id, _object_id)
{
    var inst_id = _inst_id; 
    var object_id = _object_id
    return inst_id.object_index == _object_id;
}
```

---

## Link & Image

[Visit GitHub](https://github.com)

![Placeholder Image](/assets/images/zlogo.png)

---

## Table

| Name    | Age | Role      |
| ------- | --- | --------- |
| Alice   | 30  | Developer |
| Bob     | 28  | Designer  |
| Charlie | 35  | Manager   |

---

## Horizontal Rule

---

## Task List

* [x] Task one
* [ ] Task two
* [ ] Task three

---

## Emoji

👍 🎮 🔥 💻 🧪

---




---

---

---

```
This file will help you:
- Preview heading sizes
- See how lists and tables render
- Check styling of code blocks, quotes, and other elements

Would you like a dark mode version too?
```
