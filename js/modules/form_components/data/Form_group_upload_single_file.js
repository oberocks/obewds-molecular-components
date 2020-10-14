// import class dependencies
import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/Html_element.js';

// import utility dependencies
import { add_global_form_element_attribute_defaults } from '../utilities/add_global_form_element_attribute_defaults.js';


export class Form_group_upload_single_file extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // default input attributes
        this.input_base_attributes = {

            class : 'form-control-file',
            accept : null,
            capture : null,
            files : null,
            multiple : null,
            required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            type : 'file',
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
                    invalid_parent : 'bg-danger text-white',
                    valid_parent : 'bg-success text-white'
                }
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