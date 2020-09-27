import { form_group_defaults as defaults } from './data/form_group_defaults.js';

import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { inject_invalid_box_shadow_css_reset } from './utilities/inject_invalid_box_shadow_css_reset.js';
import { insert_text } from '../html_elements/utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';
import { swap_classes } from './utilities/swap_classes.js';
import { update_character_count } from './utilities/update_character_count.js';

class Textarea_character_counter_form_group {

    constructor (opts = false) {

        // define default class settings/options
        this._defaults = {
            // default component css classes strings
            classes : {
                form_groups : defaults.classes.form_groups,
                label_wrappers : defaults.classes.label_wrappers,
                labels : defaults.classes.labels,
                label_buttons : defaults.classes.label_buttons,
                label_button_icons : defaults.classes.label_button_icons,
                textareas : defaults.classes.textareas,
                clear_text_parents : defaults.classes.clear_text_parents,
                clear_text_buttons : defaults.classes.clear_text_buttons,
                form_text_wrappers : defaults.classes.form_text_wrappers,
                form_text_parents : defaults.classes.form_text_parents,
                form_help_texts : defaults.classes.form_help_texts,
                form_error_texts : defaults.classes.form_error_texts,
                form_success_texts : defaults.classes.form_success_texts,
                character_counter_parents : defaults.classes.character_counter_parents
            },
            // default component clear text button settings
            clear_text_button_styles : 'top:-82px; -webkit-appearance:none;',
            clear_text_button_text : defaults.clear_text_button_text,
            // default component help modal settings
            form_modal_text : {
                heading : 'Textarea Inputs',
                body : [{
                    type : 'paragraphs',
                    content : [ 'Textarea Inputs are very useful and convenient options to help users enter data. Textareas differ from traditional inputs by allowing desktop browser users to re-size the input, and allowing both desktop and mobile browsers to scroll vertically whenever longer content is entered.' ]
                }]
            },
            // default component form text settings
            aria_describedby_suffix : defaults.aria_describedby_suffix,
            error_text_suffix : defaults.error_text_suffix,
            success_text_suffix : defaults.success_text_suffix,
            form_text : {
                help : ['Default Textarea help text'],
                error : ['Default Textarea error text'],
                success : ['Default Textarea success text']
            },
            // default component label text
            label : 'Character Counter Textarea',
            // default textarea settings
            autocomplete : null,
            autofocus : false,
            cols : null,
            disabled : false,
            form : null,
            id : 'char-textarea-id',
            maxlength : null,
            minlength : null,
            name : 'char-textarea-name',
            placeholder : 'Default Placeholder',
            readonly : false,
            rows : defaults.rows,
            spellcheck : null,
            wrap : null,
            value : '',
            // default validation settings
            required : false,
            enable_custom_validation : false,
            inject_invalid_box_shadow_css_reset : false,
            custom_validation : {
                success_listner : defaults.custom_validation_success_listner,
                classes : {
                    invalid_label : defaults.classes.invalid_label,
                    valid_label : defaults.classes.valid_label,
                    invalid_input : defaults.classes.invalid_input,
                    valid_input : defaults.classes.valid_input
                }
            },
            // default character counter settings
            characters_count_suffix : defaults.characters_count_suffix,
            max_characters : '1200'
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

        // create the button element for the textarea help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.id + '-modal');

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // create the textarea element
        let textarea = document.createElement('textarea');
        textarea.className = opts.classes.textareas;
        textarea.setAttribute('id', opts.id);
        textarea.setAttribute('name', opts.name);
        textarea.setAttribute('rows', opts.rows);
        textarea.value = opts.value; // CANNOT BE: textarea.setAttribute('value', opts.value);
        textarea.setAttribute('aria-describedby', opts.id + opts.aria_describedby_suffix);
        textarea.setAttribute('data-max-characters', opts.max_characters);

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

        // create the parent character counter wrapper element
        let character_counter_parent = document.createElement('div');
        character_counter_parent.className = opts.classes.character_counter_parents;

        // create the character counter elements
        let char_counter = document.createElement('span');
        char_counter.setAttribute('id', opts.id + opts.characters_count_suffix);
        let char_counter_text = document.createTextNode(Number(opts.value.length).toLocaleString());
        let char_counter_limit = document.createTextNode('/' + Number(opts.max_characters).toLocaleString());

        //
        // HANDLE COMPONENT ATTRIBUTES
        //

        // handle the autocomplete attribute
        if ( opts.autocomplete ) { textarea.setAttribute('autocomplete', opts.autocomplete); }

        // handle the autofocus attribute
        if ( opts.autofocus === true ) { textarea.setAttribute('autofocus', opts.autofocus); }

        // handle the cols attribute
        if ( opts.cols ) { textarea.setAttribute('cols', opts.cols); }

        // handle the disabled attribute
        if ( opts.disabled === true ) { textarea.setAttribute('disabled', opts.disabled); }

        // handle the form attribute
        if ( opts.form ) { textarea.setAttribute('form', opts.form); }

        // handle the maxlength and minlength attributes
        if ( opts.maxlength ) { textarea.setAttribute('maxlength', opts.maxlength); }
        if ( opts.minlength ) { textarea.setAttribute('minlength', opts.minlength); }

        // handle the readonly attribute
        if ( opts.readonly === true ) { textarea.setAttribute('readonly', opts.readonly); }

        // handle the spellcheck attribute
        if ( opts.spellcheck ) { textarea.setAttribute('spellcheck', opts.spellcheck); }

        // handle the wrap attribute
        if ( opts.wrap ) { textarea.setAttribute('wrap', opts.wrap); }

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

        // dupe the class to a variable to access class data (while inside a listner)
        let thisClass = this;

        // add listner for the clear text button functionality
        clear_text_button.addEventListener('click', function(e) {

            clear_user_value(opts.id, thisClass.defaults.characters_count_suffix);

        });

        // add listner for the character counter functionality
        textarea.addEventListener('keyup', function(e) {

            update_character_count(this.id, this.id + thisClass.defaults.characters_count_suffix, Number(this.getAttribute('data-max-characters')));

        });

        //
        // HANDLE COMPONENT VALIDATION
        //

        // add validation to the input as specified by the defaults/options
        if ( opts.required === true ) {
            
            // enable the browser's default required user feedback
            textarea.setAttribute('required', opts.required);

        }
        
        if ( opts.enable_custom_validation === true ) {
            
            // enable the browser's default required user feedback
            textarea.setAttribute('required', opts.enable_custom_validation);

            // check if the option to inject custom validation invalid box shadow css reset
            // and inject the css as needed
            if ( opts.inject_invalid_box_shadow_css_reset === true ) {
                
                inject_invalid_box_shadow_css_reset();

            }
            
            // add the custom validation features for this element to the browser's invalid event
            textarea.addEventListener('invalid', function(e) {
                
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
        
        // append all the elements for this textarea, nested as needed
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);
        form_group.appendChild(textarea);

        form_group.appendChild(clear_text_parent);
        clear_text_parent.appendChild(clear_text_button);
        
        form_group.appendChild(form_text_wrapper);
        form_text_wrapper.appendChild(form_text_parent);
        form_text_parent.appendChild(form_help_text);
        form_text_parent.appendChild(form_error_text);
        form_text_parent.appendChild(form_success_text);
        form_text_wrapper.appendChild(character_counter_parent);
        character_counter_parent.appendChild(char_counter);
        char_counter.appendChild(char_counter_text);
        character_counter_parent.appendChild(char_counter_limit);

        //
        // RETURN COMPONENT NODES
        //

        return form_group;

    }

}

export { Textarea_character_counter_form_group };