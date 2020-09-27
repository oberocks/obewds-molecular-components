import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/html_element.js';

export class Form_group_textarea extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // define default class CSS class settings/options
        this.class_classes_defaults = {
            textareas : 'form-control'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default textarea attributes
            rows : '4',
            cols : null,
            maxlength : null,
            minlength : null,
            placeholder : 'Default Textarea Placeholder',
            required : false, // for text, search, url, tel, email, password, date, month, week, time, datetime-local, number, checkbox, radio, file, <input> types along with the <select> and <textarea>
            spellcheck : null,
            wrap : null,

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
        this._defaults.textarea = { attributes : global_attrs };

        // add html global aria attributes to main <input> element
        let global_aria = new Html_element()._defaults.arias;
        this._defaults.textarea.arias = global_aria;

    }

}