// import class dependencies
import { Form_group_submit } from './data/Form_group_submit.js';

// import utility dependencies
import { settings_merge } from '../helpers/settings_merge.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';


export class Submit_button_form_group extends Form_group_submit {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;

    }

    get_class_defaults () {
        
        return this.defaults;

    }

    get_merged_options (options) {
        
        return settings_merge(this.defaults, options);

    }

    generate (options = false) {

        //
        // MERGE INSTANCE OPTIONS
        //

        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        //
        // GENERATE AND SET COMPONENT NODES
        //
        
        // create the form group element
        let form_group = document.createElement('div');
        apply_attributes(form_group, opts.form_group.attributes);

        // create the form group element
        let btn = document.createElement('input');
        apply_attributes(btn, opts.input.attributes);

        //
        // HANDLE COMPONENT LISTENERS
        //

        if (opts.enable_form_dropdown_select_validation === true) {

            // handle any custom (manual lol) validation 
            // (Generally tied to hidden inputs/values for UI's to manipulate)
            btn.addEventListener('click', function(e) {

                e.preventDefault();
                
                let form = this.closest('form');

                if (form) {
                    
                    // 
                    let hidden_req_ddselect_inputs = form.querySelectorAll('input[type="hidden"][data-required="true"]');
                    
                    // 
                    for (var i = 0; i < hidden_req_ddselect_inputs.length; i++) {
                        
                        // 
                        if (!hidden_req_ddselect_inputs[i].value) {
                            
                            var change_event = new Event('invalid', {
                                bubbles: true,
                                cancelable: true
                            });
    
                            hidden_req_ddselect_inputs[i].dispatchEvent(change_event);
                            hidden_req_ddselect_inputs[i].setAttribute('data-validation-status', 'engaged');

                        }

                    }

                    let invalids = document.querySelectorAll('input[type="hidden"][data-is-valid="false"]');

                    let form_validity_check = form.reportValidity();

                    if (invalids.length <= 0) {

                        if (form_validity_check === true) {
                            
                            form.requestSubmit();

                        } else {

                            form.reportValidity();

                        }

                    }

                }
            
            });

        }

        if (opts.enable_scroll_into_view === true) {

            // add a scroll to the first invalid form element after validation is triggered
            btn.addEventListener('click', function(e) {

                // 
                let invalid_elements = document.querySelectorAll(':invalid');

                // check for an invalid element count of 2 or more (a form element with invalid children is also :invalid)
                if (invalid_elements.length > 1) {

                    // scroll to the element (using jQuery)
                    $('html, body').animate({
                        scrollTop: $(invalid_elements[1]).offset().top - opts.scroll_top_negative_offset
                    }, opts.scroll_top_duration);

                }

            });

        }

        //
        // ASSEMBLE COMPONENT ELEMENTS
        //

        form_group.appendChild(btn);

        //
        // RETURN COMPONENT NODES
        //

        return form_group;

    }

}