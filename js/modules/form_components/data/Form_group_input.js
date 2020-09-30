// import class dependencies
import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/html_element.js';

// import utility dependencies
import { add_global_form_element_attribute_defaults } from '../utilities/add_global_form_element_attribute_defaults.js';


export class Form_group_input extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // default input attributes
        this.input_base_attributes = {

            class : 'form-control form-control-lg',
            dirname : null, // for types search or text only
            list : null, // for types color, date, datetime-local, email, month, number, range, search, tel, text, time, url, or week only
            maxlength : null, // for types password, search, tel, text or url only
            minlength : null, // for types password, search, tel, text or url only
            multiple : false, // for types email, file or <select> only
            pattern : null, // for types password, tel or text only
            placeholder : 'Default Input Placeholder', // for types password, search, tel, text or url only
            readonly : false, // for <input> types date, datetime-local, email, month, password, search, tel, text, time, url, week, and for <textarea>
            required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            size : null,
            type : 'text',
            value : ''

        };

        // define default class settings/options
        this.class_defaults = {

            // create empty input & input.attributes objects
            input : {
                attributes : {}
            },
            
            // global validation defaults
            enable_custom_validation : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            inject_invalid_box_shadow_css_reset : false,
            custom_validation : {
                success_listner : 'change',
                classes : {
                    invalid_label : 'text-danger',
                    valid_label : 'text-success',
                    invalid_input : 'form-danger border-width-4',
                    valid_input : 'form-success border-width-2'
                }
            },

            // global masking settings defaults
            masking : {
                enable : false,
                type : 'phone',
                min : 0,
                max : 1000,
                seperator : ','
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults, this.class_defaults);

        // add html global attributes to main <input> element
        let global_attrs = new Html_element()._defaults.attributes;
        Object.assign(this._defaults.input.attributes, global_attrs);

        // and add global and base <input> attributes from this class
        add_global_form_element_attribute_defaults(this._defaults.input.attributes);
        Object.assign(this._defaults.input.attributes, this.input_base_attributes);

    }

}