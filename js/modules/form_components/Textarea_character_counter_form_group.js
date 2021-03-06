// import class dependencies
import { Form_group_textarea } from './data/Form_group_textarea.js';

// import utility dependencies
import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { handle_textarea_attributes } from './utilities/handle_textarea_attributes.js';
import { determine_textarea_validation } from './utilities/determine_textarea_validation.js';
import { settings_merge } from '../helpers/settings_merge.js';
import { update_character_count } from './utilities/update_character_count.js';


export class Textarea_character_counter_form_group extends Form_group_textarea {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // default textarea settings
        this.new_textarea_attributes = {
            id : 'char-textarea-id',
            name : 'char-textarea-name'
        };

        // define default class CSS class settings/options
        this.class_css_classes = {
            character_counter_parents : 'small text-right text-muted form-text'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Character Counter Textarea',

            // default component help modal settings
            form_modal_text : {
                heading: 'Character Counter Textareas',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Character Counter Form Textareas are very useful and convenient options to help users enter data while also being precicely aware of how much they have typed and how much more they can type, too. Textareas differ from traditional inputs by allowing desktop browser users to re-size the input, and allowing both desktop and mobile browsers to scroll vertically whenever longer content is entered.' ]
                }]
            },

            // default component form text settings
            form_text : {
                help : ['Char Counter Textarea help text'],
                error : ['Char Counter Textarea error text'],
                success : ['Char Counter Textarea success text']
            },

            // default character counter settings
            characters_count_suffix : '-characters',
            max_characters : '1200'

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.textarea.attributes, this.new_textarea_attributes);
        Object.assign(this._defaults.classes, this.class_css_classes);
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

        // merge any passed options settings into the default settings to get a final settings object
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
        label_el.setAttribute('for', opts.textarea.attributes.id);
        insert_text(label_el, opts.label);

        // create the button element for the textarea help modal
        let label_button = document.createElement('button');
        label_button.className = opts.classes.label_buttons;
        label_button.setAttribute('type', 'button');
        label_button.setAttribute('data-toggle', 'modal');
        label_button.setAttribute('data-target', '#' + opts.textarea.attributes.id + '-modal');

        // create the font awesome label button icon element
        let label_button_icon = document.createElement('i');
        label_button_icon.className = opts.classes.label_button_icons;

        // create the textarea element
        let textarea = document.createElement('textarea');
        handle_textarea_attributes(opts.textarea.attributes, textarea);
        apply_attributes(textarea, opts.textarea.attributes);
        textarea.value = opts.textarea.attributes.value; // CANNOT BE: textarea.setAttribute('value', opts.textarea.attributes.value);
        textarea.setAttribute('aria-describedby', opts.textarea.attributes.id + opts.aria_describedby_suffix);
        textarea.setAttribute('data-max-characters', opts.max_characters);

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
        form_help_text.setAttribute('id', opts.textarea.attributes.id + opts.aria_describedby_suffix);
        insert_text(form_help_text, opts.form_text.help);

        // create the form error text elements
        let form_error_text = document.createElement('small');
        form_error_text.className = opts.classes.form_error_texts;
        form_error_text.setAttribute('id', opts.textarea.attributes.id + opts.error_text_suffix);
        insert_text(form_error_text, opts.form_text.error);

        // create the form success text elements
        let form_success_text = document.createElement('small');
        form_success_text.className = opts.classes.form_success_texts;
        form_success_text.setAttribute('id', opts.textarea.attributes.id + opts.success_text_suffix);
        insert_text(form_success_text, opts.form_text.success);

        // create the parent character counter wrapper element
        let character_counter_parent = document.createElement('div');
        character_counter_parent.className = opts.classes.character_counter_parents;

        // create the character counter elements
        let char_counter = document.createElement('span');
        char_counter.setAttribute('id', opts.textarea.attributes.id + opts.characters_count_suffix);
        let char_counter_text = document.createTextNode(Number(opts.textarea.attributes.value.length).toLocaleString());
        let char_counter_limit = document.createTextNode('/' + Number(opts.max_characters).toLocaleString());

        //
        // HANDLE COMPONENT LISTENERS
        //

        // add listner for the help modal generation functionality
        label_button.addEventListener('click', function(e) {
            
            let modalCheck = document.getElementById(opts.textarea.attributes.id + '-modal');
            
            if (!modalCheck) {
                
                let modal_options = {
                    
                    id: opts.textarea.attributes.id,

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

        // dupe the class to a variable to access class data (while inside a listner)
        let thisClass = this;

        // add listner for the clear text button functionality
        clear_text_button.addEventListener('click', function(e) {

            clear_user_value(opts.textarea.attributes.id, thisClass.defaults.characters_count_suffix);

        });

        // add listner for the character counter functionality
        textarea.addEventListener('keyup', function(e) {

            update_character_count(this.id, this.id + thisClass.defaults.characters_count_suffix, Number(this.getAttribute('data-max-characters')));

        });

        textarea.addEventListener('input', function(e) {

            update_character_count(this.id, this.id + thisClass.defaults.characters_count_suffix, Number(this.getAttribute('data-max-characters')));

        });

        //
        // HANDLE COMPONENT VALIDATION
        //

        determine_textarea_validation(opts, textarea, label_el, form_help_text, form_error_text, form_success_text);

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
        form_text_wrapper.appendChild(character_counter_parent);
        character_counter_parent.appendChild(char_counter);
        char_counter.appendChild(char_counter_text);
        character_counter_parent.appendChild(char_counter_limit);

        //
        // RETURN COMPONENT NODES
        //

        return form_group;

    }

}