// import utility dependencies
import { swap_classes } from './swap_classes.js';


export function determine_radio_validation (optsObj, inputAttrsObj, inputEl, labelEl, inputLabel, helpTxtEl, errorTxtEl, successTxtEl) {
    
    let attrs = inputAttrsObj;
    
    // handle the required attribute
    if ( attrs.type === 'checkbox' || attrs.type === 'date' || attrs.type === 'datetime-local' || attrs.type === 'email' || attrs.type === 'file' || attrs.type === 'month' || attrs.type === 'number' || attrs.type === 'password' || attrs.type === 'radio' || attrs.type === 'search' || attrs.type === 'tel' || attrs.type === 'text' || attrs.type === 'time' || attrs.type === 'url' || attrs.type === 'week' ) {
    
        // add validation to the input as specified by the defaults/options
        if ( attrs.required === true ) {
                    
            // enable the browser's default required user feedback
            inputEl.setAttribute('required', attrs.required);

        }

        if ( optsObj.enable_custom_validation === true ) {
            
            // add the custom validation features for this element to the browser's invalid event
            inputEl.addEventListener('invalid', function(e) {
                
                // prevent the browser's default invalid UI from triggering
                e.preventDefault();

                // remove valid classes and add invalid classes to the input and label elements
                swap_classes(
                    inputLabel,
                    optsObj.custom_validation.classes.valid_label,
                    optsObj.custom_validation.classes.invalid_label
                );
                swap_classes(
                    labelEl,
                    optsObj.custom_validation.classes.valid_label,
                    optsObj.custom_validation.classes.invalid_label
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
                            inputLabel,
                            optsObj.custom_validation.classes.invalid_label,
                            optsObj.custom_validation.classes.valid_label
                        );

                        // collect and init data needed to check all checkboxes currently in the component
                        let fg = this.closest('.form-group');
                        let inputs = fg.querySelectorAll('input[type=radio]');
                        let input_count = inputs.length;
                        let required_input_count = 0;
                        let valid_input_count = 0;

                        // loop through each checkbox input
                        for (var x = 0; x < input_count; x++) {

                            if (inputs[x].hasAttribute('required')) { required_input_count++; }

                            if ( inputs[x].validity.valid === true ) { valid_input_count++; }

                        }

                        // if all required checkboxes are valid
                        if (required_input_count === valid_input_count) {

                            // loop through each checkbox input
                            for (var x = 0; x < input_count; x++) {

                                let current_label = inputs[x].parentElement.querySelector('label');
                                swap_classes(
                                    current_label,
                                    optsObj.custom_validation.classes.invalid_label,
                                    optsObj.custom_validation.classes.valid_label
                                );

                            }

                            // update the css label and input classes
                            swap_classes(
                                labelEl,
                                optsObj.custom_validation.classes.invalid_label,
                                optsObj.custom_validation.classes.valid_label
                            );

                            // adjust form text for a valid state
                            helpTxtEl.classList.add('d-none');
                            errorTxtEl.classList.add('d-none');
                            successTxtEl.classList.remove('d-none'); 

                        }
                        
                    }

                });

            });

        }

    }

}