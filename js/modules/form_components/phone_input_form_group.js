import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import IMask from '../plugins/imask/index.js';
import { set_imask_format } from './utilities/set_imask_format.js';

class Phone_input_form_group
{
    constructor (opts = false)
    {
        this.classes = {
            form_groups               : opts.form_groups               ? opts.form_groups               : defaults.classes.form_groups,
            label_wrappers            : opts.label_wrappers            ? opts.label_wrappers            : defaults.classes.label_wrappers,
            labels                    : opts.labels                    ? opts.labels                    : defaults.classes.labels,
            label_buttons             : opts.label_buttons             ? opts.label_buttons             : defaults.classes.label_buttons,
            label_button_icons        : opts.label_button_icons        ? opts.label_button_icons        : defaults.classes.label_button_icons,
            inputs                    : opts.inputs                    ? opts.inputs                    : defaults.classes.inputs,
            clear_text_parents        : opts.clear_text_parents        ? opts.clear_text_parents        : defaults.classes.clear_text_parents,
            clear_text_buttons        : opts.clear_text_buttons        ? opts.clear_text_buttons        : defaults.classes.clear_text_buttons,
            form_text_wrappers        : opts.form_text_wrappers        ? opts.form_text_wrappers        : defaults.classes.form_text_wrappers,
            form_text_parents         : opts.form_text_parents         ? opts.form_text_parents         : defaults.classes.form_text_parents,
            form_help_texts           : opts.form_help_texts           ? opts.form_help_texts           : defaults.classes.form_help_texts,
            form_error_texts          : opts.form_error_texts          ? opts.form_error_texts          : defaults.classes.form_error_texts,
            form_success_texts        : opts.form_success_texts        ? opts.form_success_texts        : defaults.classes.form_success_texts
        };

        this.aria_describedby_suffix  = opts.aria_describedby_suffix  ? opts.aria_describedby_suffix  : defaults.aria_describedby_suffix;
        this.error_text_suffix        = opts.error_text_suffix        ? opts.error_text_suffix        : defaults.error_text_suffix;
        this.success_text_suffix      = opts.success_text_suffix      ? opts.success_text_suffix      : defaults.success_text_suffix;
        this.characters_count_suffix  = opts.characters_count_suffix  ? opts.characters_count_suffix  : defaults.characters_count_suffix;
        this.clear_text_button_styles = opts.clear_text_button_styles ? opts.clear_text_button_styles : defaults.clear_text_button_styles;
        this.clear_text_button_text   = opts.clear_text_button_text   ? opts.clear_text_button_text   : defaults.clear_text_button_text;

        this.masking = {
            enable    : opts.enable    ? opts.enable    : true,
            type      : opts.type      ? opts.type      : 'phone_us'
        };
    }

    /** 
     * Generate Method : Generates a BS4 Input Form Group, with a label, help modal data, an input, and help/error/success text content
     * @param {String} opts.id           : Xxxxxx
     * @param {String} opts.name         : Xxxxxx
     * @param {String} opts.value        : Xxxxxx
     * @param {String} opts.label        : Xxxxxx
     * @param {String} opts.placeholder  : Xxxxxx
     * @param {String} opts.classes      : Xxxxxx
     */

    generate (opts = false)
    {
        // dupe the class to a variable to access class data (while inside a listner)
        let thisClass = this;
        
        // set the options if passed or use default values
        let id           = opts.id           ? opts.id           : 'default-phone-input-id';
        let name         = opts.name         ? opts.name         : 'default-phone-input-name';
        let value        = opts.value        ? opts.value        : '';
        let label        = opts.label        ? opts.label        : 'Default Phone Input Label';
        let placeholder  = opts.placeholder  ? opts.placeholder  : '(123) 123-1234';
        let classes      = opts.classes      ? opts.classes      : null;

        let form_text = opts.form_text ? opts.form_text :  {
            help    : 'Default Phone Input help text',
            error   : 'Default Phone Input error text',
            success : 'Default Phone Input success text'
        };

        let form_modal_text = opts.form_modal_text ? opts.form_modal_text : {
            heading: 'Form Inputs',
            body: [{
                type: 'paragraphs',
                content: [ 'Form Phone Inputs are very useful and convenient options to help users enter telephone number data. This phone input comes with JavaScript masking built-in from a third-party plugin calles iMask.js!' ]
            }]
        };

        let masking = opts.masking ? opts.masking : this.masking;
        
        // create the form group element
        let form_group = document.createElement('div');
        form_group.className = this.classes.form_groups;

        // create the (flexbox) element to wrap the label and help button
        let label_wrapper = document.createElement('div');
        label_wrapper.className = this.classes.label_wrappers;

        // create the label element
        let label_el = document.createElement('label');
        label_el.className = this.classes.labels;
        label_el.setAttribute('for', id);
        let label_el_text = document.createTextNode(label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = this.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + id + '-modal');

        label_button.addEventListener('click', function(e) {
            let modalCheck = document.getElementById(id + '-modal');
            if (!modalCheck)
            {
                let modal_options = {
                    id: id,
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

        // create the input element
        let input = document.createElement('input');
        input.className = (classes !== null) ? classes : this.classes.inputs;
        input.setAttribute('type', 'tel');
        input.setAttribute('placeholder', placeholder);
        input.setAttribute('id', id);
        input.setAttribute('name', name);
        input.setAttribute('value', value);
        input.setAttribute('aria-describedby', id + this.aria_describedby_suffix);

        // handle masking plugin options
        let maskedInput;
        if (masking.enable && masking.enable === true)
        {
            let imask_opts = set_imask_format(masking.type);
            maskedInput = IMask(input, imask_opts);
        }

        // create the parent text clear element
        let clear_text_parent = document.createElement('div');
        clear_text_parent.className = this.classes.clear_text_parents;
        clear_text_parent.style.height = '0px';

        // create the text clear button element
        let clear_text_button = document.createElement('div');
        clear_text_button.className = this.classes.clear_text_buttons;
        clear_text_button.setAttribute('type', 'button');
        clear_text_button.setAttribute('style', this.clear_text_button_styles);
        clear_text_button.addEventListener('click', function(e) {
            clear_user_value(id);
        });
        let clear_text_button_txt = document.createTextNode(this.clear_text_button_text);

        // create the parent form text wrapper element
        let form_text_wrapper = document.createElement('div');
        form_text_wrapper.className = this.classes.form_text_wrappers;

        // create the parent form text wrapper element
        let form_text_parent = document.createElement('div');
        form_text_parent.className = this.classes.form_text_parents;

        // create the form help text elements
        let form_help_text = document.createElement('small');
        form_help_text.className = this.classes.form_help_texts;
        form_help_text.setAttribute('id', id + this.aria_describedby_suffix);
        let form_help_text_text = document.createTextNode(form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = this.classes.form_error_texts;
        form_error_text.setAttribute('id', id + this.error_text_suffix);
        let form_error_text_text = document.createTextNode(form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = this.classes.form_success_texts;
        form_success_text.setAttribute('id', id + this.success_text_suffix);
        let form_success_text_text = document.createTextNode(form_text.success);
        
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

export { Phone_input_form_group };