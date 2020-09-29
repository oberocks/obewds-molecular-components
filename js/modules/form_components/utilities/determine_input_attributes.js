export function determine_input_attributes (optsObject, inputEl) {

    let attrs = optsObject.input.attributes;

    // handle the autocomplete attribute
    if ( attrs.autocomplete ) { inputEl.setAttribute('autocomplete', attrs.autocomplete); }

    // handle the autofocus attribute
    if ( attrs.autofocus === true ) { inputEl.setAttribute('autofocus', attrs.autofocus); }

    // handle the dirname attribute
    if ( attrs.type === 'search' || attrs.type === 'text' ) {
        
        if ( attrs.dirname ) { inputEl.setAttribute('dirname', attrs.dirname); }

    }

    // handle the disabled attribute
    if ( attrs.disabled === true ) { inputEl.setAttribute('disabled', attrs.disabled); }

    // handle the form attribute
    if ( attrs.form ) { inputEl.setAttribute('form', attrs.form); }

    // handle the list attribute
    if ( attrs.type === 'color' || attrs.type === 'date' || attrs.type === 'datetime-local' || attrs.type === 'email' || attrs.type === 'month' || attrs.type === 'number' || attrs.type === 'range' || attrs.type === 'search' || attrs.type === 'tel' || attrs.type === 'text' || attrs.type === 'time' || attrs.type === 'url' || attrs.type === 'week' ) {

        if ( attrs.list ) { inputEl.setAttribute('form', attrs.list); }

    }

    // handle the maxlength, minlength, placeholder attributes
    if ( attrs.type === 'password' || attrs.type === 'search' || attrs.type === 'tel' || attrs.type === 'text' || attrs.type === 'url' ) {

        if ( attrs.maxlength ) { inputEl.setAttribute('maxlength', attrs.maxlength); }

        if ( attrs.minlength ) { inputEl.setAttribute('minlength', attrs.minlength); }

        inputEl.setAttribute('placeholder', attrs.placeholder);

    }

    // handle the multiple attribute
    if ( attrs.type === 'email' ) {
        
        if ( attrs.multiple === true ) { inputEl.setAttribute('multiple', attrs.multiple); }

    }

    // handle the minlength attribute
    if ( attrs.minlength ) { inputEl.setAttribute('minlength', attrs.minlength); }

    // handle the pattern attribute
    if ( attrs.required === true || attrs.enable_custom_validation === true ) {
        
        // check if an allowed input type for a pattern attribute is set
        if ( attrs.type === 'password' || attrs.type === 'tel' || attrs.type === 'text' ) {
            
            // if the options pattern setting is set, add the pattern attribute and value
            if ( attrs.pattern ) {
                
                inputEl.setAttribute('pattern', attrs.pattern);

            }

        }

    }

    // handle the readonly attribute
    if ( attrs.readonly === true ) {

        if ( attrs.type === 'date' || attrs.type === 'datetime-local' || attrs.type === 'email' || attrs.type === 'month' || attrs.type === 'number' || attrs.type === 'password' || attrs.type === 'search' || attrs.type === 'tel' || attrs.type === 'text' || attrs.type === 'time' || attrs.type === 'url' || attrs.type === 'week' ) {
            
            inputEl.setAttribute('readonly', attrs.readonly);

        }

    } else {

        inputEl.removeAttribute('readonly');
        
    }

    // handle the size attribute
    if ( attrs.type === 'email' || attrs.type === 'password' || attrs.type === 'tel' || attrs.type === 'text' ) {
        
        if ( attrs.size ) { inputEl.setAttribute('size', attrs.size); }

    }

}