import { merge_objects } from '../helpers/merge_objects.js';
import { apply_attributes, insert_text } from './utilities/dom_generation.js';

class Anchor
{
    constructor (opts = false)
    {
        /** 
         * Anchor : A helper script to generate an anchor link element
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            attributes: {
                href: '#'
            },
            text: 'Default Link'
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
        let el = document.createElement('a');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;
    }
    
}
  
export { Anchor };