import { applyAttributes, insertText } from '../html_elements/utilities/dom_generation.js';

class Headline_group
{
    constructor (opts = false)
    {
        /** 
         * Submit Button Form Group : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            parent: {
                attributes: {
                    class: 'border-left border-width-5 border-primary pl-3 py-3 mb-2'
                }
            },
            headlines: {
                top: {
                    tag: 'h1',
                    attributes: {
                        class: 'mb-1'
                    },
                    text: 'Headline Group Top Default'
                },
                bottom: {
                    tag: 'h4',
                    attributes: {
                        class: 'mb-0'
                    },
                    text: 'Default Bottom Headline'
                }
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

        // create the headline group element
        let grp = document.createElement('hgroup');

        // check if there are attributes for the headline group element - then set them
        applyAttributes(grp, opts.parent.attributes);

        // create the top headline element
        let top = document.createElement(opts.headlines.top.tag);

        // check if there are attributes for the top headline element - then set them
        applyAttributes(top, opts.headlines.top.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(top, opts.headlines.top.text);

        // create the top headline element
        let bottom = document.createElement(opts.headlines.bottom.tag);

        // check if there are attributes for the top headline element - then set them
        applyAttributes(bottom, opts.headlines.bottom.attributes);

        // check if text is a string and if so then add it as a text node
        insertText(bottom, opts.headlines.bottom.text);

        // append all element together accordingly
        grp.appendChild(top);
        grp.appendChild(bottom);

        // return the new element node
        return grp;
    }
    
}
  
export { Headline_group };