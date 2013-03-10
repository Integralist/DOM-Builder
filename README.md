DOM-Builder
===========

Small utility script for easily generating a DOM structure.

By default it returns the specified DOM wrapped in a `<div>`.

But if you pass through a configuration object you can change how the data is stored.

The alternatives are you can get the DOM structure back as a `String`, or instead of having the DOM wrapped in a `<div` you can have it as an `Array` which you can then loop over and inject however you wish.

##Default Example

```js
// Returns DOM structure wrapped in a `<div>`
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

##Configuration Example

```js
// Returns DOM structure as a `String`
var structure_string = new DOM([
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
], { return_string: true });

// Returns DOM structure as an `Array`
var structure_array = new DOM([
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
], { return_array: true });
```