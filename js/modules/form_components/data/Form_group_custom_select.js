// import class dependencies
import { Form_group } from './Form_group.js';


export class Form_group_custom_select extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // define default class CSS class settings/options
        this.class_classes_defaults = {
            selects : 'custom-select'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default textarea attributes
            multiple : null,
            size : null,

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
        Object.assign(this._defaults.classes, this.class_classes_defaults);
        Object.assign(this._defaults, this.class_defaults);

        // add html global attributes to main <input> element
        let global_attrs = new Html_element()._defaults.attributes;
        this._defaults.select = { attributes : global_attrs };

    }

}