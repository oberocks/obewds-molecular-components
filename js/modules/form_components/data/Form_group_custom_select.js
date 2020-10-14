// import class dependencies
import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/Html_element.js';

// import utility dependencies
import { add_global_form_element_attribute_defaults } from '../utilities/add_global_form_element_attribute_defaults.js';


export class Form_group_custom_select extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // default select attributes
        this.select_base_attributes = {

            class : 'custom-select custom-select-lg',
            multiple : null,
            required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            size : null

        };

        // define default class settings/options
        this.class_defaults = {

            // global validation defaults
            enable_custom_validation : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            inject_invalid_box_shadow_css_reset : false,
            custom_validation : {
                success_listner : 'change',
                classes : {
                    invalid_label : 'text-danger',
                    valid_label : 'text-success',
                    invalid_element : 'form-danger border-red-300 border-width-4',
                    valid_element : 'form-success border-success border-width-2'
                }
            },

            // create empty select & select.attributes objects
            select : {
                attributes : {}
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults, this.class_defaults);

        // add html global attributes to main <select> element
        let global_attrs = new Html_element()._defaults.attributes;
        Object.assign(this._defaults.select.attributes, global_attrs);

        // and add global and base <select> attributes from this class
        add_global_form_element_attribute_defaults(this._defaults.select.attributes);
        Object.assign(this._defaults.select.attributes, this.select_base_attributes);

    }

}