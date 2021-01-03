import { Html_element } from './data/Html_element.js';
import { apply_attributes } from './utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Style extends Html_element {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // define default class settings/options
        this.class_default_attributes = {
            type : null,
            media : null,
            nonce : null,
            title : null
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

    get_merged_options (options) {
        
        return settings_merge(this.defaults, options);
    
    }

    generate (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('style');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        el.innerHTML = opts.text;

        // return the new element node
        return el;

    }

    example () {
        
        return this.generate({
            text : ':invalid { box-shadow: none; } :-moz-ui-invalid { box-shadow: none; }'
        });
    
    }
    
}