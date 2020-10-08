// import class dependencies
import { Form_group_custom_radios } from './data/Form_group_custom_radios.js';

// import utility dependencies
import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { determine_radio_validation } from './utilities/determine_radio_validation.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { handle_input_attributes } from './utilities/handle_input_attributes.js';
import { settings_merge } from '../helpers/settings_merge.js';


export class Custom_radios_form_group extends Form_group_custom_radios {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // default input settings
        this.new_radios = [
            {
                label : 'Default Custom Radio 1',
                attributes : {
                    id : 'default-custom-radio-1-id',
                    name : 'default-custom-radio-1-name',
                    class : 'custom-control-input',
                    checked : false,
                    indeterminate : null,
                    required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
                    type : 'radio',
                    value : 'value1'
                }
            }
        ];

        // define default class CSS class settings/options
        this.class_css_classes = {
            bordered_label_wrappers : 'd-flex justify-content-between align-items-center border-bottom mb-2',
            radio_parents : 'custom-control custom-radio',
            radios : 'custom-control-input',
            radio_labels : 'custom-control-label'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Custom Radios',
            group_id : 'default-radios',
            group_name : 'custom-radios',
            
            // default component help modal settings
            form_modal_text : {
                heading: 'Custom Radios',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Custom Radios are Bootstrap 4 custom form elements. Custom Radios leverage brand colors and CSS to replace the browser-defined styling of radios.', 'Using Custom Radios lets a web app provide users with radio elements that look/feel the same across different browsers.' ]
                }]
            },
            
            // default component form text settings
            form_text : {
                help    : ['Custom Radios help text'],
                error   : ['Custom Radios error text'],
                success : ['Custom Radios success text']
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.classes, this.class_css_classes);
        Object.assign(this._defaults, this.class_defaults);
        this._defaults.radios[0].label = this.new_radios[0].label;
        Object.assign(this._defaults.radios[0].attributes, this.new_radios[0].attributes);

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
        label_wrapper.className = opts.classes.bordered_label_wrappers;

        // create the label element
        let label_el = document.createElement('label');
        label_el.className = opts.classes.labels;
        insert_text(label_el, opts.label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.group_id + '-modal');

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // append all the elements created up to now
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);

        // create the parent form text wrapper element
        let form_text_parent = document.createElement('div');
        form_text_parent.className = opts.classes.form_text_parents;

        // create the form help text elements
        let form_help_text = document.createElement('small');
        form_help_text.className = opts.classes.form_help_texts;
        form_help_text.setAttribute('id', opts.group_id + opts.aria_describedby_suffix);
        insert_text(form_help_text, opts.form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = opts.classes.form_error_texts;
        form_error_text.setAttribute('id', opts.group_id + opts.error_text_suffix);
        insert_text(form_error_text, opts.form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = opts.classes.form_success_texts;
        form_success_text.setAttribute('id', opts.group_id + opts.success_text_suffix);
        insert_text(form_success_text, opts.form_text.success);

        // loop through the radios array
        for (var i = 0; i < opts.radios.length; i++) {

            // create the parent element for the radio
            let parent = document.createElement('div');
            parent.className = opts.classes.radio_parents;

            // create the radio element
            let input = document.createElement('input');
            input.className = opts.classes.radios;
            handle_input_attributes(opts.radios[i].attributes, input);
            apply_attributes(input, opts.radios[i].attributes);
            input.setAttribute('aria-describedby', opts.group_id + opts.aria_describedby_suffix);

            // create the label and label text node elements
            let label = document.createElement('label');
            label.className = opts.classes.radio_labels;
            label.setAttribute('for', opts.radios[i].attributes.id);
            insert_text(label, opts.radios[i].label);

            //
            // HANDLE COMPONENT VALIDATION
            //

            determine_radio_validation(opts, opts.radios[i].attributes, input, label_el, label, form_help_text, form_error_text, form_success_text);

            // append all the elements
            parent.appendChild(input);
            parent.appendChild(label);
            
            // append the parent to the current form group
            form_group.appendChild(parent);

        }

        //
        // HANDLE COMPONENT LISTENERS
        //

        label_button.addEventListener('click', function(e) {
            
            let modalCheck = document.getElementById(opts.group_id + '-modal');
            
            if (!modalCheck) {
                let modal_options = {
                    id: opts.group_id,
                    form_modal_text: opts.form_modal_text
                };
                let modal_nodes = generate_form_help_modal(modal_options);
                document.body.appendChild(modal_nodes);
                $(modal_nodes).modal('show');
            }

        });

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