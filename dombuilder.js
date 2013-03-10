/**
 * @license Copyright (c) 2013 Mark McDonnell (www.integralist.co.uk)
 * LICENSE: see the LICENSE.txt file. 
 * If file is missing, this file is subject to the MIT License at: 
 * http://www.opensource.org/licenses/mit-license.php.
 */

/**
 * Construct a DOM structure based off of provided data.
 *
 * @param   Array   contents   a complex data structure made up of sub Objects/Arrays
 * @param   Object   options   set of Boolean property values: `return_string` or `return_array`
*/
function DOM(contents, options) {
    this.content = '';
    this.options = options || { return_string: false, return_array: false };
    this.construct(contents);

    if (!this.options.return_string) {
        this.convert_to_node();
    }
}

DOM.prototype.is_array = function(object) {
    return Object.prototype.toString.call(object) === '[object Array]' && object.length >= 1;
}

DOM.prototype.add_id = function(object) {
    return object.id ? ' id="' + object.id + '"' : '';
}

DOM.prototype.add_class = function(object) {
    return object.classes ? ' class="' + object.classes.join(' ') + '"' : '';
}

DOM.prototype.add_subcontent = function(data) {
    if (typeof data === 'string') {
        this.content += data;
    } else if (this.is_array(data)) {
        this.construct(data);
    }
}

DOM.prototype.construct = function(array) {
    var counter = 0,
        limit = array.length;

    while (counter < limit) {
        this.content += '<' + array[counter].tag + '' + this.add_class(array[counter]) + '' + this.add_id(array[counter]) + '>';
        this.add_subcontent(array[counter].content);
        this.content += '</' + array[counter].tag + '>';
        counter++;
    }
}

DOM.prototype.convert_to_node = function() {
    var node = document.createElement('div'),
        nodes = [],
        counter = 0,
        limit;

    node.innerHTML = this.content;

    if (this.options.return_array) {
        limit = node.children.length;

        while (counter < limit) {
            nodes.push(node.children[counter].cloneNode(true));
            counter++;
        }

        this.content = nodes;
    } else {
        this.content = node;
    }
}