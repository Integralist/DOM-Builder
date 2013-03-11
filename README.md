DOM-Builder
===========

Small utility script for easily generating a DOM structure.

##Example

```js
// Returns DOM structure wrapped in a `<div>`
var structure = DOM.init(
    DOM.create('div#js-a').content(
        DOM.create('p').content('abc'),
        DOM.create('p').content('def')
    ),
    DOM.create('div#js-b.x.y.z').content(
        DOM.create('p#js-c.some_other_class').content('ghi')
    )
);

document.body.appendChild(structure);
```