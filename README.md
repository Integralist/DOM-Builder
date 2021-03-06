DOM-Builder
===========

Small utility script for easily generating a DOM structure.

The library is ~52 lines of code.

The size is ~710 bytes when run through the uglify js minifier (and even smaller once gzip'ed)

AMD compatible (see [index-amd.html](index-amd.html)).

##Example

```js
// Returns DOM structure as a document fragment
var structure = DOM.init(
    DOM.create('div#js-a').content(
        DOM.create('p').content('abc'),
        DOM.create('p').content('def')
    ),
    DOM.create('div#js-b.x.y.z').content(
        DOM.create('p#js-c.some_other_class').content('ghi')
    ),
    DOM.create('select').content(
        DOM.create('option[value=1][data-test=123]').content('Hah!')
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

##AMD

You can use an AMD loader such as [RequireJS](http://www.requirejs.org/) to load the DOM Builder script:

```js
// module_dombuilder.js
define(['dombuilder'], function($) {
    var structure = $.init(
        $.create('div#js-a').content(
            $.create('p').content('abc'),
            $.create('p').content('def')
        ),
        $.create('div#js-b.x.y.z').content(
            $.create('p#js-c.some_other_class').content('ghi')
        )
    );

    var structure_alias = $.init(
        $.el('div#js-x').content(
            $.el('p').content('123'),
            $.el('p').content('456')
        ),
        $.el('div#js-y.a.b.c').content(
            $.el('p#js-z.some_other_class').content('789')
        )
    );
});

// Application.js
require(['module_dombuilder', 'module_x', 'module_y', 'module_z']);
```

##Note

Do not use `DOM.create` or `DOM.el` outside of a `DOM.init` call as they wont function as intended. The way DOM Builder has been built is to allow the return value from those functions to be passed into `DOM.init` to handle.