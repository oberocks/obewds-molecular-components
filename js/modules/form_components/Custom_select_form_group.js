// import class dependencies
import { Form_group_custom_select } from './data/Form_group_custom_select.js';

// import utility dependencies
import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { determine_select_validation } from './utilities/determine_select_validation.js';
import { handle_select_attributes } from './utilities/handle_select_attributes.js';
import { settings_merge } from '../helpers/settings_merge.js';



export class Custom_select_form_group extends Form_group_custom_select {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // default input settings
        this.new_select_attributes = {
            id : 'default-custom-select-id',
            name : 'default-custom-select-name'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Custom Select',

            // default component help modal settings
            form_modal_text : {
                heading: 'Custom Selects',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Custom Select elements allow a user to select a single option from a list of options.', 'Custom Selects are specifically styled elements in Bootstrap 4, which is one of our core dependencies.' ]
                }]
            },

            // default component form text settings
            form_text : {
                help    : ['Custom Select help text'],
                error   : ['Custom Select error text'],
                success : ['Custom Select success text']
            },

            // default component select options settings
            options : [
                {
                    text : 'Select an Option',
                    attributes : {
                        value : ''
                    }
                },
                {
                    text : 'Option One',
                    attributes : {
                        value : 'one'
                    }
                }
            ]

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.select.attributes, this.new_select_attributes);
        Object.assign(this._defaults, this.class_defaults);

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;

    }

    get_class_defaults () {

        return this.defaults;

    }

    get_merged_options (options) {

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
        label_el.setAttribute('for', opts.select.attributes.id);
        insert_text(label_el, opts.label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.select.attributes.id + '-modal');

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // append all the elements created up to now
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);

         // create the select element
         let select = document.createElement('select');
         handle_select_attributes(opts.select.attributes, select);
         apply_attributes(select, opts.select.attributes);
         //select.className = opts.classes.selects;
         //select.setAttribute('id', opts.select.attributes.id);
         //select.setAttribute('name', opts.name);
         select.setAttribute('aria-describedby', opts.select.attributes.id + opts.aria_describedby_suffix);
         //if ( opts.required ) { select.setAttribute('required', opts.required); }
         
         form_group.appendChild(select);

        // loop through the options array
        for (var i = 0; i < opts.options.length; i++) {

            // create the parent element for the checkbox
            let option = document.createElement('option');
            
            // apply the passed attributes from the passed options
            apply_attributes(option, opts.options[i].attributes);
            
            // add text to element
            insert_text(option, opts.options[i].text);

            // append all option elements to the select element
            select.appendChild(option);

        }

        // create the parent form text wrapper element
        let form_text_parent = document.createElement('div');
        form_text_parent.className = opts.classes.form_text_parents;

        // create the form help text elements
        let form_help_text = document.createElement('small');
        form_help_text.className = opts.classes.form_help_texts;
        form_help_text.setAttribute('id', opts.select.attributes.id + opts.aria_describedby_suffix);
        insert_text(form_help_text, opts.form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = opts.classes.form_error_texts;
        form_error_text.setAttribute('id', opts.select.attributes.id + opts.error_text_suffix);
        insert_text(form_error_text, opts.form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = opts.classes.form_success_texts;
        form_success_text.setAttribute('id', opts.select.attributes.id + opts.success_text_suffix);
        insert_text(form_success_text, opts.form_text.success);

        //
        // HANDLE COMPONENT LISTENERS
        //

        label_button.addEventListener('click', function(e) {
            
            let modalCheck = document.getElementById(opts.select.attributes.id + '-modal');
            
            if (!modalCheck) {
                
                let modal_options = {
                    
                    id: opts.select.attributes.id,

                    form_modal_text: opts.form_modal_text,

                    modal_classes:               opts.classes.form_modals,
                    dialog_classes:              opts.classes.form_modal_dialogs,
                    content_classes:             opts.classes.form_modal_contents,
                    header_classes:              opts.classes.form_modal_headers,
                    headline_classes:            opts.classes.form_modal_headlines,
                    body_classes:                opts.classes.form_modal_bodys,
                    footer_classes:              opts.classes.form_modal_footers,
                    button_classes:              opts.classes.form_modal_buttons,
                    form_modal_text_p_classes:   opts.classes.form_modal_text_ps,
                    form_modal_text_ul_classes:  opts.classes.form_modal_text_uls,
                    form_modal_text_li_classes:  opts.classes.form_modal_text_lis,
                    form_modal_text_img_classes: opts.classes.form_modal_text_imgs,

                    help_modal_body_styles: opts.help_modal_body_styles,

                    button_text: opts.form_modal_button_text,

                    form_modal_suffix:          opts.form_modal_suffix,
                    form_modal_headline_suffix: opts.form_modal_headline_suffix

                };

                let modal_nodes = generate_form_help_modal(modal_options);
                document.body.appendChild(modal_nodes);
                $(modal_nodes).modal('show');

            }

        });

        //
        // HANDLE COMPONENT VALIDATION
        //

        determine_select_validation(opts, select, label_el, form_help_text, form_error_text, form_success_text);

        //
        // ASSEMBLE COMPONENT ELEMENTS
        //
        
        form_group.appendChild(form_text_parent);
        form_text_parent.appendChild(form_help_text);
        form_text_parent.appendChild(form_error_text);
        form_text_parent.appendChild(form_success_text);

        //
        // RETURN COMPONENT NODES
        //

        return form_group;

    }

}