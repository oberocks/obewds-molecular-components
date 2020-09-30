// import class dependencies
import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/html_element.js';

// import utility dependencies
import { add_global_form_element_attribute_defaults } from '../utilities/add_global_form_element_attribute_defaults.js';


export class Form_group_orphan_custom_checkbox extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // default input attributes
        this.input_base_attributes = {

            class : 'custom-control-input',
            checked : null,
            id : 'orphan-custom-checkbox-id',
            name : 'orphan-custom-checkbox-name',
            type : 'checkbox',
            required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
            value : ''

        };

        // define default class CSS class settings/options
        this.class_css_classes = {
            checkbox_labels : 'custom-control-label'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Orphan Checkbox Label',
            
            // create form_group objects
            form_group : {
                attributes : {
                    class : 'form-group custom-control custom-checkbox mb-4'
                }
            },
            
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

            // add any additional component attributes
            aria_describedby_suffix : '-label'

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.classes, this.class_css_classes);
        Object.assign(this._defaults, this.class_defaults);
        Object.assign(this._defaults.input.attributes, this.new_input_attributes);

        // add html global attributes to main <input> element
        let global_attrs = new Html_element()._defaults.attributes;
        Object.assign(this._defaults.input.attributes, global_attrs);

        // and add global and base <input> attributes from this class
        add_global_form_element_attribute_defaults(this._defaults.input.attributes);
        Object.assign(this._defaults.input.attributes, this.input_base_attributes);

    }

}