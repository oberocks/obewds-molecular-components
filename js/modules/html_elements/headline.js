import { merge_objects } from '../helpers/merge_objects.js';
import { applyAttributes, insertText } from './utilities/dom_generation.js';

class Headline
{
    constructor (opts = false)
    {
        /** 
         * Headline Element : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            tag: 'h1',
            attributes: {},
            text: 'Default Headline Text' 
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
        let el = document.createElement(opts.tag);

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, opts.text);

        // return the new element node
        return el;
    }

    h1 (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h1');

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, opts.text);

        // return the new element node
        return el;
    }

    h2 (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h2');

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, opts.text);

        // return the new element node
        return el;
    }

    h3 (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h3');

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, opts.text);

        // return the new element node
        return el;
    }

    h4 (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h4');

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, opts.text);

        // return the new element node
        return el;
    }

    h5 (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h5');

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, opts.text);

        // return the new element node
        return el;
    }

    h6 (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the element
        let el = document.createElement('h6');

        // check if there are attributes then set them
        applyAttributes(el, opts.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, opts.text);

        // return the new element node
        return el;
    }
    
}
  
export { Headline };