import { Form_group_textarea } from './data/Form_group_textarea.js';

import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { handle_textarea_attributes } from './utilities/handle_textarea_attributes.js';
import { handle_textarea_validation } from './utilities/handle_textarea_validation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Textarea_form_group extends Form_group_textarea {
    
    constructor (opts = false) {

        // get props from inhereted class
        super();

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Textarea Label',

            // default input settings
            id : 'default-textarea-id',
            name : 'default-textarea-name',

            // default component specific settings
            clear_text_button_styles : 'top:-82px; -webkit-appearance:none;',

            // default component help modal settings
            form_modal_text : {
                heading : 'Textarea Inputs',
                body : [{
                    type : 'paragraphs',
                    content : [ 'Textarea Inputs are very useful and convenient options to help users enter data. Textareas differ from traditional inputs by allowing desktop browser users to re-size the input, and allowing both desktop and mobile browsers to scroll vertically whenever longer content is entered.' ]
                }]
            },

            // default component form text settings
            form_text : {
                help : ['Default Textarea help text'],
                error : ['Default Textarea error text'],
                success : ['Default Textarea success text']
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults, this.class_defaults);

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
        apply_attributes(textarea, opts.textarea.attributes);
        apply_attributes(textarea, opts.textarea.arias);
        textarea.setAttribute('id', opts.id);
        textarea.setAttribute('name', opts.name);
        textarea.setAttribute('rows', opts.rows);
        textarea.value = opts.value; // CANNOT BE: textarea.setAttribute('value', opts.value);
        textarea.setAttribute('aria-describedby', opts.id + opts.aria_describedby_suffix);

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

        //
        // HANDLE COMPONENT ATTRIBUTES
        //

        handle_textarea_attributes(opts, textarea);

        //
        // HANDLE COMPONENT LISTENERS
        //

        // add listner for the help modal generation functionality
        label_button.addEventListener('click', function(e) {
            
            let modalCheck = document.getElementById(opts.id + '-modal');
            
            if (!modalCheck) {
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

        //
        // HANDLE COMPONENT VALIDATION
        //

        handle_textarea_validation(opts, textarea, label_el, form_help_text, form_error_text, form_success_text);

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

        //
        // RETURN COMPONENT NODES
        //

        return form_group;

    }

}