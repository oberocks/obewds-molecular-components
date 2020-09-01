import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { settings_merge } from '../helpers/settings_merge.js';
import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';

class Input_form_group
{
    constructor (opts = false)
    {
        /** 
         * Input Form Group : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */

        this._defaults = {
            aria_describedby_suffix : defaults.aria_describedby_suffix,
            classes : {
                clear_text_buttons : defaults.classes.clear_text_buttons,
                clear_text_parents : defaults.classes.clear_text_parents,
                form_error_texts   : defaults.classes.form_error_texts,
                form_groups        : defaults.classes.form_groups,
                form_help_texts    : defaults.classes.form_help_texts,
                form_success_texts : defaults.classes.form_success_texts,
                form_text_parents  : defaults.classes.form_text_parents,
                form_text_wrappers : defaults.classes.form_text_wrappers,
                inputs             : defaults.classes.inputs,
                label_buttons      : defaults.classes.label_buttons,
                label_button_icons : defaults.classes.label_button_icons,
                label_wrappers     : defaults.classes.label_wrappers,
                labels             : defaults.classes.labels
            },
            clear_text_button_styles : defaults.clear_text_button_styles,
            clear_text_button_text   : defaults.clear_text_button_text,
            error_text_suffix        : defaults.error_text_suffix,
            form_modal_text : {
                heading: 'Form Inputs',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Form Inputs are very useful and convenient options to help users enter data. Inputs allow a user to type in data for a single line, that expands horizontally if a user types a lot of content.' ]
                }]
            },
            form_text :  {
                help    : 'Default Input help text',
                error   : 'Default Input error text',
                success : 'Default Input success text'
            },
            id                  : 'default-input-id',
            label               : 'Default Input Label',
            name                : 'default-input-name',
            placeholder         : 'Default Placeholder',
            success_text_suffix : defaults.success_text_suffix,
            type                : 'text',
            value               : '',
            required            : false
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
    
    generate (options = false)
    {
        // dupe the class to a variable to access class data (for use inside a listner)
        let thisClass = this;

        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;
        
        
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

        // create the input element
        let input = document.createElement('input');
        input.className = opts.classes.inputs;
        input.setAttribute('type', opts.type);
        input.setAttribute('placeholder', opts.placeholder);
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
        clear_text_button.addEventListener('click', function(e) {
            clear_user_value(opts.id);
        });
        let clear_text_button_txt = document.createTextNode(opts.clear_text_button_text);

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
        
        // append all the elements for this input, nested as needed
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_el.appendChild(label_el_text);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);
        form_group.appendChild(input);

        form_group.appendChild(clear_text_parent);
        clear_text_parent.appendChild(clear_text_button);
        clear_text_button.appendChild(clear_text_button_txt);
        
        form_group.appendChild(form_text_wrapper);
        form_text_wrapper.appendChild(form_text_parent);
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

export { Input_form_group };