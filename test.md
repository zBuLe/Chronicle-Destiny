---
title: Extended Markdown Theme Test Page
---

# Heading 1

This is a paragraph under Heading 1. Markdown is useful for writing documentation, notes, or blogs.

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Text Styles

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.

Regular text, *italic text*, **bold text**, ***bold italic text***, ~~strikethrough~~, and `inline code`.

## Links

[GitHub](https://github.com)  
<https://github.com>

## Images

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Lists

### Unordered List

- Item 1
  - Sub-item 1a
  - Sub-item 1b
- Item 2
- Item 3

### Ordered List

1. First
2. Second
3. Third

### Task List

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

## Blockquotes

> “Any sufficiently advanced technology is indistinguishable from magic.”  
> — Arthur C. Clarke

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going according to **plan**.

## Code

### Inline code

Use `git status` to list all new or modified files.

### Code blocks

```java
/// @function                is_same_object(inst_id, object_id)
/// @description             Check if the given instance belongs to the given object.
/// @param {Id.Instance}     inst_id    The unique instance ID value of the instance to check.
/// @param {Asset.GMObject}  object_id  The object index to be checked against.
/// @return {Bool}

function createEnemy(x, y) {
    var enemy = instance_create_layer(x, y, "Instances", obj_enemy);
    enemy.hp = 100;
    enemy.speed = 4;
    return enemy;// GML (GameMaker Language) example
}
````

```gml
/// @function                is_same_object(inst_id, object_id)
/// @description             Check if the given instance belongs to the given object.
/// @param {Id.Instance}     inst_id    The unique instance ID value of the instance to check.
/// @param {Asset.GMObject}  object_id  The object index to be checked against.
/// @return {Bool}

function createEnemy(x, y) {
    var enemy = instance_create_layer(x, y, "Instances", obj_enemy);
    enemy.hp = 100;
    enemy.speed = 4;
    return enemy;// GML (GameMaker Language) example
}
```

```python
def hello_world():
    print("Hello, world!")
```

```diff
- This line was removed
+ This line was added
```

### Indented code block

```
This is an indented code block.
```

## Admonitions

> **Note:** This is an informational note.
>
> **Warning:** Be careful with experimental features!


## Horizontal Rule

---

## Tables

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |     Text    |    And more |

## Footnotes

Here is a sentence with a footnote.[^1]

[^1]: This is the footnote.

## Definition List

Apple
:   Pomaceous fruit of plants of the genus *Malus*.

Orange
:   The fruit of an evergreen tree of the genus *Citrus*.

Banana
:   An elongated, edible fruit.
