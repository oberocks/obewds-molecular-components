import { Html_element } from './data/Html_element.js';
import { apply_attributes } from './utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Br extends Html_element {

    constructor (opts = false) {

        // get props from inhereted class
        super();

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
        let el = document.createElement('br');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // return the new element node
        return el;

    }

    example () {
        
        return this.generate();
    
    }
    
}