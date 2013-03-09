/**
 * Construct a DOM representation from 
 * the passed through data.
 *
 * @param   Array   options   a complex data structure made up of sub Objects/Arrays
 * @param   Boolean   return_string    if true then return a string of the generated HTML struture
*/
function DOM(options, return_string) {
    this.content = '';
    this.options = options;
    this.return_string = return_string || false;
    this.construct(this.options);

    if (!return_string) {
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
    var node = document.createElement('div');
    node.innerHTML = this.content;
    this.content = node;
}