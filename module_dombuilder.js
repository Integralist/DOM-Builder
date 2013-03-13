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
    
    document.body.appendChild(structure); // the generated HTML is wrapped in a <div>

    /*
        The reason we need to wrap the required structure in a <div> is because 
        otherwise we'd have to return an Array (or something similar) for the user 
        to then insert into the DOM via a loop.

        Or alternatively we would just return the generated string representation of 
        the DOM structure for the user to innerHTML wherever they wanted.

        I've opted for the former, which is to wrap the content in a <div> as I think 
        it's nicer for the user to get back their DOM structure as an actual node
     */
});