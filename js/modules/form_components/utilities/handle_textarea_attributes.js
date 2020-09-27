export function handle_textarea_attributes (optsObj, inputEl) {

    // handle the autocomplete attribute
    if ( optsObj.autocomplete ) { inputEl.setAttribute('autocomplete', optsObj.autocomplete); }

    // handle the autofocus attribute
    if ( optsObj.autofocus === true ) { inputEl.setAttribute('autofocus', optsObj.autofocus); }

    // handle the cols attribute
    if ( optsObj.cols ) { inputEl.setAttribute('cols', optsObj.cols); }

    // handle the disabled attribute
    if ( optsObj.disabled === true ) { inputEl.setAttribute('disabled', optsObj.disabled); }

    // handle the form attribute
    if ( optsObj.form ) { inputEl.setAttribute('form', optsObj.form); }

    // handle the maxlength and minlength attributes
    if ( optsObj.maxlength ) { inputEl.setAttribute('maxlength', optsObj.maxlength); }
    if ( optsObj.minlength ) { inputEl.setAttribute('minlength', optsObj.minlength); }

    // handle the readonly attribute
    if ( optsObj.readonly === true ) { inputEl.setAttribute('readonly', optsObj.readonly); }

    // handle the spellcheck attribute
    if ( optsObj.spellcheck ) { inputEl.setAttribute('spellcheck', optsObj.spellcheck); }

    // handle the wrap attribute
    if ( optsObj.wrap ) { inputEl.setAttribute('wrap', optsObj.wrap); }

}