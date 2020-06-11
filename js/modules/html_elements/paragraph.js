import { merge_objects } from '../helpers/merge_objects.js';
import { apply_attributes, insert_text } from './utilities/dom_generation.js';

class Paragraph
{
    constructor (opts = false)
    {
        /** 
         * Paragraph : A helper script to generate a paragraph element
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            attributes: {},
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum vitae risus vitae semper. Donec consectetur felis et mollis tristique. Nunc consequat lacus in urna congue, eu lacinia est placerat.' 
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
        let el = document.createElement('p');

        // check if there are attributes then set them
        apply_attributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(el, opts.text);

        // return the new element node
        return el;
    }
    
}
  
export { Paragraph };