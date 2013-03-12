DOM-Builder
===========

Small utility script for easily generating a DOM structure.

The library is ~52 lines of code.

The size is ~710 bytes when run through the uglify js minifier (and even smaller once gzip'ed)

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

##Alias

You can also use `DOM.el` if you wanted to instead of `DOM.create`:

```js
var structure = DOM.init(
    DOM.el('div#js-a').content(
        DOM.el('p').content('abc'),
        DOM.el('p').content('def')
    ),
    DOM.create('div#js-b.x.y.z').content(
        DOM.el('p#js-c.some_other_class').content('ghi')
    )
);
```

##TODO

- Add Alias for `$`
- Add AMD support
- clean-up direct access to `DOM.create`