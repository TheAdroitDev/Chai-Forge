![banner](/public/banner.png)
# Chai Forge
> Utility-first styling. Forged at runtime.

Chai Forge is a lightweight JavaScript engine that lets you write utility classes directly in HTML — without writing CSS or setting up build tools.

It scans the DOM, parses `chai-*` class names, and applies inline styles dynamically.

---

## Why Chai Forge?

Writing CSS for small UI tweaks can slow things down.

Chai Forge is built for:

- Rapid prototyping
- Small projects
- Learning how styling systems work under the hood

It's intentionally simple — no config, no build step, just direct control.

---

## Features

- No CSS files required
- Works via CDN or npm
- Auto-initialized on `DOMContentLoaded` — no manual function calls needed
- Handles dynamic DOM updates via `MutationObserver`
- Lightweight and fast
- Includes built-in design presets

---

## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/chai-forge/src/index.js"></script>
```

### npm

```bash
npm i chai-forge
```

---

## Usage

Add `chai-*` classes to any HTML element:

```html
<div class="chai-p-20 chai-bg-red chai-text-white">
  Hello Chai Forge
</div>
```

No JavaScript setup required. Chai Forge initializes automatically.

---

## Utilities

### Spacing

| Class | Style Applied |
|---|---|
| `chai-p-20` | `padding: 20px` |
| `chai-m-10` | `margin: 10px` |

### Colors

| Class | Style Applied |
|---|---|
| `chai-bg-red` | `background-color: #ef4444` |
| `chai-bg-blue` | `background-color: #3b82f6` |
| `chai-bg-green` | `background-color: #22c55e` |
| `chai-bg-black` | `background-color: #0f172a` |
| `chai-bg-white` | `background-color: #f8fafc` |

### Typography

| Class | Style Applied |
|---|---|
| `chai-text-center` | `text-align: center` |
| `chai-text-left` | `text-align: left` |
| `chai-text-right` | `text-align: right` |
| `chai-text-24` | `font-size: 24px` |
| `chai-text-red` | `color: #ef4444` |

### Layout

| Class | Style Applied |
|---|---|
| `chai-flex` | `display: flex` |
| `chai-justify-center` | `justify-content: center` |
| `chai-items-center` | `align-items: center` |

### Size

| Class | Style Applied |
|---|---|
| `chai-w-200` | `width: 200px` |
| `chai-h-100` | `height: 100px` |

### Borders

| Class | Style Applied |
|---|---|
| `chai-rounded-10` | `border-radius: 10px` |
| `chai-border-2` | `border: 2px solid rgba(0,0,0,0.2)` |

---

## Presets

Chai Forge ships with built-in presets for common UI patterns. Apply them as a single class.

### `chai-agent`

A clean, professional dark UI card.

```html
<div class="chai-agent">
  Agent Panel
</div>
```

### `chai-glass`

Frosted glass effect with blur and transparency.

```html
<div class="chai-glass">
  Glass UI
</div>
```

### `chai-card`

Elevated white card with shadow.

```html
<div class="chai-card">
  Card Content
</div>
```

### `chai-mission`

Terminal-style dark block with a sky-blue accent — inspired by mission-critical UIs.

```html
<div class="chai-mission">
  Mission briefing...
</div>
```

### `chai-intel`

Dark green monospace block, styled like a hacker terminal.

```html
<div class="chai-intel">
  Target acquired.
</div>
```

### `chai-elite`

A premium dark container with subtle border and letter-spacing.

```html
<div class="chai-elite">
  Elite tier content.
</div>
```

### `chai-loid`

Deep navy card with soft text — clean and professional.

```html
<div class="chai-loid">
  Operative profile.
</div>
```

### `chai-stealth`

Low-opacity dark block for secondary or hidden UI elements.

```html
<div class="chai-stealth">
  Background process...
</div>
```

### `chai-shadow`

Adds a deep shadow and border-radius to any element.

```html
<div class="chai-shadow">
  Elevated content.
</div>
```

### `chai-sandwich`

Inline pill with a warm background, red text, and soft border — great for tags or badges.

```html
<span class="chai-sandwich">Tag</span>
```

### `chai-chai`

Amber pill with white text — the signature preset.

```html
<span class="chai-chai">Chai Forge</span>
```

---

## How It Works

1. On `DOMContentLoaded`, Chai Forge scans all elements with `chai-*` classes
2. Each class name is split into `type` and `value`
3. The matching style is applied as an inline style

```js
// Example: "chai-p-20" → padding: 20px
const [, type, value] = cls.split("-");
```

A `MutationObserver` watches for new DOM nodes and processes them automatically, so dynamically added elements are styled without any extra setup.

---

## Extending Chai Forge

You can define your own presets using `window.ChaiForge.define`:

```js
window.ChaiForge.define("neon", (el) => {
  el.style.color = "#39ff14";
  el.style.border = "1px solid #39ff14";
  el.style.padding = "10px 16px";
  el.style.borderRadius = "8px";
  el.style.fontFamily = "monospace";
});
```

Then use it in HTML:

```html
<div class="chai-neon">Custom Preset</div>
```

---

## Example

```html
<div class="chai-agent chai-text-center chai-p-20">
  Dashboard
</div>

<span class="chai-chai">Powered by Chai Forge</span>

<div class="chai-flex chai-items-center chai-justify-center chai-h-100">
  <p class="chai-text-24 chai-text-white">Hello World</p>
</div>
```

---

## Use Cases

- Rapid UI prototyping
- Learning how CSS styling systems work
- Developer tools, experiments, and demos
- Small projects that don't need a full CSS framework

---

## License

MIT

---

## Author

**Shivam Verma**  
[theadroitdev.com](https://theadroitdev.com)