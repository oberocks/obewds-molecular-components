// import class dependencies
import { Form_group_input } from './data/Form_group_input.js';

// import utility dependencies
import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { determine_input_validation } from './utilities/determine_input_validation.js';
import { handle_input_attributes } from './utilities/handle_input_attributes.js';
import { settings_merge } from '../helpers/settings_merge.js';

// import plugin dependencies
import IMask from '../plugins/imask/esm/index.js';
import { set_imask_format } from './utilities/set_imask_format.js';


export class Input_form_group extends Form_group_input {
    
    constructor (opts = false) {
        
        // get props from inhereted class
        super();

        // default input settings
        this.new_input_attributes = {
            id : 'default-input-id',
            name : 'default-input-name'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Input Label',
            
            // default component help modal settings
            form_modal_text : {
                heading : 'Form Inputs',
                body : [{
                    type : 'paragraphs',
                    content : [ 'Form Inputs are very useful and convenient options to help users enter data. Inputs allow a user to type in data for a single line, that expands horizontally if a user types a lot of content.' ]
                }]
            },
            
            // default component form text settings
            form_text : {
                help : ['Default Input help text'],
                error : ['Default Input error text'],
                success : ['Default Input success text']
            }

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.input.attributes, this.new_input_attributes);
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
        label_el.setAttribute('for', opts.input.attributes.id);
        insert_text(label_el, opts.label);

        // create the button element for the input help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.input.attributes.id + '-modal');

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // create the input element
        let input = document.createElement('input');
        handle_input_attributes(opts.input.attributes, input);
        apply_attributes(input, opts.input.attributes);
        input.setAttribute('aria-describedby', opts.input.attributes.id + opts.aria_describedby_suffix);

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
        form_help_text.setAttribute('id', opts.input.attributes.id + opts.aria_describedby_suffix);
        insert_text(form_help_text, opts.form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = opts.classes.form_error_texts;
        form_error_text.setAttribute('id', opts.input.attributes.id + opts.error_text_suffix);
        insert_text(form_error_text, opts.form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = opts.classes.form_success_texts;
        form_success_text.setAttribute('id', opts.input.attributes.id + opts.success_text_suffix);
        insert_text(form_success_text, opts.form_text.success);

        //
        // HANDLE COMPONENT MASKING
        //
        
        // handle masking plugin options
        let maskedInput;
        if (opts.masking.enable && opts.masking.enable === true) {
            
            let imask_opts = set_imask_format(opts.masking.type);
            maskedInput = IMask(input, imask_opts);

        }

        //
        // HANDLE COMPONENT LISTENERS
        //

        // add listner for the help modal generation functionality
        label_button.addEventListener('click', function(e) {
            
            let modalCheck = document.getElementById(opts.input.attributes.id + '-modal');
            
            if (!modalCheck) {
                
                let modal_options = {
                    
                    id: opts.input.attributes.id,

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
        
        // add listner for the clear text button functionality
        clear_text_button.addEventListener('click', function(e) {
            
            clear_user_value(opts.input.attributes.id);

        });

        //
        // HANDLE COMPONENT VALIDATION
        //

        determine_input_validation(opts, input, label_el, form_help_text, form_error_text, form_success_text);
        
        //
        // ASSEMBLE COMPONENT ELEMENTS
        //

        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);
        form_group.appendChild(input);

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