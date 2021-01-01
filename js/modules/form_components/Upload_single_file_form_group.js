// import class dependencies
import { Form_group_upload_single_file } from './data/Form_group_upload_single_file.js';

// import utility dependencies
import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { determine_single_file_upload_validation } from './utilities/determine_single_file_upload_validation.js';
import { handle_input_attributes } from './utilities/handle_input_attributes.js';
import { settings_merge } from '../helpers/settings_merge.js';


export class Upload_single_file_form_group extends Form_group_upload_single_file {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // default input settings
        this.new_input_attributes = {
            id : 'default-file-input-id',
            name : 'default-file-input-name'
        };

        // define default class CSS class settings/options
        this.class_css_classes = {
            input_parents : 'bg-primary text-white text-break p-2',
            img_parents : 'bg-primary text-center p-1',
            imgs : 'img-fluid'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Single File Upload',
            
            // default component help modal settings
            form_modal_text : {
                heading: 'Upload Single File Inputs',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Upload File Inputs help users to select and upload files, and for applications to ingest files from users. This file upload input is meant for a single file upload per instance.' ]
                }]
            },
            
            // default component form text settings
            form_text : {
                help    : ['Upload Single File help text'],
                error   : ['Upload Single File error text'],
                success : ['Upload Single File success text']
            },

            // 
            img_alt : ''

        };

        // assign any class default attributes/settings
        Object.assign(this._defaults.input.attributes, this.new_input_attributes);
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

        // create the input parent element
        let input_parent = document.createElement('div');
        input_parent.className = opts.classes.input_parents;

        // create the input element
        let input = document.createElement('input');
        handle_input_attributes(opts.input.attributes, input);
        apply_attributes(input, opts.input.attributes);
        //input.className = opts.classes.inputs;
        //input.setAttribute('type', opts.type);
        //input.setAttribute('id', opts.input.attributes.id);
        //input.setAttribute('name', opts.name);
        input.setAttribute('aria-describedby', opts.input.attributes.id + opts.aria_describedby_suffix);
        //if ( opts.required ) { input.setAttribute('required', opts.required); }
        //if ( opts.accept.length > 0 ) { input.setAttribute('accept', opts.accept); }
        //if ( opts.capture.length > 0  ) { input.setAttribute('capture', opts.capture); }

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
        
        // append all the elements for this input, nested as needed
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);

        // 
        if (opts.input.attributes.value.length > 0) {

            let img_parent = document.createElement('div');
            img_parent.classList = opts.classes.img_parents;
            let img = document.createElement('img');
            img.classList = opts.classes.imgs;
            img.setAttribute('alt', opts.img_alt);
            img.setAttribute('src', opts.input.attributes.value);
            
            form_group.appendChild(img_parent);
            img_parent.appendChild(img);

        }

        //
        // HANDLE COMPONENT LISTENERS
        //

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

        // add listner to input that handles updating the DOM with a newly selected user image
        input.addEventListener('change', function(event) {

            // get the files list determined by user interaction(s)
            const fileList = this.files;
            
            // if there's a file in the file list
            if (fileList.length > 0) {

                // get a ref for this file from the file list
                const file = fileList[0];

                // check that this file is in fact an image
                // if it's not an image then stop the script otherwise continue
                if (!file.type.startsWith('image/')){ return }

                // create a new parent element for the user uploaded image
                const new_img_parent = document.createElement('div');
                new_img_parent.classList = opts.classes.img_parents;

                // create a new image element
                const new_img = document.createElement('img');
                new_img.classList = opts.classes.imgs;
                new_img.file = file;
                
                // append the image into the parent
                new_img_parent.appendChild(new_img);

                // get a node list for this form group and it's child nodes
                const form_grp = this.closest('.form-group');
                const child_nodes = form_grp.childNodes;

                if (child_nodes.length >= 4) {

                    form_grp.replaceChild(new_img_parent, child_nodes[1]);

                } else if (child_nodes.length === 3) {

                    form_grp.insertBefore(new_img_parent, form_grp.childNodes[1]);

                } else {

                    console.error('OBE:WDS MC Error: There was an unexpected child node count (less than 3 child nodes) inside the parent .form-group element that is handling the newly uploaded image file.');
                
                }
                
                // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
                const reader = new FileReader();
                reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(new_img);
                reader.readAsDataURL(file);

            }

        });

        //
        // HANDLE COMPONENT VALIDATION
        //

        // only apply the validation to this component
        // if there is no pre-existing value provided upon DOM creation/generation
        // Because otherwise, this element cannot know there is alreay an existing file
        // in any given system for this form field when provided by a developer's implementation

        if (opts.input.attributes.value.length <= 0) {
            
            determine_single_file_upload_validation(opts, input, label_el, input_parent, form_help_text, form_error_text, form_success_text);
        
        } else {
            
            // in the case of a value for this form component being provided by a dev
            // add an event listner for the file input, so it can be declared as required by a dev
            // but avoid any browser default invalid UI from triggering
            // as the form's data is already accounted for with the dev passing a value to display to a user (like from a CMS)
            input.addEventListener('invalid', function(e) {
                
                // prevent the browser's default invalid UI from triggering
                e.preventDefault();

            });

        }

        //
        // ASSEMBLE COMPONENT ELEMENTS
        //

        form_group.appendChild(input_parent);
        input_parent.appendChild(input);
        
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