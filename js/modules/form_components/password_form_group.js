import { form_group_defaults as defaults } from './data/form_group_defaults.js';

import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { insert_text } from '../html_elements/utilities/dom_generation.js';
import { password_visibility_toggle } from './utilities/password_visibility_toggle.js';
import { settings_merge } from '../helpers/settings_merge.js';
import { swap_classes } from './utilities/swap_classes.js';

class Password_form_group {
    
    constructor (opts = false) {
        
        // define default class settings/options
        this._defaults = {
            // default component css classes strings
            classes : {
                clear_text_buttons : defaults.classes.clear_text_buttons,
                clear_text_parents : defaults.classes.clear_text_parents,
                form_error_texts : defaults.classes.form_error_texts,
                form_groups : defaults.classes.form_groups,
                form_help_texts : defaults.classes.form_help_texts,
                form_success_texts : defaults.classes.form_success_texts,
                form_text_parents : defaults.classes.form_text_parents,
                form_text_wrappers : defaults.classes.form_text_wrappers,
                inputs : defaults.classes.inputs,
                label_buttons : defaults.classes.label_buttons,
                label_button_icons : defaults.classes.label_button_icons,
                label_wrappers : defaults.classes.label_wrappers,
                labels : defaults.classes.labels,
                visibility_toggle_btn : 'btn btn-sm btn-link text-decoration-none'
            },
            // default component clear text button settings
            clear_text_button_styles : defaults.clear_text_button_styles,
            clear_text_button_text : defaults.clear_text_button_text,
            // default component help modal settings
            form_modal_text : {
                heading : 'Password Inputs',
                body : [{
                    type: 'paragraphs',
                    content: [ 'Password Inputs are very useful and convenient options to help users enter their password data. A new practice with password inputs also allows a user to toggle the visibility of the characters they have input, in order to verify they have typed the value correctly.' ]
                }]
            },
            // default component form text settings
            aria_describedby_suffix : defaults.aria_describedby_suffix,
            error_text_suffix : defaults.error_text_suffix,
            success_text_suffix : defaults.success_text_suffix,
            form_text : {
                help : ['Default Password Input help text'],
                error : ['Default Password Input error text'],
                success : ['Default Password Input success text']
            },
            // default component label text
            label : 'Default Password Label',
            // default input settings
            autocomplete : null,
            autofocus : false,
            dirname : null, // for types search or text only
            disabled : false,
            form : null,
            id : 'default-password-id',
            list : null,
            maxlength : null, // for types password, search, tel, text or url only
            minlength : null, // for types password, search, tel, text or url only
            multiple : false, // for types email only
            name : 'default-password-name',
            pattern : null, // for types password, tel or text only
            placeholder : 'Enter Password', // for types password, search, tel, text or url only
            readonly : false,
            size : null, // for types email, password, tel or text only
            type : 'password',
            value : '',
            // default validation settings
            required : false,
            enable_custom_validation : false,
            custom_validation : {
                success_listner : defaults.custom_validation_success_listner,
                classes : {
                    invalid_label : defaults.classes.invalid_label,
                    valid_label : defaults.classes.valid_label,
                    invalid_input : defaults.classes.invalid_input,
                    valid_input : defaults.classes.valid_input
                }
            },
            // default password toggle settings
            visibility_default_type : 'password',
            visibility_toggled_type : 'text',
            visibility_default_text : 'VIEW',
            visibility_toggled_text : 'HIDE'
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;

    }
    
    get_class_defaults () {
        
        return this.defaults;
    
    }

    get_generate_options (options) {
        
        return settings_merge(this.defaults, options);
    
    }

    generate (options = false) {

        //
        // MERGE INSTANCE OPTIONS
        //
        
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        //
        // GENERATE AND SET COMPONENT NODES
        //
        
        // create the form group element
        let form_group = document.createElement('div');
        form_group.className = opts.classes.form_groups;

        // create the (flexbox) element to wrap the label and help button
        let label_wrapper = document.createElement('div');
        label_wrapper.className = opts.classes.label_wrappers;

        // create the label element
        let label_el = document.createElement('label');
        label_el.className = opts.classes.labels;
        label_el.setAttribute('for', opts.id);
        insert_text(label_el, opts.label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.id + '-modal');

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // create the input element
        let input = document.createElement('input');
        input.className = opts.classes.inputs;
        input.setAttribute('type', opts.type);
        input.setAttribute('id', opts.id);
        input.setAttribute('name', opts.name);
        input.setAttribute('value', opts.value);
        input.setAttribute('aria-describedby', opts.id + opts.aria_describedby_suffix);
        if ( opts.required ) { input.setAttribute('required', opts.required); }

        // create the parent text clear element
        let clear_text_parent = document.createElement('div');
        clear_text_parent.className = opts.classes.clear_text_parents;
        clear_text_parent.style.height = '0px';

        // create the text clear button element
        let clear_text_button = document.createElement('div');
        clear_text_button.className = opts.classes.clear_text_buttons;
        clear_text_button.setAttribute('type', 'button');
        clear_text_button.setAttribute('style', opts.clear_text_button_styles);
        insert_text(clear_text_button, opts.clear_text_button_text);

        // create the parent form text wrapper element
        let form_text_wrapper = document.createElement('div');
        form_text_wrapper.className = opts.classes.form_text_wrappers;

        // create the parent form text wrapper element
        let form_text_parent = document.createElement('div');
        form_text_parent.className = opts.classes.form_text_parents;

        // create the form help text elements
        let form_help_text = document.createElement('small');
        form_help_text.className = opts.classes.form_help_texts;
        form_help_text.setAttribute('id', opts.id + opts.aria_describedby_suffix);
        insert_text(form_help_text, opts.form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = opts.classes.form_error_texts;
        form_error_text.setAttribute('id', opts.id + opts.error_text_suffix);
        insert_text(form_error_text, opts.form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = opts.classes.form_success_texts;
        form_success_text.setAttribute('id', opts.id + opts.success_text_suffix);
        insert_text(form_success_text, opts.form_text.success);

        // create the password visibility toggle element
        let form_value_visibility_btn = document.createElement('button');
        form_value_visibility_btn.className = opts.classes.visibility_toggle_btn;
        form_value_visibility_btn.setAttribute('type', 'button');
        insert_text(form_value_visibility_btn, opts.visibility_default_text);

        //
        // HANDLE COMPONENT ATTRIBUTES
        //

        // handle the autocomplete attribute
        if ( opts.autocomplete ) { input.setAttribute('autocomplete', opts.autocomplete); }

        // handle the autofocus attribute
        if ( opts.autofocus === true ) { input.setAttribute('autofocus', opts.autofocus); }

        // handle the dirname attribute
        if ( opts.type === 'search' || opts.type === 'text' ) {
            
            if ( opts.dirname ) { input.setAttribute('dirname', opts.dirname); }

        }

        // handle the disabled attribute
        if ( opts.disabled === true ) { input.setAttribute('disabled', opts.disabled); }

        // handle the form attribute
        if ( opts.form ) { input.setAttribute('form', opts.form); }

        // handle the list attribute
        if ( opts.list ) { input.setAttribute('form', opts.list); }

        // handle the maxlength, minlength, placeholder attributes
        if ( opts.type === 'password' || opts.type === 'search' || opts.type === 'tel' || opts.type === 'text' || opts.type === 'url' ) {

            if ( opts.maxlength ) { input.setAttribute('maxlength', opts.maxlength); }

            if ( opts.minlength ) { input.setAttribute('minlength', opts.minlength); }
        
            input.setAttribute('placeholder', opts.placeholder);

        }

        // handle the multiple attribute
        if ( opts.type === 'email' ) {
            
            if ( opts.multiple === true ) { input.setAttribute('multiple', opts.multiple); }

        }

        // handle the minlength attribute
        if ( opts.minlength ) { input.setAttribute('minlength', opts.minlength); }

        // handle the pattern attribute
        if ( opts.required === true || opts.enable_custom_validation === true ) {
            
            // check if an allowed input type for a pattern attribute is set
            if ( opts.type === 'password' || opts.type === 'tel' || opts.type === 'text' ) {
                
                // if the options pattern setting is set, add the pattern attribute and value
                if ( opts.pattern ) {
                    
                    input.setAttribute('pattern', opts.pattern);

                }

            }

        }

        // handle the readonly attribute
        if ( opts.readonly === true ) { input.setAttribute('readonly', opts.readonly); }

        // handle the size attribute
        if ( opts.type === 'email' || opts.type === 'password' || opts.type === 'tel' || opts.type === 'text' ) {
            
            if ( opts.size ) { input.setAttribute('size', opts.size); }

        }

        //
        // HANDLE COMPONENT LISTENERS
        //

        // add listner for the help modal generation functionality
        label_button.addEventListener('click', function(e) {
            let modalCheck = document.getElementById(opts.id + '-modal');
            if (!modalCheck)
            {
                let modal_options = {
                    id: opts.id,
                    form_modal_text: opts.form_modal_text
                };
                let modal_nodes = generate_form_help_modal(modal_options);
                document.body.appendChild(modal_nodes);
                $(modal_nodes).modal('show');
            }
        });

        // add listner for the clear text button functionality
        clear_text_button.addEventListener('click', function(e) {

            clear_user_value(opts.id);

        });

        // add listner for the password visibility toggle functionality
        form_value_visibility_btn.addEventListener('click', function(e) {

            password_visibility_toggle(this, opts.id, opts.visibility_default_text, opts.visibility_toggled_text, opts.visibility_default_type, opts.visibility_toggled_type);

        });

        //
        // HANDLE COMPONENT VALIDATION
        //

        // add validation to the input as specified by the defaults/options
        if ( opts.required === true ) {
            
            // enable the browser's default required user feedback
            input.setAttribute('required', opts.required);

        }
        
        if ( opts.enable_custom_validation === true ) {
            
            // enable the browser's default required user feedback
            input.setAttribute('required', opts.enable_custom_validation);
            
            // add the custom validation features for this element to the browser's invalid event
            input.addEventListener('invalid', function(e) {
                
                // prevent the browser's default invalid UI from triggering
                e.preventDefault();

                // remove valid classes and add invalid classes to the input and label elements
                swap_classes(
                    label_el,
                    opts.custom_validation.classes.valid_label,
                    opts.custom_validation.classes.invalid_label
                );
                swap_classes(
                    this,
                    opts.custom_validation.classes.valid_input,
                    opts.custom_validation.classes.invalid_input
                );

                // adjust form text for an invalid state
                form_help_text.classList.add('d-none');
                form_error_text.classList.remove('d-none');
                form_success_text.classList.add('d-none');

                // add a listener to the input to control change to success state from an invalid state
                this.addEventListener(opts.custom_validation.success_listner, function(event) {
                    
                    // if the HTML5 validity valid state is true
                    if ( this.validity.valid === true ) {
                        
                        // remove invalid and add valid classes to the input and label elements
                        swap_classes(
                            label_el,
                            opts.custom_validation.classes.invalid_label,
                            opts.custom_validation.classes.valid_label
                        );
                        swap_classes(
                            this,
                            opts.custom_validation.classes.invalid_input,
                            opts.custom_validation.classes.valid_input
                        );

                        // adjust form text for a valid state
                        form_help_text.classList.add('d-none');
                        form_error_text.classList.add('d-none');
                        form_success_text.classList.remove('d-none'); 
                    }

                });

            });
        
        }

        //
        // ASSEMBLE COMPONENT ELEMENTS
        //
        
        // append all the elements for this input, nested as needed
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);
        form_group.appendChild(input);

        form_group.appendChild(clear_text_parent);
        clear_text_parent.appendChild(clear_text_button);
        
        form_group.appendChild(form_text_wrapper);
        form_text_wrapper.appendChild(form_text_parent);
        form_text_parent.appendChild(form_help_text);
        form_text_parent.appendChild(form_error_text);
        form_text_parent.appendChild(form_success_text);
        form_text_wrapper.appendChild(form_value_visibility_btn);

        //
        // RETURN COMPONENT NODES
        //

        return form_group;

    }

}

export { Password_form_group };