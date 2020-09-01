import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { settings_merge } from '../helpers/settings_merge.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';

class Upload_single_file_form_group
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
                form_error_texts   : defaults.classes.form_error_texts,
                form_groups        : defaults.classes.form_groups,
                form_help_texts    : defaults.classes.form_help_texts,
                form_success_texts : defaults.classes.form_success_texts,
                form_text_parents  : defaults.classes.form_text_parents,
                form_text_wrappers : defaults.classes.form_text_wrappers,
                input_parents      : 'bg-primary text-white text-break p-2',
                inputs             : 'form-control-file',
                label_buttons      : defaults.classes.label_buttons,
                label_button_icons : defaults.classes.label_button_icons,
                label_wrappers     : defaults.classes.label_wrappers,
                labels             : defaults.classes.labels,
                img_parents        : 'bg-primary text-center p-1',
                imgs               : 'img-fluid'
            },
            error_text_suffix : defaults.error_text_suffix,
            form_modal_text : {
                heading: 'Upload Single File Inputs',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Upload File Inputs help users to select and upload files, and for applications to ingest files from users. This file upload input is meant for a single file upload per instance.' ]
                }]
            },
            form_text :  {
                help    : 'Upload Single File help text',
                error   : 'Upload Single File error text',
                success : 'Upload Single File success text'
            },
            id    : 'upload-single-file-input-id',
            label : 'Default Single File Upload',
            name                : 'upload-single-file-input-name',
            success_text_suffix : defaults.success_text_suffix,
            type                : 'file',
            value               : '',
            img_alt             : '',
            required            : false,
            accept              : '',
            capture             : ''
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

        // create the input parent element
        let input_parent = document.createElement('div');
        input_parent.className = opts.classes.input_parents;

        // create the input element
        let input = document.createElement('input');
        input.className = opts.classes.inputs;
        input.setAttribute('type', opts.type);
        input.setAttribute('id', opts.id);
        input.setAttribute('name', opts.name);
        input.setAttribute('aria-describedby', opts.id + opts.aria_describedby_suffix);
        if ( opts.required ) { input.setAttribute('required', opts.required); }
        if ( opts.accept.length > 0 ) { input.setAttribute('accept', opts.accept); }
        if ( opts.capture.length > 0  ) { input.setAttribute('capture', opts.capture); }

        // add listner to input that handles updating the DOM with a newly selected user image
        input.addEventListener('change', function(event)
        {
            // get the files list determined by user interaction(s)
            const fileList = this.files;
            
            // if there's a file in the file list
            if (fileList.length > 0)
            {
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

                if (child_nodes.length >= 4)
                {
                    form_grp.replaceChild(new_img_parent, child_nodes[1]);
                }
                else if (child_nodes.length === 3)
                {
                    form_grp.insertBefore(new_img_parent, form_grp.childNodes[1])
                }
                else
                {
                    console.error('Node Reference Error: There was an unexpected child node count (less than 3 child nodes) inside the parent .form-group element that is handling the newly uploaded image file.');
                }
                
                // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
                const reader = new FileReader();
                reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(new_img);
                reader.readAsDataURL(file);
            }
        });

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

        // 
        if (opts.value.length > 0)
        {
            let img_parent = document.createElement('div');
            img_parent.classList = opts.classes.img_parents;
            let img = document.createElement('img');
            img.classList = opts.classes.imgs;
            img.setAttribute('alt', opts.img_alt);
            img.setAttribute('src', opts.value);
            
            form_group.appendChild(img_parent);
            img_parent.appendChild(img);
        }

        form_group.appendChild(input_parent);
        input_parent.appendChild(input);
        
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

export { Upload_single_file_form_group };