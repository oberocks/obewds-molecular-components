export function handle_select_attributes (optsObj, inputEl) {

    // handle the autocomplete attribute
    if ( optsObj.autocomplete ) { inputEl.setAttribute('autocomplete', optsObj.autocomplete); }

    // handle the autofocus attribute
    if ( optsObj.autofocus === true ) { inputEl.setAttribute('autofocus', optsObj.autofocus); }

    // handle the disabled attribute
    if ( optsObj.disabled === true ) { inputEl.setAttribute('disabled', optsObj.disabled); }

    // handle the form attribute
    if ( optsObj.form ) { inputEl.setAttribute('form', optsObj.form); }

    // handle the mutiple attribute
    if ( optsObj.mutiple === true ) { inputEl.setAttribute('mutiple', optsObj.mutiple); }

    // handle the size attribute
    if ( optsObj.size ) { inputEl.setAttribute('size', optsObj.size); }

}