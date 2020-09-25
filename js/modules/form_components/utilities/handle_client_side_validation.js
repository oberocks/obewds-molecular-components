import { inject_invalid_box_shadow_css_reset } from './inject_invalid_box_shadow_css_reset.js';
import { swap_classes } from './swap_classes.js';

export function handle_client_side_validation (optsObj, inputEl, labelEl, helpTxtEl, errorTxtEl, successTxtEl)
{
    // handle the required attribute
    if ( optsObj.type === 'checkbox' || optsObj.type === 'date' || optsObj.type === 'datetime-local' || optsObj.type === 'email' || optsObj.type === 'file' || optsObj.type === 'month' || optsObj.type === 'number' || optsObj.type === 'password' || optsObj.type === 'radio' || optsObj.type === 'search' || optsObj.type === 'tel' || optsObj.type === 'text' || optsObj.type === 'time' || optsObj.type === 'url' || optsObj.type === 'week' ) {
    
        // add validation to the input as specified by the defaults/options
        if ( optsObj.required === true ) {
                    
            // enable the browser's default required user feedback
            inputEl.setAttribute('required', optsObj.required);

        }

        if ( optsObj.enable_custom_validation === true ) {
            
            // enable the browser's default required user feedback
            inputEl.setAttribute('required', optsObj.enable_custom_validation);
            
            // add the custom validation features for this element to the browser's invalid event
            inputEl.addEventListener('invalid', function(e) {
                
                // prevent the browser's default invalid UI from triggering
                e.preventDefault();

                // remove valid classes and add invalid classes to the input and label elements
                swap_classes(
                    labelEl,
                    optsObj.custom_validation.classes.valid_label,
                    optsObj.custom_validation.classes.invalid_label
                );
                swap_classes(
                    this,
                    optsObj.custom_validation.classes.valid_input,
                    optsObj.custom_validation.classes.invalid_input
                );

                // adjust form text for an invalid state
                helpTxtEl.classList.add('d-none');
                errorTxtEl.classList.remove('d-none');
                successTxtEl.classList.add('d-none');

                // add a listener to the input to control change to success state from an invalid state
                this.addEventListener(optsObj.custom_validation.success_listner, function(event) {
                    
                    // if the HTML5 validity valid state is true
                    if ( this.validity.valid === true ) {
                        
                        // remove invalid and add valid classes to the input and label elements
                        swap_classes(
                            labelEl,
                            optsObj.custom_validation.classes.invalid_label,
                            optsObj.custom_validation.classes.valid_label
                        );
                        swap_classes(
                            this,
                            optsObj.custom_validation.classes.invalid_input,
                            optsObj.custom_validation.classes.valid_input
                        );

                        // adjust form text for a valid state
                        helpTxtEl.classList.add('d-none');
                        errorTxtEl.classList.add('d-none');
                        successTxtEl.classList.remove('d-none'); 
                    }

                });

            });

        }

        if ( optsObj.required === true || optsObj.enable_custom_validation === true ) {

            // check if the option to inject custom validation invalid box shadow css reset
            // and inject the css as needed
            if ( optsObj.inject_invalid_box_shadow_css_reset === true ) {
                
                inject_invalid_box_shadow_css_reset();

            }

        }

    }

}