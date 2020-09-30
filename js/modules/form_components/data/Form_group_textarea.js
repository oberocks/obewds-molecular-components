// import class dependencies
import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/html_element.js';

// import utility dependencies
import { add_global_form_element_attribute_defaults } from '../utilities/add_global_form_element_attribute_defaults.js';


export class Form_group_textarea extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // default textarea attributes
        this.textarea_base_attributes = {
            class : 'form-control',
            rows : '4',
            cols : null,
            maxlength : null,
            minlength : null,
            placeholder : 'Default Textarea Placeholder',
            required : false, // for text, search, url, tel, email, password, date, month, week, time, datetime-local, number, checkbox, radio, file, <input> types along with the <select> and <textarea>
            spellcheck : null,
            wrap : null,
            value : ''
        };

        // define default class settings/options
        this.class_defaults = {

            // create empty textarea & textarea.attributes objects
            textarea : {
                attributes : {}
            },
            
            // default component specific settings
            clear_text_button_styles : 'top:-82px; -webkit-appearance:none;',

            // global validation defaults
            required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            enable_custom_validation : false,
            inject_invalid_box_shadow_css_reset : false,
            custom_validation : {
                success_listner : 'change',
                classes : {
                    invalid_label : 'text-danger',
                    valid_label : 'text-success',
                    invalid_input : 'form-danger border-width-4',
                    valid_input : 'form-success border-width-2'
                }
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults, this.class_defaults);

        // add html global attributes to main <textarea> element
        let global_attrs = new Html_element()._defaults.attributes;
        Object.assign(this._defaults.textarea.attributes, global_attrs);

        // and add global and base <textarea> attributes from this class
        add_global_form_element_attribute_defaults(this._defaults.textarea.attributes);
        Object.assign(this._defaults.textarea.attributes, this.textarea_base_attributes);

    }

}