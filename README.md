# typewriter-js

Typewriter effect for website with plain JavaScript, where text content is given directly inside HTML tags for SEO purposes.

Typewriting effect can be done for multiple texts in same page. If content is outside viewport, typewriter uses observer to not start the effect until content is visible.

## Options

Function interface:
```js
typewriteText(id, speed, textcolor, cursorcolor);
```

Function arguments:
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| id | String | null | id of the target DOM element to typewrite |
| speed | Integer | 100 | Writing speed per character in milliseconds |
| textcolor | String | '#000000' | Hex color code of text |
| cursorcolor | String | '#000000' | Hex color code of cursor |

## Example

Import typewriter.js in your HTML file.

```html
<script src="typewriter.js"></script>
```

Add id to element, which content you want to typewrite, 

```html
<h1 id="typewrite_this">
    Typewrite this text<br> on multiple<br> rows.
</h1>
```

Call typewriteText function, with appropriate parameters, in any place of your HTML file.

```html
<script type="text/javascript">
    typewriteText("typewrite_this", speed=75, textcolor="#000000", cursorcolor="#7eed00");
</script>
```
