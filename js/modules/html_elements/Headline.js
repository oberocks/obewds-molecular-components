import { Html_element } from './data/Html_element.js';
import { apply_attributes, insert_text } from './utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Headline extends Html_element {

    constructor (opts = false) {

        // get props from inhereted class
        super();
        
        // assign any class default attributes/settings
        this._defaults.tag = 'h1';

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;

    }

    get_class_defaults () {
        
        return this.defaults;
    
    }

    get_merged_options (options) {
        
        return settings_merge(this.defaults, options);
    
    }

    generate (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement(opts.tag);

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;

    }

    example () {
        
        return this.generate({
            text : 'Default Example (h1) Headline'
        });
    
    }

    h1 (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h1');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;

    }

    h2 (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h2');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;

    }

    h3 (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h3');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;

    }

    h4 (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h4');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;

    }

    h5 (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h5');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;

    }

    h6 (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h6');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;
        
    }
    
}