# is-hidden

Determines if an element is hidden.

Currently, this is a very simple condition. The eventual goal is to cover a variety
of conditions that would cause an element to be considered "hidden".


## Usage

```js
var isHidden = require("is-hidden");
var el = document.querySelector("#some-element");

isHidden(el);
// => true|false
```


## API

### isHidden(el)

Returns a `Boolean` depending on if the element is hidden. (right now, only covers a
basic `display: none;` condition)

 * `el`: Must be a raw DOM element
