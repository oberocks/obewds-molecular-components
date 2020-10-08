// import class dependencies
import { Form_group_custom_checkboxes } from './data/Form_group_custom_checkboxes.js';

// import utility dependencies
import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { determine_checkbox_validation } from './utilities/determine_checkbox_validation.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { handle_input_attributes } from './utilities/handle_input_attributes.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Custom_checkboxes_form_group extends Form_group_custom_checkboxes {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // default input settings
        this.new_checkboxes = [
            {
                label : 'Default Custom Checkbox 1',
                attributes : {
                    id : 'default-custom-checkbox-id',
                    name : 'default-custom-checkbox-name',
                    class : 'custom-control-input',
                    checked : false,
                    indeterminate : null,
                    required : false, // for <input> types checkbox, date, datetime-local, email, file, month, number, password, radio, search, tel, text, time, url, week, and for <select> and <textarea>
                    type : 'checkbox',
                    value : 'value1'
                }
            }
        ];

        // define default class CSS class settings/options
        this.class_css_classes = {
            bordered_label_wrappers : 'd-flex justify-content-between align-items-center border-bottom mb-2',
            checkbox_parents : 'custom-control custom-checkbox',
            checkboxes : 'custom-control-input',
            checkbox_labels : 'custom-control-label'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Custom Checkboxes',
            group_id : 'default-checkboxes',
            
            // default component help modal settings
            form_modal_text : {
                heading: 'Custom Checkboxes',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Custom Checkboxes are Bootstrap 4 custom form elements. Custom Checkboxes leverage brand colors and CSS to replace the browser-defined styling of checkboxes.', 'Using Custom Checkboxes lets a web app provide users with checkbox elements that look/feel the same across different browsers.' ]
                }]
            },
            
            // default component form text settings
            form_text : {
                help    : ['Custom Checkboxes help text'],
                error   : ['Custom Checkboxes error text'],
                success : ['Custom Checkboxes success text']
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.classes, this.class_css_classes);
        Object.assign(this._defaults, this.class_defaults);
        this._defaults.checkboxes[0].label = this.new_checkboxes[0].label;
        Object.assign(this._defaults.checkboxes[0].attributes, this.new_checkboxes[0].attributes);

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

        // loop through the checkboxes array
        for (var i = 0; i < opts.checkboxes.length; i++) {

            // create the parent element for the checkbox
            let parent = document.createElement('div');
            parent.className = opts.classes.checkbox_parents;

            // create the checkbox element
            let input = document.createElement('input');
            handle_input_attributes(opts.checkboxes[i].attributes, input);
            apply_attributes(input, opts.checkboxes[i].attributes);
            input.setAttribute('aria-describedby', opts.group_id + opts.aria_describedby_suffix);

            // create the label and label text node elements
            let label = document.createElement('label');
            label.className = opts.classes.checkbox_labels;
            label.setAttribute('for', opts.checkboxes[i].attributes.id);
            insert_text(label, opts.checkboxes[i].label);

            //
            // HANDLE COMPONENT VALIDATION
            //

            determine_checkbox_validation(opts, opts.checkboxes[i].attributes, input, label_el, label, form_help_text, form_error_text, form_success_text);

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
            if (!modalCheck)
            {
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
        // HANDLE COMPONENT VALIDATION
        //

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