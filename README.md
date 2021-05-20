# typewriter-js

![](typewriter-js-preview.gif)

Simple Typewriter effect for website.

## Key features

-   Plain JavaScript, no dependencies
-   Text content is set in the HTML (works well with SEO and fallback if JavaScript not enabled)
-   Typing effects starts only when your element becomes visible
-   Configure typing speed, cursor character and cursor color
-   Text style is untouched, so it can be set in your CSS normally
-   Multiple elements on the same page can be used
-   Line breaks with `<br>` tag can be used in target text 

## Interface

Function syntax:
```js
typewriteText(id[, options={[speed: 100][, cursor: '|'][, cursorcolor: '#000000']}] );
```

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| id | String | null | id of the target DOM element to typewrite. Mandatory. |
| speed | Number | 100 | Writing speed per character in milliseconds. Optional. |
| cursor | String | '\|' | Character used as cursor. Optional. |
| cursorcolor | String | '#000000' | Hex color code of cursor. Optional. |

## Examples

Import typewriter.js in your HTML file and add id to element you want to typewrite.

```html
<script src="typewriter.js"></script>

<h1 id="my_typewrite">
    Typewrite this text<br> on multiple<br> rows.
</h1>
```

Call typewriteText function using id of element, in any place of your HTML file.
You can call use any options you wish and rest of the values will be as default.

Here are some example way to start typewriting:
```js
// Use default values
typewriteText('my_typewrite');

// Define cursor character and cursor color only. Rest as default.
typewriteText('my_typewrite', options={cursorcolor: '#7eed00'});

// Define all possible options separately
typewriteText('my_typewrite', options={speed: 120, cursor: '_', cursorcolor: '#7eed00'});
```
