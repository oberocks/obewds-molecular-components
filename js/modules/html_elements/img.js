import { Html_element } from './data/html_element.js';
import { apply_attributes } from './utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Img extends Html_element {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // define default class settings/options
        this.class_default_attributes = {
            alt : null,
            crossorigin : null,
            decoding : null,
            height : null,
            importance : null,
            ismap : null,
            loading : null,
            referrerpolicy : null,
            sizes : null,
            src : null,
            srcset : null,
            width : null,
            usemap : null
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
        let el = document.createElement('img');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // return the new element node
        return el;
        
    }

    example () {
        
        return this.generate({
            attributes: {
                src: 'https://obewds.com/images/obewds-logo-social-square-light-ground.jpg',
                alt: 'OBE:WDS Square Profile Logo',
                class: 'img-fluid box-shadow-xs mb-3'
            }
        });
    
    }
    
}