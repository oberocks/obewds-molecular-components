import { merge_objects } from '../helpers/merge_objects.js';
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
        this.defaults = (opts) ? merge_objects(true, this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
    }

    generate (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('img');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // return the new element node
        return el;
    }
    
}
  
export { Image };