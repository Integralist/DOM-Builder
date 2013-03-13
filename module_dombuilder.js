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

    console.log(structure);
    console.log(structure_alias);
    
    document.body.appendChild(structure); // the generated HTML is returned as a document fragment (https://developer.mozilla.org/en-US/docs/DOM/document.createDocumentFragment)
});