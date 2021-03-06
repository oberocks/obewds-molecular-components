// import class dependencies
import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/Html_element.js';

// import utility dependencies
import { add_global_form_element_attribute_defaults } from '../utilities/add_global_form_element_attribute_defaults.js';


export class Form_group_submit extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // default input attributes
        this.input_base_attributes = {

            class : 'btn btn-lg btn-primary box-shadow-xs',
            formaction : null,
            formenctype : null,
            formmethod : null,
            formnovalidate : null,
            formtarget : null,
            type : 'submit',
            value : 'SUBMIT'

        };

        // define default class settings/options
        this.class_defaults = {
            
            // create form_group objects
            form_group : {
                attributes : {
                    class : 'form-group pt-3'
                }
            },
            
            // create empty input & input.attributes objects
            input : {
                attributes : {}
            },

            // create default scrollTop (jQuery) settings
            enable_scroll_into_view : false,
            scroll_top_negative_offset : 100,
            scroll_top_duration : 300,

            // create default custom components (using hidden inputs) validation settings
            enable_form_dropdown_select_validation : false

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