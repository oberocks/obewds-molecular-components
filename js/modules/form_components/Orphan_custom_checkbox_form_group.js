import { form_group_defaults as defaults } from './data/form_group_defaults.js';


// import class dependencies
import { Form_group_orphan_custom_checkbox } from './data/Form_group_orphan_custom_checkbox.js';

// import utility dependencies
import { settings_merge } from '../helpers/settings_merge.js';
import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';


export class Orphan_custom_checkbox_form_group extends Form_group_orphan_custom_checkbox {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
    }

    get_class_defaults () {

        return this.defaults;

    }

    get_generate_options (options) {

        return settings_merge(this.defaults, options);

    }

    generate (options = false) {

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the form group element
        let form_group = document.createElement('div');
        
        // check if there are attributes then set them
        apply_attributes(form_group, opts.form_group.attributes);

        // create the checkbox element
        let input = document.createElement('input');
        apply_attributes(input, opts.input.attributes);
        input.setAttribute('aria-describedby', opts.input.attributes.id + opts.aria_describedby_suffix);

        // set the checked attribute if needed upon render
        if (opts.input.attributes.checked != null && opts.input.attributes.checked != false)
        {
            input.setAttribute('checked', '');
        }

        // create the label and label text node elements
        let label = document.createElement('label');
        label.className = opts.classes.checkbox_labels;
        label.setAttribute('for', opts.input.attributes.id);
        label.setAttribute('id', opts.input.attributes.id + opts.aria_describedby_suffix);
        insert_text(label, opts.label);

        // append all the elements
        form_group.appendChild(input);
        form_group.appendChild(label);

        // return the form group element
        return form_group;

    }

}