// import class dependencies
import { Form_group_dropdown_select } from './data/Form_group_dropdown_select.js';

// import utility dependencies
import { apply_attributes, generate_cell, insert_text, remove_all_nodes } from '../html_elements/utilities/dom_generation.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { determine_dropdown_select_validation } from './utilities/determine_dropdown_select_validation.js';
import { settings_merge } from '../helpers/settings_merge.js';



export class Dropdown_select_form_group extends Form_group_dropdown_select {

    constructor (opts = false) {

        // get props from inhereted class
        super();

        // default input settings
        this.new_hidden_inputs = [
            {
                id : 'default-dropdown-select-id',
                name : 'default-dropdown-select-name',
                type : 'hidden',
                "data-key" : 'data-value',
                value : ''
            }
        ];

        // define default class CSS class settings/options
        this.class_css_classes = {
            dropdown_selects : 'btn-group border rounded py-0 w-100',
            dropdown_select_boxes : 'd-flex justify-content-between align-items-center rounded w-100 p-0',
            dropdown_select_symbols : 'py-2 px-3',
            dropdown_select_menus : 'dropdown-menu py-0 mb-1 w-100'
        };

        // define default class settings/options
        this.class_defaults = {
            
            // default component label text
            label : 'Default Dropdown Select',
            dropdown_symbol : '⇣',
            group_id : 'default-dropdown-select-group-id',
            dropdown_menu_styles : 'max-height: 180px; overflow-y: auto;',
            dropdown_item_styles : 'white-space: normal;',


            // default component help modal settings
            form_modal_text : {
                heading: 'Dropdown Selects',
                body: [{
                    type: 'paragraphs',
                    content: [ 'Dropdown Select form elements are great for uniform UIs across devices, and serve as an alternative to classic HTML select elements. These components can even handle multiple data values with the right options/settings passed in. Additionally, Dropdown Selects are fully compatible with this component set\'s custom validation functionalities. So they\'ll display errored status UI when unfulfilled and a success status UI when fufilled after an errored status!' ]
                }]
            },

            // default component form text settings
            form_text : {
                help    : ['Dropdown Select help text'],
                error   : ['Dropdown Select error text'],
                success : ['Dropdown Select success text']
            }

        };

        // 
        this.default_blueprint = {
            tag : 'div',
            attributes : {
                class : 'py-2 px-3'
            },
            text : 'Select An Option'
        };

        // 
        this.default_options = [
            {
                tag : 'div',
                attributes : {
                    class : 'dropdown-item py-2 px-3',
                    "data-value" : 'default'
                },
                text : 'Default Option Item'
            }
        ];

        // assign any class default attributes/settings
        Object.assign(this._defaults.hidden_inputs, this.new_hidden_inputs);
        Object.assign(this._defaults.classes, this.class_css_classes);
        Object.assign(this._defaults, this.class_defaults);
        Object.assign(this._defaults.blueprints.default, this.default_blueprint);
        this._defaults.blueprints.options = this.default_options;

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

        // create the dropdown select wrapping element
        let dropdown_select = document.createElement('div');
        dropdown_select.className = opts.classes.dropdown_selects;

        // create the dropdown select box element
        let dropdown_select_box = document.createElement('div');
        dropdown_select_box.className = opts.classes.dropdown_select_boxes;
        dropdown_select_box.setAttribute('data-toggle', 'dropdown');
        dropdown_select_box.setAttribute('aria-haspopup', 'true');
        dropdown_select_box.setAttribute('aria-expanded', 'false');
        dropdown_select_box.setAttribute('role', 'listbox');

        // create the dropdown select target element
        let dropdown_select_target = document.createElement('div');

        // 
        //dropdown_select_target.appendChild( generate_cell( [ opts.blueprints.default ] ) );

        // create the dropdown select dropdown symbol element
        let dropdown_select_symbol = document.createElement('div');
        dropdown_select_symbol.className = opts.classes.dropdown_select_symbols;
        insert_text(dropdown_select_symbol, opts.dropdown_symbol);

        // create the dropdown select menu element
        let dropdown_select_menu = document.createElement('div');
        dropdown_select_menu.className = opts.classes.dropdown_select_menus;
        dropdown_select_menu.setAttribute('style', opts.dropdown_menu_styles);

        // append all the elements created up to now
        form_group.appendChild(label_wrapper);
        label_wrapper.appendChild(label_el);
        label_wrapper.appendChild(label_button);
        label_button.appendChild(label_button_icon);
        form_group.appendChild(dropdown_select);
        dropdown_select.appendChild(dropdown_select_box);
        dropdown_select_box.appendChild(dropdown_select_target);
        dropdown_select_box.appendChild(dropdown_select_symbol);
        dropdown_select.appendChild(dropdown_select_menu);

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

        // set a temp var to hold any specified values before generating the default state markup
        let default_values = [];

        // loop through the hidden inputs
        for (var i = 0; i < opts.hidden_inputs.length; i++) {

            // create the hidden input element
            let hidden_input = document.createElement('input');
            apply_attributes(hidden_input, opts.hidden_inputs[i]);

            // 
            if (opts.hidden_inputs[i].value && opts.hidden_inputs[i].value !== '') {
                default_values.push( hidden_input.value )
            }

            //
            // HANDLE COMPONENT VALIDATION
            //

            // ONLY apply validation to the initial hidden input for a dropdown select
            // More is overkill...
            if (i === 0) {
                determine_dropdown_select_validation(opts, hidden_input, dropdown_select, label_el, form_help_text, form_error_text, form_success_text);
            }

            // append the input to the form group parent
            form_group.appendChild(hidden_input);

        }

        // determine the default markup state of the dropdown select component
        // (Key for getting server-side values and the default state for the user's UI matching on page load)

        let dv_length = default_values.length;

        if (dv_length > 0) {

            // loop through the values collected from generating the inputs
            for (var i = 0; i < dv_length; i++) {

                // and loop through each bluepring option
                for (var j = 0; j < opts.blueprints.options.length; j++) {

                    // ensure the option has attributes
                    if (opts.blueprints.options[j].attributes) {
                        
                        // and loop through each attribute
                        for (var key in opts.blueprints.options[j].attributes) {
                            
                            if (opts.blueprints.options[j].attributes.hasOwnProperty(key)) {
                                
                                // now check if the collected value matches this input's value
                                if (default_values[i] === opts.blueprints.options[j].attributes[key]) {
                                    
                                    // and generate the markup for this option and append it to the component
                                    dropdown_select_target.appendChild( generate_cell( [ opts.blueprints.options[j] ] ) );

                                    // remove the bootstrap class .dropdown-item to remove the :hover effect 
                                    // that would normally trigger according to the currend WDS SCSS
                                    // when this clone is placed back in the DOM
                                    dropdown_select_target.firstChild.classList.remove('dropdown-item');

                                }

                            }

                        }

                    }

                }

            }

        } else {

            // 
            dropdown_select_target.appendChild( generate_cell( [ opts.blueprints.default ] ) );

        }

        // 
        for (var i = 0; i < opts.blueprints.options.length; i++) {
            
            let option = generate_cell( [ opts.blueprints.options[i] ] );

            dropdown_select_menu.appendChild(option);

            dropdown_select_menu.lastChild.setAttribute('style', opts.dropdown_item_styles);

        }

        // 
        for (var i = 0; i < dropdown_select_menu.childNodes.length; i++) {
            
            dropdown_select_menu.childNodes[i].setAttribute('aria-describedby', opts.group_id + opts.aria_describedby_suffix);
            
            dropdown_select_menu.childNodes[i].addEventListener('click', function(e) {
                
                let clone = this.cloneNode(true);
                let parent = this.closest('.form-group');

                if (clone.hasAttributes()) {

                    for (var j = 0; j < clone.attributes.length; j++) {

                        const Regex = RegExp('data-value', 'g');

                        if (Regex.test(clone.attributes[j].name)) {
                            
                            let inputs = parent.querySelectorAll('input');

                            for (var k = 0; k < inputs.length; k++) {
                                
                                if (inputs[k].hasAttribute('data-key') && inputs[k].dataset.key === clone.attributes[j].name) {

                                    inputs[k].value = clone.attributes[j].value;

                                    if ( opts.enable_custom_validation === true ) {
                                        inputs[k].setAttribute('data-is-valid', 'true');
                                    }

                                    var change_event = new Event('change', {
                                        bubbles: true,
                                        cancelable: false,
                                    });
            
                                    inputs[k].dispatchEvent(change_event);

                                }

                            }

                        }

                    }

                }

                remove_all_nodes(dropdown_select_target);

                // remove the bootstrap class .dropdown-item to remove the :hover effect 
                // that would normally trigger according to the currend WDS SCSS
                // when this clone is placed back in the DOM
                clone.classList.remove('dropdown-item');

                dropdown_select_target.appendChild(clone);

            });

        }

        //
        // HANDLE COMPONENT LISTENERS
        //

        label_button.addEventListener('click', function(e) {
            
            let modalCheck = document.getElementById(opts.group_id + '-modal');
            
            if (!modalCheck) {
                
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