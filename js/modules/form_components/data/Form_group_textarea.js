// import class dependencies
import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/Html_element.js';

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

        // define default class CSS class settings/options
        this.class_css_classes = {
            clear_text_parents : 'position-relative text-right',
            clear_text_buttons : 'btn btn-lg position-relative opacity-50 p-2 border-0 bg-transparent'
        };

        // define default class settings/options
        this.class_defaults = {

            // create empty textarea & textarea.attributes objects
            textarea : {
                attributes : {}
            },
            
            // create component clear text button settings defaults
            clear_text_button_styles : 'top:-82px; -webkit-appearance:none;',
            clear_text_button_text : '×',

            // global validation defaults
            required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            enable_custom_validation : false,
            inject_invalid_box_shadow_css_reset : false,
            custom_validation : {
                success_listner : 'change',
                classes : {
                    invalid_label : 'text-danger',
                    valid_label : 'text-success',
                    invalid_element : 'form-danger border-width-4',
                    valid_element : 'form-success border-width-2'
                }
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults, this.class_defaults);
        Object.assign(this._defaults.classes, this.class_css_classes);

        // add html global attributes to main <textarea> element
        let global_attrs = new Html_element()._defaults.attributes;
        Object.assign(this._defaults.textarea.attributes, global_attrs);

        // and add global and base <textarea> attributes from this class
        add_global_form_element_attribute_defaults(this._defaults.textarea.attributes);
        Object.assign(this._defaults.textarea.attributes, this.textarea_base_attributes);

    }

}