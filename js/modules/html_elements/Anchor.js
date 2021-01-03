import { Html_element } from './data/Html_element.js';
import { apply_attributes, insert_text } from './utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Anchor extends Html_element {

    constructor (opts = false) {

        // get props from inhereted class
        super();
        
        // define default class settings/options
        this.class_default_attributes = {
            download : null,
            href : null,
            hreflang : null,
            ping : null,
            referrerpolicy : null,
            rel : null,
            target : null,
            type : null
        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.attributes, this.class_default_attributes);

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;

    }

    get_class_defaults () {
        
        return this.defaults;
    
    }

    get_generate_options (options) {
        
        return settings_merge(this.defaults, options);
    
    }

    generate (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('a');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;
        
    }

    example () {
        
        return this.generate({
            attributes : {
                href : '#'
            },
            text : 'Default Anchor Link'
        });
    
    }
    
}