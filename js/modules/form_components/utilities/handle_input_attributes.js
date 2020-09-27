export function handle_input_attributes (optsObj, inputEl) {

    // handle the autocomplete attribute
    if ( optsObj.autocomplete ) { inputEl.setAttribute('autocomplete', optsObj.autocomplete); }

    // handle the autofocus attribute
    if ( optsObj.autofocus === true ) { inputEl.setAttribute('autofocus', optsObj.autofocus); }

    // handle the dirname attribute
    if ( optsObj.type === 'search' || optsObj.type === 'text' ) {
        
        if ( optsObj.dirname ) { inputEl.setAttribute('dirname', optsObj.dirname); }

    }

    // handle the disabled attribute
    if ( optsObj.disabled === true ) { inputEl.setAttribute('disabled', optsObj.disabled); }

    // handle the form attribute
    if ( optsObj.form ) { inputEl.setAttribute('form', optsObj.form); }

    // handle the list attribute
    if ( optsObj.type === 'color' || optsObj.type === 'date' || optsObj.type === 'datetime-local' || optsObj.type === 'email' || optsObj.type === 'month' || optsObj.type === 'number' || optsObj.type === 'range' || optsObj.type === 'search' || optsObj.type === 'tel' || optsObj.type === 'text' || optsObj.type === 'time' || optsObj.type === 'url' || optsObj.type === 'week' ) {

        if ( optsObj.list ) { inputEl.setAttribute('form', optsObj.list); }

    }

    // handle the maxlength, minlength, placeholder attributes
    if ( optsObj.type === 'password' || optsObj.type === 'search' || optsObj.type === 'tel' || optsObj.type === 'text' || optsObj.type === 'url' ) {

        if ( optsObj.maxlength ) { inputEl.setAttribute('maxlength', optsObj.maxlength); }

        if ( optsObj.minlength ) { inputEl.setAttribute('minlength', optsObj.minlength); }

        inputEl.setAttribute('placeholder', optsObj.placeholder);

    }

    // handle the multiple attribute
    if ( optsObj.type === 'email' ) {
        
        if ( optsObj.multiple === true ) { inputEl.setAttribute('multiple', optsObj.multiple); }

    }

    // handle the minlength attribute
    if ( optsObj.minlength ) { inputEl.setAttribute('minlength', optsObj.minlength); }

    // handle the pattern attribute
    if ( optsObj.required === true || optsObj.enable_custom_validation === true ) {
        
        // check if an allowed input type for a pattern attribute is set
        if ( optsObj.type === 'password' || optsObj.type === 'tel' || optsObj.type === 'text' ) {
            
            // if the options pattern setting is set, add the pattern attribute and value
            if ( optsObj.pattern ) {
                
                inputEl.setAttribute('pattern', optsObj.pattern);

            }

        }

    }

    // handle the readonly attribute
    if ( optsObj.type === 'date' || optsObj.type === 'datetime-local' || optsObj.type === 'email' || optsObj.type === 'month' || optsObj.type === 'number' || optsObj.type === 'password' || optsObj.type === 'search' || optsObj.type === 'tel' || optsObj.type === 'text' || optsObj.type === 'time' || optsObj.type === 'url' || optsObj.type === 'week' ) {
        
        if ( optsObj.readonly === true ) { inputEl.setAttribute('readonly', optsObj.readonly); }

    }

    // handle the size attribute
    if ( optsObj.type === 'email' || optsObj.type === 'password' || optsObj.type === 'tel' || optsObj.type === 'text' ) {
        
        if ( optsObj.size ) { inputEl.setAttribute('size', optsObj.size); }

    }

}