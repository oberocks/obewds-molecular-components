export function handle_textarea_attributes (obj, el) {

    // handle the autocomplete attribute
    if ( obj.autocomplete ) { el.setAttribute('autocomplete', obj.autocomplete); }

    // handle the autofocus attribute
    if ( obj.autofocus === true ) { el.setAttribute('autofocus', obj.autofocus); }

    // handle the cols attribute
    if ( obj.cols ) { el.setAttribute('cols', obj.cols); }

    // handle the disabled attribute
    if ( obj.disabled === true ) { el.setAttribute('disabled', obj.disabled); }

    // handle the form attribute
    if ( obj.form ) { el.setAttribute('form', obj.form); }

    // handle the maxlength and minlength attributes
    if ( obj.maxlength ) { el.setAttribute('maxlength', obj.maxlength); }
    if ( obj.minlength ) { el.setAttribute('minlength', obj.minlength); }

    // handle the readonly attribute
    if ( obj.readonly === true ) { el.setAttribute('readonly', obj.readonly); }

    // handle the spellcheck attribute
    if ( obj.spellcheck ) { el.setAttribute('spellcheck', obj.spellcheck); }

    // handle the wrap attribute
    if ( obj.wrap ) { el.setAttribute('wrap', obj.wrap); }

}