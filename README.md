# typewriter-js

![](typewriter-js-preview.gif)

Simple Typewriter effect for website.

## Key features

-   Text content is set in the HTML (works well with SEO and fallback if JavaScript not enabled)
-   Typing effects starts only when your element becomes visible
-   Multiple elements on the same page can be used
-   Configure typing speed, text color, cursor character and cursor color
-   Plain JavaScript, no dependencies

## Options

Function interface:
```js
typewriteText(id, speed, textcolor, cursorcolor);
```

Function arguments:
| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| id | String | null | id of the target DOM element to typewrite (mandatory) |
| speed | Number | 100 | Writing speed per character in milliseconds |
| textcolor | String | '#000000' | Hex color code of text |
| cursor | String | '\|' | Character used as cursor |
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

Call typewriteText function using id of element, in any place of your HTML file.

To use default values, you can just call with ID:

```js
typewriteText("typewrite_this");
```

If you want to set your own options:

```js
typewriteText("typewrite_this", speed=120, textcolor="#000000", cursor="_", cursorcolor="#7eed00");
```
