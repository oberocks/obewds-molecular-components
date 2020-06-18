import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { merge_objects } from '../helpers/merge_objects.js';

class Custom_checkbox_orphan_component
{
    constructor (opts = false)
    {
        /** 
         * Custom Checkboxes Form Group : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            classes : {
                checkbox_parents : defaults.classes.checkbox_parents + ' mb-4',
                checkboxes : defaults.classes.checkboxes,
                checkbox_labels : defaults.classes.checkbox_labels
            },
            id : 'custom-checkbox-orphan-id',
            name : 'custom-checkbox-orphan-name',
            aria_describedby_suffix : '-label',
            label : 'Custom Orphan Checkbox Default',
            value : 'default'
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

        // create the parent element for the checkbox
        let parent = document.createElement('div');
        parent.className = opts.classes.checkbox_parents;

        // create the checkbox element
        let input = document.createElement('input');
        input.className = opts.classes.checkboxes;
        input.setAttribute('id', opts.id);
        input.setAttribute('name', opts.name);
        input.setAttribute('type', 'checkbox');
        input.setAttribute('value', opts.value);
        input.setAttribute('aria-describedby', opts.id + opts.aria_describedby_suffix);

        // create the label and label text node elements
        let label = document.createElement('label');
        label.className = opts.classes.checkbox_labels;
        label.setAttribute('for', opts.id);
        input.setAttribute('id', opts.id + opts.aria_describedby_suffix);
        let label_txt = document.createTextNode(opts.label);

        // append all the elements
        parent.appendChild(input);
        parent.appendChild(label);
        label.appendChild(label_txt);

        // return the form group element
        return parent;
    }
}

export { Custom_checkbox_orphan_component };