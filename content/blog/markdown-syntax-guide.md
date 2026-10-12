---
title: "Markdown Syntax Guide"
date: "2026-10-12"
description: "A reference for all the markdown syntax you can use in blog posts."
tags: ["markdown", "guide", "reference"]
---

# Heading 1

This is a paragraph. You can write **bold text**, *italic text*, or ~~strikethrough~~. You can also combine them like **bold and *italic***.

## Heading 2

### Heading 3

#### Heading 4

---

## Lists

### Unordered List

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered List

1. Step one
2. Step two
3. Step three

### Task List

- [x] Completed task
- [ ] Task to do
- [ ] Another task

---

## Links and Images

[A link to Google](https://google.com)

![Placeholder image](https://placehold.co/600x400/png)

---

## Code

Inline code: `console.log("hello")`

Fenced code block:

```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("world"));
```

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))
```

---

## Blockquote

> This is a blockquote.
> It can span multiple lines.
>
> > And you can nest blockquotes!

---

## Horizontal Rule

Before the rule...

---

...after the rule.

---

## Tables

| Feature | Supported |
|---------|-----------|
| Headings | ✅ |
| Lists | ✅ |
| Code blocks | ✅ |
| Tables | ✅ |
| Images | ✅ |

---

## HTML (also works)

You can use raw HTML inside markdown:

<div style="padding: 16px; background: #fef3c7; border-radius: 8px;">
    This is a styled div using inline HTML.
</div>

<details>
    <summary>Click to expand</summary>
    <p>Hidden content revealed!</p>
</details>
