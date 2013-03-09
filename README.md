DOM-Builder
===========

Small utility script for easily generating a DOM structure (returns either generated nodes or string representation)

##Example

```js
var structure = new DOM([
    {
        tag: 'div',
        id: 'js-a',
        content: [
            {
                tag: 'p',
                content: 'abc'
            },
            {
                tag: 'p',
                content: 'def'
            }
        ]
    },
    {
        tag: 'div',
        classes: ['x', 'y', 'z'],
        id: 'js-b',
        content: [
            {
                tag: 'p',
                classes: ['some_other_class'],
                id: 'js-c',
                content: 'ghi'
            }
        ]
    }
]);
```