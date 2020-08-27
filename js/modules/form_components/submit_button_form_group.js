import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { merge_objects } from '../helpers/merge_objects.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';

class Submit_button_form_group
{
    constructor (opts = false)
    {
        /** 
         * Submit Button Form Group : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            input: {
                attributes: {
                    class: defaults.classes.submit_button,
                    type: 'submit',
                    value: 'SUBMIT'
                }
            },
            parent: {
                attributes: {
                    class: defaults.classes.submit_button_parent
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
        
        // create the parent form group element
        let parent = document.createElement('div');
        
        // check if there are attributes then set them
        apply_attributes(parent, opts.parent.attributes);

        // create the parent form group element
        let btn = document.createElement('input');
        
        // check if there are attributes then set them
        apply_attributes(btn, opts.input.attributes);

        // append elements together
        parent.appendChild(btn);

        // return the parent element
        return parent;
    }
}

export { Submit_button_form_group };