import { swap_classes } from './swap_classes.js';


export function determine_dropdown_select_validation (optsObj, inputEl, ddSelectBtnGrp, labelEl, helpTxtEl, errorTxtEl, successTxtEl) {   

    if ( optsObj.enable_custom_validation === true ) {
        
        // enable the browser's default required user feedback
        inputEl.setAttribute('data-required', optsObj.enable_custom_validation);

        // 
        if (inputEl.value) { 
            
            inputEl.setAttribute('data-is-valid', 'true');

        } else {

            inputEl.setAttribute('data-is-valid', 'false');

        }
        
        // add the custom validation features for this element to the browser's invalid event
        inputEl.addEventListener('invalid', function(e) {

            if (!this.value) {
                
                // remove valid classes and add invalid classes to the input and label elements
                swap_classes(
                    labelEl,
                    optsObj.custom_validation.classes.valid_label,
                    optsObj.custom_validation.classes.invalid_label
                );
                swap_classes(
                    ddSelectBtnGrp,
                    optsObj.custom_validation.classes.valid_element,
                    optsObj.custom_validation.classes.invalid_element
                );

                // adjust form text for an invalid state
                helpTxtEl.classList.add('d-none');
                errorTxtEl.classList.remove('d-none');
                successTxtEl.classList.add('d-none');

            }

        });

        // add the custom validation features for this element to the browser's invalid event
        inputEl.addEventListener('change', function(e) {
            
            // 
            let status_is_valid = this.dataset.isValid;
            let validation_status = this.dataset.validationStatus; // needs value of 'engaged' to trigger validation UI changes

            if (this.hasAttribute('data-is-valid') && status_is_valid && validation_status === 'engaged') {

                // remove invalid and add valid classes to the input and label elements
                swap_classes(
                    labelEl,
                    optsObj.custom_validation.classes.invalid_label,
                    optsObj.custom_validation.classes.valid_label
                );
                swap_classes(
                    ddSelectBtnGrp,
                    optsObj.custom_validation.classes.invalid_element,
                    optsObj.custom_validation.classes.valid_element
                );

                // adjust form text for a valid state
                helpTxtEl.classList.add('d-none');
                errorTxtEl.classList.add('d-none');
                successTxtEl.classList.remove('d-none'); 

            }

        });

    }

}