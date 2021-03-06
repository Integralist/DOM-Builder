/**
 * @license Copyright (c) 2013 Mark McDonnell (www.integralist.co.uk)
 * LICENSE: see the LICENSE.txt file. 
 * If file is missing, this file is subject to the MIT License at: 
 * http://www.opensource.org/licenses/mit-license.php.
 */

(function (define) {
    'use strict';

    define(function() {
        var DOM = {
            structure: '',
            storage: { tags:[] },

            add_id: function(id) {
                return id ? ' id="' + id + '"' : '';
            },

            add_class: function(classes) {
                return classes.length ? ' class="' + classes.join(' ') + '"' : '';
            },

            add_attribute: function(attributes) {
                if (!attributes) {
                    return '';
                }

                var len   = attributes.length,
                    attrs = [],
                    data, key, prop;

                while (len--) {
                    data = attributes[len].split('=');
                    key  = data[0].substring(1);
                    prop = data[1].substring(0, data[1].length-1);

                    attrs.push(' ' + key + '="' + prop + '"');
                }

                return attrs.join(' ');
            },

            content: function() {
                var counter = 0,
                    limit = arguments.length;

                while (counter < limit) {
                    if (typeof arguments[counter] == 'string') {
                        this.structure += arguments[counter];
                    }
                    counter++;
                }

                this.structure += '</' + this.storage.tags.pop() + '>'; // remove the last tag from the storage list and use it here
            },

            el: function(tag) {
                return this.create(tag);
            },

            create: function(tag) {
                var tag, id, classes, attributes;

                id = /#([^.]+)/.exec(tag);
                id = (id) ? id[1] : ''; // `exec` returns `null` if there is no match

                classes = tag.split('.').splice(1); // remove the first index which should be the tag

                attributes = tag.match(/\[[^\]]+\]/g); // e.g. ["[width=100]", "[blah=abc]"]

                tag = tag.match(/[^#.\[\]]+/)[0];

                this.structure += '<' + tag + '' + this.add_class(classes) + '' + this.add_id(id) + '' + this.add_attribute(attributes) + '>';
                this.storage.tags.push(tag); // store the current tag so we can close off the element after all sub content is added.

                return this; // we return `this` so we can chain method calls
            },

            convert_to_node: function() {
                var doc  = document,
                    frag = doc.createDocumentFragment(),
                    node = doc.createElement('div'),
                    counter = 0,
                    limit;

                node.innerHTML = this.structure;
                this.structure = ''; // reset

                // We now need to remove the 'wrapping' <div> which was only necessary so we could `innerHTML` the content into it...

                limit = node.children.length;

                while (counter < limit) {
                    frag.appendChild(node.children[counter].cloneNode(true));
                    counter++;
                }

                node = null; // clean-up

                return frag;
            },

            init: function() {
                if (!arguments.length) {
                    throw new Error('Please ensure you pass in at least one argument to DOM.init() which is a call to either the DOM.create() or DOM.el() methods');
                }
                return this.convert_to_node();
            }
        }

        return DOM;
    });
}(typeof define == 'function' && define.amd ? define : function(factory) { this.DOM = factory() } ));