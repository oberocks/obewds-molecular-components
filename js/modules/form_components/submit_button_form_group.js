// import class dependencies
import { Form_group_submit } from './data/Form_group_submit.js';

// import utility dependencies
import { settings_merge } from '../helpers/settings_merge.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';


export class Submit_button_form_group extends Form_group_submit {

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

        // create the form group element
        let btn = document.createElement('input');
        
        // check if there are attributes then set them
        apply_attributes(btn, opts.input.attributes);

        // append elements together
        form_group.appendChild(btn);

        // return the form group element
        return form_group;

    }

}