import { merge_objects } from '../helpers/merge_objects.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';

class Video_component
{
    constructor (opts = false)
    {
        /** 
         * Video Component : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            parent: {
                attributes: {
                    class: 'embed-responsive embed-responsive-16by9 box-shadow-xs mb-2'
                }
            },
            iframe: {
                attributes: {
                    class: 'embed-responsive-item border-0',
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube.com/embed/jr5yHAZDbm0',
                    allowfullscreen: ''
                }
            }
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? merge_objects(true, this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
    }

    get_class_defaults () {
        return this.defaults;
    }

    get_generate_options (options) {
        return merge_objects(true, this.defaults, options);
    }

    generate (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;

        // create the parent element
        let parent = document.createElement('div');
        apply_attributes(parent, opts.parent.attributes);

        // create the iframe element
        let iframe = document.createElement('iframe');
        apply_attributes(iframe, opts.iframe.attributes);

        // append elements
        parent.appendChild(iframe);

        // return the new elements
        return parent;
    }
    
}
  
export { Video_component };