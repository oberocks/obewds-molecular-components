import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { applyAttributes } from '../html_elements/utilities/dom_generation.js';

class Custom_checkboxes_form_group
{
    constructor (opts = false)
    {
        this.classes = {
            form_groups             : opts.form_groups             ? opts.form_groups             : defaults.classes.form_groups,
            bordered_label_wrappers : opts.bordered_label_wrappers ? opts.bordered_label_wrappers : defaults.classes.bordered_label_wrappers,
            labels                  : opts.labels                  ? opts.labels                  : defaults.classes.labels,
            label_buttons           : opts.label_buttons           ? opts.label_buttons           : defaults.classes.label_buttons,
            label_button_icons      : opts.label_button_icons      ? opts.label_button_icons      : defaults.classes.label_button_icons,
            checkbox_parents        : opts.checkbox_parents        ? opts.checkbox_parents        : defaults.classes.checkbox_parents,
            checkboxes              : opts.checkboxes              ? opts.checkboxes              : defaults.classes.checkboxes,
            checkbox_labels         : opts.checkbox_labels         ? opts.checkbox_labels         : defaults.classes.checkbox_labels,
            form_text_parents       : opts.form_text_parents       ? opts.form_text_parents       : defaults.classes.form_text_parents,
            form_help_texts         : opts.form_help_texts         ? opts.form_help_texts         : defaults.classes.form_help_texts,
            form_error_texts        : opts.form_error_texts        ? opts.form_error_texts        : defaults.classes.form_error_texts,
            form_success_texts      : opts.form_success_texts      ? opts.form_success_texts      : defaults.classes.form_success_texts
        };
        this.aria_describedby_suffix  = opts.aria_describedby_suffix  ? opts.aria_describedby_suffix  : defaults.aria_describedby_suffix;
        this.error_text_suffix        = opts.error_text_suffix        ? opts.error_text_suffix        : defaults.error_text_suffix;
        this.success_text_suffix      = opts.success_text_suffix      ? opts.success_text_suffix      : defaults.success_text_suffix;
        this.characters_count_suffix  = opts.characters_count_suffix  ? opts.characters_count_suffix  : defaults.characters_count_suffix;
        this.group_id                 = opts.group_id                 ? opts.group_id                 : 'default-checkboxes';
    }

    /** 
     * Generate Method : Generates a BS4 Input Form Group, with a label, help modal data, an input, and help/error/success text content
     * @param {Array of Objects} opts.checkboxes                   : REQUIRED : Xxxxxx
     * @param {String} opts.checkboxes.label                       : REQUIRED : Xxxxxx
     * @param {Object} opts.checkboxes.attributes                  : REQUIRED : Xxxxxx
     * @param {String} opts.checkboxes.attributes.id               : REQUIRED : Xxxxxx
     * @param {String} opts.checkboxes.attributes.name             : REQUIRED : Xxxxxx
     * @param {String} opts.checkboxes.attributes.value            : REQUIRED : Xxxxxx
     * @param {String} opts.group_id                               : REQUIRED : Xxxxxx
     * @param {String} opts.parent_classes                         :          : Xxxxxx
     * @param {String} opts.classes                                :          : Xxxxxx
     * @param {String} opts.label_classes                          :          : Xxxxxx
     * @param {String} opts.classes                                :          : Xxxxxx
     * @param {String} opts.form_text.help                         :          : Xxxxxx
     * @param {String} opts.form_text.error                        :          : Xxxxxx
     * @param {String} opts.form_text.success                      :          : Xxxxxx
     * @param {String} opts.form_modal_text                        :          : Xxxxxx
     * @param {String} opts.form_modal_text.heading                :          : Xxxxxx
     * @param {Array of Objects} opts.form_modal_text.body         :          : Xxxxxx
     * @param {String} opts.form_modal_text.body.type              :          : Xxxxxx
     * @param {Array of Strings} opts.form_modal_text.body.content :          : Xxxxxx
     */

    generate (opts = false)
    {
        // dupe the class to a variable to access class data (while inside a listner)
        let thisClass = this;
        
        // set the options if passed or use default values
        let group_id        = opts.group_id        ? opts.group_id        : this.group_id;
        let label           = opts.label           ? opts.label           : 'Default Custom Checkboxes';
        let parent_classes  = opts.parent_classes  ? opts.parent_classes  : this.classes.checkbox_parents;
        let classes         = opts.classes         ? opts.classes         : this.classes.checkboxes;
        let label_classes   = opts.label_classes   ? opts.label_classes   : this.classes.checkbox_labels;

        let form_text = opts.form_text ? opts.form_text :  {
            help    : 'Custom Checkboxes help text',
            error   : 'Custom Checkboxes error text',
            success : 'Custom Checkboxes success text'
        };

        let form_modal_text = opts.form_modal_text ? opts.form_modal_text : {
            heading: 'Custom Checkboxes',
            body: [{
                type: 'paragraphs',
                content: [ 'Custom Checkboxes are Bootstrap 4 custom form elements. Custom Checkboxes leverage brand colors and CSS to replace the browser-defined styling of checkboxes.', 'Using Custom Checkboxes lets a web app provide users with checkbox elements that look/feel the same across different browsers.' ]
            }]
        };

        // initialize a var for the checkboxes
        let checkboxes;

        // if a checkboxes property was passed and has content
        if (opts.checkboxes && opts.checkboxes.length > 0)
        {
            // add the options array to checkboxes
            checkboxes = opts.checkboxes;
        }
        else
        {
            // if no checkboxes property was found then use this default schema
            checkboxes = [
                {
                    label: 'Default Checkbox 1',
                    attributes:
                    {
                        id    : 'checkbox-1',
                        name  : 'checkbox-1',
                        value : 'value1'
                    }
                },
                {
                    label: 'Default Checkbox 2',
                    attributes:
                    {
                        id    : 'checkbox-2',
                        name  : 'checkbox-2',
                        value : 'value2'
                    }
                },
                {
                    label: 'Disabled Checkbox',
                    attributes:
                    {
                        id       : 'checkbox-3',
                        name     : 'checkbox-3',
                        value    : 'value3',
                        disabled : ''
                    }
                }
            ];
        }
        
        // create the form group element
        let form_group = document.createElement('div');
        form_group.className = this.classes.form_groups;

        // create the (flexbox) element to wrap the label and help button
        let label_wrapper = document.createElement('div');
        label_wrapper.className = this.classes.bordered_label_wrappers;

        // create the label element
        let label_el = document.createElement('label');
        label_el.className = this.classes.labels;
        let label_el_text = document.createTextNode(label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = this.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + group_id + '-modal');

        label_button.addEventListener('click', function(e) {
            let modalCheck = document.getElementById(group_id + '-modal');
            if (!modalCheck)
            {
                let modal_options = {
                    id: group_id,
                    form_modal_text: form_modal_text
                };
                let modal_nodes = generate_form_help_modal(modal_options);
                document.body.appendChild(modal_nodes);
                $(modal_nodes).modal('show');
            }
        });

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = this.classes.label_button_icons;

        // append all the elements created up to now
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_el.appendChild(label_el_text);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);

        // loop through the checkboxes array
        for (var i = 0; i < checkboxes.length; i++)
        {
            // create the parent element for the checkbox
            let parent = document.createElement('div');
            parent.className = parent_classes;

            // create the checkbox element
            let input = document.createElement('input');
            input.className = classes;
            input.setAttribute('type', 'checkbox');
            input.setAttribute('aria-describedby', group_id + this.aria_describedby_suffix);

            // apply the passed attributes from the passed options
            applyAttributes(input, checkboxes[i].attributes);

            // create the label and label text node elements
            let label = document.createElement('label');
            label.className = label_classes;
            label.setAttribute('for', checkboxes[i].attributes.id);
            let label_txt = document.createTextNode(checkboxes[i].label);

            // append all the elements
            parent.appendChild(input);
            parent.appendChild(label);
            label.appendChild(label_txt);
            
            // append the parent to the current form group
            form_group.appendChild(parent);
        }

        // create the parent form text wrapper element
        let form_text_parent = document.createElement('div');
        form_text_parent.className = this.classes.form_text_parents;

        // create the form help text elements
        let form_help_text = document.createElement('small');
        form_help_text.className = this.classes.form_help_texts;
        form_help_text.setAttribute('id', group_id + this.aria_describedby_suffix);
        let form_help_text_text = document.createTextNode(form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = this.classes.form_error_texts;
        form_error_text.setAttribute('id', group_id + this.error_text_suffix);
        let form_error_text_text = document.createTextNode(form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = this.classes.form_success_texts;
        form_success_text.setAttribute('id', group_id + this.success_text_suffix);
        let form_success_text_text = document.createTextNode(form_text.success);
        
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