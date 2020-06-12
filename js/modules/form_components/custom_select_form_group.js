import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { merge_objects } from '../helpers/merge_objects.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';

class Custom_select_form_group
{
    constructor (opts = false)
    {
        /** 
         * Custom Select Form Group : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */

        this._defaults = {
            classes : {
                form_groups             : defaults.classes.form_groups,
                bordered_label_wrappers : defaults.classes.bordered_label_wrappers,
                labels                  : defaults.classes.labels,
                label_buttons           : defaults.classes.label_buttons,
                label_button_icons      : defaults.classes.label_button_icons,
                selects                 : defaults.classes.selects,
                form_text_parents       : defaults.classes.form_text_parents,
                form_help_texts         : defaults.classes.form_help_texts,
                form_error_texts        : defaults.classes.form_error_texts,
                form_success_texts      : defaults.classes.form_success_texts
            },
            aria_describedby_suffix : defaults.aria_describedby_suffix,
            error_text_suffix       : defaults.error_text_suffix,
            success_text_suffix     : defaults.success_text_suffix,
            id                      : 'custom-select-id',
            name                    : 'custom-select-name',
            label                   : 'Default Custom Select',
            form_text : {
                help    : 'Custom Select help text',
                error   : 'Custom Select error text',
                success : 'Custom Select success text'
            },
            form_modal_text : {
                heading: 'Custom Selects',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Custom Select elements allow a user to select a single option from a list of options.', 'Custom Selects are specifically styled elements in Bootstrap 4, which is one of our core dependencies.' ]
                }]
            },
            options : [
                {
                    text: 'Select an Option',
                    attributes:
                    {
                        selected : ''
                    }
                },
                {
                    text: 'Option One',
                    attributes:
                    {
                        value : 'one'
                    }
                },
                {
                    text: 'Option Two',
                    attributes:
                    {
                        value : 'two'
                    }
                }
            ]
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? merge_objects(true, this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
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
        label_el.setAttribute('for', opts.id);
        let label_el_text = document.createTextNode(opts.label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.id + '-modal');

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

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // append all the elements created up to now
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_el.appendChild(label_el_text);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);

         // create the select element
         let select = document.createElement('select');
         select.className = opts.classes.selects;
         select.setAttribute('id', opts.id);
         select.setAttribute('name', opts.name);
         select.setAttribute('aria-describedby', opts.id + opts.aria_describedby_suffix);
         
         form_group.appendChild(select);

        // loop through the options array
        for (var i = 0; i < opts.options.length; i++)
        {
            // create the parent element for the checkbox
            let option = document.createElement('option');
            
            // apply the passed attributes from the passed options
            apply_attributes(option, opts.options[i].attributes);

            // create text node for option element
            let opt_txt = document.createTextNode(opts.options[i].text);

            // append all option elements to the select element
            option.appendChild(opt_txt);
            select.appendChild(option);
        }

        // create the parent form text wrapper element
        let form_text_parent = document.createElement('div');
        form_text_parent.className = opts.classes.form_text_parents;

        // create the form help text elements
        let form_help_text = document.createElement('small');
        form_help_text.className = opts.classes.form_help_texts;
        form_help_text.setAttribute('id', opts.id + opts.aria_describedby_suffix);
        let form_help_text_text = document.createTextNode(opts.form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = opts.classes.form_error_texts;
        form_error_text.setAttribute('id', opts.id + opts.error_text_suffix);
        let form_error_text_text = document.createTextNode(opts.form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = opts.classes.form_success_texts;
        form_success_text.setAttribute('id', opts.id + opts.success_text_suffix);
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

export { Custom_select_form_group };