import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { merge_objects } from '../helpers/merge_objects.js';
import { applyAttributes } from '../html_elements/utilities/dom_generation.js';

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

    generate (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;
        console.log('opts:');
        console.log(opts);
        console.log('this.defaults:');
        console.log(this.defaults);
        
        // create the parent form group element
        let parent = document.createElement('div');
        
        // check if there are attributes then set them
        applyAttributes(parent, opts.parent.attributes);

        // create the parent form group element
        let btn = document.createElement('input');
        
        // check if there are attributes then set them
        applyAttributes(btn, opts.input.attributes);

        // append elements together
        parent.appendChild(btn);

        // return the parent element
        return parent;
    }
}

export { Submit_button_form_group };