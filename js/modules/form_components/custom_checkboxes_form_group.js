import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { merge_objects } from '../helpers/merge_objects.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';

class Custom_checkboxes_form_group
{
    constructor (opts = false)
    {
        /** 
         * Custom Checkboxes Form Group : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            classes : {
                form_groups             : defaults.classes.form_groups,
                bordered_label_wrappers : defaults.classes.bordered_label_wrappers,
                labels                  : defaults.classes.labels,
                label_buttons           : defaults.classes.label_buttons,
                label_button_icons      : defaults.classes.label_button_icons,
                checkbox_parents        : defaults.classes.checkbox_parents,
                checkboxes              : defaults.classes.checkboxes,
                checkbox_labels         : defaults.classes.checkbox_labels,
                form_text_parents       : defaults.classes.form_text_parents,
                form_help_texts         : defaults.classes.form_help_texts,
                form_error_texts        : defaults.classes.form_error_texts,
                form_success_texts      : defaults.classes.form_success_texts
            },
            aria_describedby_suffix : defaults.aria_describedby_suffix,
            error_text_suffix       : defaults.error_text_suffix,
            success_text_suffix     : defaults.success_text_suffix,
            group_id                : 'default-checkboxes',
            label                   : 'Default Custom Checkboxes',
            form_text : {
                help    : 'Custom Checkboxes help text',
                error   : 'Custom Checkboxes error text',
                success : 'Custom Checkboxes success text'
            },
            form_modal_text : {
                heading: 'Custom Checkboxes',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Custom Checkboxes are Bootstrap 4 custom form elements. Custom Checkboxes leverage brand colors and CSS to replace the browser-defined styling of checkboxes.', 'Using Custom Checkboxes lets a web app provide users with checkbox elements that look/feel the same across different browsers.' ]
                }]
            },
            checkboxes : [
                {
                    label: 'Default Checkbox 1',
                    attributes:
                    {
                        id    : 'checkbox-1',
                        name  : 'checkbox-1',
                        value : 'value1'
                    }
                }
            ]
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? merge_objects(true, this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
    }

    get_class_defaults () {
        return this.defaults;
    }

    get_generate_options (options) {
        return merge_objects(true, this.defaults, options);
    }

    generate (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? merge_objects(true, this.defaults, options) : this.defaults;
        
        // create the form group element
        let form_group = document.createElement('div');
        form_group.className = opts.classes.form_groups;

        // create the (flexbox) element to wrap the label and help button
        let label_wrapper = document.createElement('div');
        label_wrapper.className = opts.classes.bordered_label_wrappers;

        // create the label element
        let label_el = document.createElement('label');
        label_el.className = opts.classes.labels;
        let label_el_text = document.createTextNode(opts.label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.group_id + '-modal');

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

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // append all the elements created up to now
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_el.appendChild(label_el_text);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);

        // loop through the checkboxes array
        for (var i = 0; i < opts.checkboxes.length; i++)
        {
            // create the parent element for the checkbox
            let parent = document.createElement('div');
            parent.className = opts.classes.checkbox_parents;

            // create the checkbox element
            let input = document.createElement('input');
            input.className = opts.classes.checkboxes;
            input.setAttribute('type', 'checkbox');
            input.setAttribute('aria-describedby', opts.group_id + opts.aria_describedby_suffix);

            // apply the passed attributes from the passed options
            apply_attributes(input, opts.checkboxes[i].attributes);

            // create the label and label text node elements
            let label = document.createElement('label');
            label.className = opts.classes.checkbox_labels;
            label.setAttribute('for', opts.checkboxes[i].attributes.id);
            let label_txt = document.createTextNode(opts.checkboxes[i].label);

            // append all the elements
            parent.appendChild(input);
            parent.appendChild(label);
            label.appendChild(label_txt);
            
            // append the parent to the current form group
            form_group.appendChild(parent);
        }

        // create the parent form text wrapper element
        let form_text_parent = document.createElement('div');
        form_text_parent.className = opts.classes.form_text_parents;

        // create the form help text elements
        let form_help_text = document.createElement('small');
        form_help_text.className = opts.classes.form_help_texts;
        form_help_text.setAttribute('id', opts.group_id + opts.aria_describedby_suffix);
        let form_help_text_text = document.createTextNode(opts.form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = opts.classes.form_error_texts;
        form_error_text.setAttribute('id', opts.group_id + opts.error_text_suffix);
        let form_error_text_text = document.createTextNode(opts.form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = opts.classes.form_success_texts;
        form_success_text.setAttribute('id', opts.group_id + opts.success_text_suffix);
        let form_success_text_text = document.createTextNode(opts.form_text.success);
        
        // append all the remaining elements for this input, nested as needed
        form_group.appendChild(form_text_parent);
        form_text_parent.appendChild(form_help_text);
        form_help_text.appendChild(form_help_text_text);
        form_text_parent.appendChild(form_error_text);
        form_error_text.appendChild(form_error_text_text);
        form_text_parent.appendChild(form_success_text);
        form_success_text.appendChild(form_success_text_text);

        // return the form group element
        return form_group;
    }
}

export { Custom_checkboxes_form_group };