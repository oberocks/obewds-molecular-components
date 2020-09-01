import { settings_merge } from '../helpers/settings_merge.js';
import { apply_attributes } from './utilities/dom_generation.js';

class Image
{
    constructor (opts = false)
    {
        /** 
         * Image : A helper script to generate an image element
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            attributes: {
                src: 'https://obewds.com/images/obewds-logo-social-square-light-ground.jpg',
                alt: 'OBE:WDS Square Profile Logo',
                class: 'img-fluid box-shadow-xs mb-2'
            }
        };

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

    generate (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('img');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // return the new element node
        return el;
    }
    
}
  
export { Image };