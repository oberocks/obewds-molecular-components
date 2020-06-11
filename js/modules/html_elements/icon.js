import { merge_objects } from '../helpers/merge_objects.js';
import { applyAttributes } from './utilities/dom_generation.js';

class Icon
{
    constructor (opts = false)
    {
        /** 
         * Paragraph : A helper script to generate a paragraph element
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            attributes: {
                class: 'fas fa-home'
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
        let el = document.createElement('i');

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // return the new element node
        return el;
    }
    
}
  
export { Icon };