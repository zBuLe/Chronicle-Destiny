---
title: Style Test Page
layout: default
---

# H1 Title

## H2 Subtitle

### H3 Section

---

This is a normal paragraph to test body text rendering.

You can also test **bold**, *italic*, and `inline code` elements.

Here is a [link to example.com](https://example.com).

## Horizontal Rule

---

## Table Test

| Feature     | Example Value | Notes                  |
|-------------|---------------|------------------------|
| Movement    | WASD          | Character movement     |
| Dialog      | J             | Interact with objects  |
| Action      | K             | Primary action button  |

## Unordered List

- Item One
- Item Two
- Item Three

## Ordered List

1. First
2. Second
3. Third

## Blockquote

> This is a blockquote example.  
> It should be styled clearly from normal text.

## Code Block

```java
// Example GML-style Java code block
var playerSpeed = 4;
if (keyboard_check(vk_left)) {
    x -= playerSpeed;
}
````

## Checklist

* [x] Implement style test
* [ ] Add checklist support
* [x] Review markdown styles

````

---

## ✅ Usage:
Save this as `test.md` in your site root or `/pages/` folder.  
Link to it from your site temporarily:  

```markdown
* [🎨 Style Test]({{ '/test.md' | relative_url }})
````

Visit `chronicle.zbule.xyz/test` → you will see everything rendered in one place 👍

---

If you want, I can also offer a **matching suggestion for custom checklist CSS**
(to make `[x]` and `[ ]` checkboxes look bigger + aligned).

👉 Just say **“yes, give me checklist css too.”**
