import { Form_group } from './Form_group.js';
import { Html_element } from '../../html_elements/data/html_element.js';
import { settings_merge } from '../../helpers/settings_merge.js';

export class Form_group_submit extends Form_group {

    constructor () {

        // get props from inhereted class
        super();

        // define default class settings/options
        this.class_defaults = {
            
            form_group : {
                attributes : {
                    class : 'form-group pt-3'
                }
            },
            input : {
                attributes : {
                    class : 'btn btn-lg btn-primary box-shadow-xs',
                    type : 'submit',
                    value : 'SUBMIT',
                    formaction : null,
                    formenctype : null,
                    formmethod : null,
                    formnovalidate : null,
                    formtarget : null
                }
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults, this.class_defaults);

        // add html global attributes to main <input> element
        let global_attrs = new Html_element()._defaults.attributes;
        Object.assign(this._defaults.input.attributes, global_attrs);
        //this._defaults.input.attributes = global_attrs;

    }

}