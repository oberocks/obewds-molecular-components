import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/html_element.js';

export class Form_group_input extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // define default class CSS class settings/options
        this.class_classes_defaults = {
            inputs : 'form-control form-control-lg'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default input attributes
            dirname : null, // for types search or text only
            list : null, // for types color, date, datetime-local, email, month, number, range, search, tel, text, time, url, or week only
            maxlength : null, // for types password, search, tel, text or url only
            minlength : null, // for types password, search, tel, text or url only
            multiple : false, // for types email, file or <select> only
            pattern : null, // for types password, tel or text only
            placeholder : 'Default Placeholder', // for types password, search, tel, text or url only
            readonly : false, // for <input> types date, datetime-local, email, month, password, search, tel, text, time, url, week, and for <textarea>
            size : null,
            type : 'text',

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
        Object.assign(this._defaults.classes, this.class_classes_defaults);
        Object.assign(this._defaults, this.class_defaults);

        // add html global attributes to main <input> element
        let global_attrs = new Html_element()._defaults.attributes;
        this._defaults.input = { attributes : global_attrs };

        // add html global aria attributes to main <input> element
        let global_aria = new Html_element()._defaults.arias;
        this._defaults.input.arias = global_aria;

    }

}