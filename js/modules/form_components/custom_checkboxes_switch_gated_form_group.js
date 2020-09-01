import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { settings_merge } from '../helpers/settings_merge.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';

class Custom_checkboxes_switch_gated_form_group
{
    constructor (opts = false)
    {
        /** 
         * Custom Checkboxes Switch Gated Form Group
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
                form_success_texts      : defaults.classes.form_success_texts,
                switch_parents          : 'custom-control custom-switch',
                switches                : defaults.classes.checkboxes,
                switch_labels           : defaults.classes.checkbox_labels,
                switch_collapses        : 'collapse',
                checkboxes_cards        : 'card card-body bg-transparent border-0 pt-2 pb-0',
                all_buttons_parents     : 'd-flex',
                check_all_buttons       : 'btn btn-sm btn-link text-decoration-none pt-2 pl-0',
                uncheck_all_buttons     : 'btn btn-sm btn-link text-decoration-none pt-2'
            },
            aria_describedby_suffix        : defaults.aria_describedby_suffix,
            error_text_suffix              : defaults.error_text_suffix,
            success_text_suffix            : defaults.success_text_suffix,
            switch_collapse_suffix         : '-collapse',
            group_id                       : 'default-switch-gated-checkboxes',
            label                          : 'Default Switch Gated Checkboxes',
            initial_switch_checked_state   : false,
            initial_collapse_visible_state : false,
            autocomplete_disabled          : true,
            clear_checkboxes_on_collapse   : true,
            enable_check_all               : true,
            enable_uncheck_all             : true,
            check_all_suffix               : '-check-all',
            uncheck_all_suffix             : '-uncheck-all',
            check_all_button_text          : 'Check All',
            uncheck_all_button_text        : 'Uncheck All',
            enable_on_collapse_action      : true,
            on_collapse_action             : 'uncheckall', // strict value: "uncheckall" or "checkall" to get expected action upon collapse
            switch : {
                suffix        : '-switch',
                initial_label : 'Initial Switch Label',
                changed_label : 'Changed Switch Label',
                // switch name attribute should be variable from the group_id value
                // that's used as the id for the switch 
                // along with the switch.suffix value!
                name          : 'switch-default-name', 
                value         : ''
            },
            form_text : {
                help    : 'Default Switch Gated Checkboxes help text',
                error   : 'Default Switch Gated Checkboxes error text',
                success : 'Default Switch Gated Checkboxes success text'
            },
            form_modal_text : {
                heading: 'Default Switch Gated Checkboxes',
                body: [{
                    type: 'paragraphs',
                    content: [ 'The Default Switch Gated Checkboxes Component is a complex component offering end users a primary toggle with two different switch states and two different text labels states. The toggle state then determines the visibility of a collapsable set of standard checkboxes.', 'This UI pattern is especially useful for privacy settings in an application. For example, you may want a user to have a 1-click UI element to make data private, but also leverage the same UI element to serve as a transitional interaction leading to a list of specific options, to give the user the ability to control the visibility of a spceific data point across a variety of contexts in your application.' ]
                }]
            },
            checkboxes  : [
                {
                    label: 'Default Checkbox 1',
                    attributes: {
                        id    : 'default-switch-checkbox-1',
                        name  : 'default-switch-checkbox-1',
                        value : 'value1'
                    }
                },
                {
                    label: 'Default Checkbox 2',
                    attributes: {
                        id    : 'default-switch-checkbox-2',
                        name  : 'default-switch-checkbox-2',
                        value : 'value2'
                    }
                }
            ]
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
        



        // create the parent element for the checkbox
        let switch_parent = document.createElement('div');
        switch_parent.className = opts.classes.switch_parents;

        // create the checkbox element
        let switch_input = document.createElement('input');
        switch_input.className = opts.classes.switches;
        switch_input.id = opts.group_id + opts.switch.suffix;
        switch_input.setAttribute('name', opts.switch.name);
        switch_input.setAttribute('type', 'checkbox');
        switch_input.value = opts.switch.value;
        switch_input.setAttribute('aria-describedby', opts.group_id + opts.aria_describedby_suffix);

        // set the initial checked state of the switch
        if (opts.initial_switch_checked_state === true) { switch_input.checked = true; } else { switch_input.checked = false; }

        // set the autocomplete data attribute if the option is on in the settings
        if (opts.autocomplete_disabled === true) { switch_input.setAttribute('autocomplete', 'off'); }

        // create the label and label text node elements
        let switch_label = document.createElement('label');
        switch_label.className = opts.classes.switch_labels;
        switch_label.setAttribute('for', opts.group_id + opts.switch.suffix);
        let switch_label_txt = document.createTextNode(opts.switch.initial_label);

        // append all the elements
        switch_parent.appendChild(switch_input);
        switch_parent.appendChild(switch_label);
        switch_label.appendChild(switch_label_txt);

        // append the parent to the current form group
        form_group.appendChild(switch_parent);




        // create the collapse element that will hold the checkboxes and serve as the collapse parent
        let switch_collapse = document.createElement('div');
        switch_collapse.id = opts.group_id + opts.switch_collapse_suffix;

        // if the initial collapse visible state option if true
        if (opts.initial_collapse_visible_state === true)
        {
            // append the CSS class needed to make the collapse element visible upon render
            // to the CSS class(es) defined in the settings
            switch_collapse.className = opts.classes.switch_collapses + ' show';

            // set the data attribute to designate the state as visible
            switch_input.setAttribute('aria-expanded', 'true');
        }
        else
        {
            // otherwise just use the CSS class(es) defined in the settings
            switch_collapse.className = opts.classes.switch_collapses;

            // and set the data attribute to designate the state as not visible
            switch_input.setAttribute('aria-expanded', 'false');
        }

        // create the card element that will hold all of the gated checkboxes
        let checkboxes_card = document.createElement('div');
        checkboxes_card.className = opts.classes.checkboxes_cards;

        // append the parent to the current form group
        form_group.appendChild(switch_collapse);
        switch_collapse.appendChild(checkboxes_card);




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
            
            // append the parent to the checkboxes card
            checkboxes_card.appendChild(parent);
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




        // add the event listner to the switch input to drive component's collapse functionality
        switch_input.addEventListener('change', function(event){

            // get a reference to the label node that will receive text changes
            let label = this.nextElementSibling;
            
            // if the settings call for an initial state of the switch being checked
            if (opts.initial_switch_checked_state === true)
            {
                // and if the switch is currently checked
                if (this.checked == true)
                {
                    // set the label text as the initial label text
                    label.textContent = opts.switch.initial_label;
                }
                else if (this.checked == false)
                {
                    // otherwise set the label text as the changed label text
                    label.textContent = opts.switch.changed_label;
                }
            }
            // otherwise if the settings call for an initial state of the switch being unchecked
            else
            {
                // and if the switch is currently checked
                if (this.checked == true)
                {
                    // set the label text as the changed label text
                    label.textContent = opts.switch.changed_label;
                }
                else if (this.checked == false)
                {
                    // otherwise set the label text as the initial label text
                    label.textContent = opts.switch.initial_label;
                }
            }

            // next get the current state of the collapse element from data attributes
            // that are added dynamically the switch in this component
            let curent_expanded_state = this.getAttribute('aria-expanded');

            // conditionally check the current state value as boolean string values
            if (curent_expanded_state === 'false')
            {
                // toggle the collapse's data attribute value
                this.setAttribute('aria-expanded', 'true');
            }
            else if (curent_expanded_state === 'true')
            {
                // toggle the collapse's data attribute value
                this.setAttribute('aria-expanded', 'false');

                // if the enable upon collapse action setting is enabled
                if (opts.enable_on_collapse_action === true)
                {
                    // set an empty var for the conditional boolean value
                    let checkBool;

                    // conditionally check the value of the on collapse action setting for strict string values
                    if (opts.on_collapse_action === 'uncheckall')
                    {
                        // if uncheckall is the value, then set our bool to false
                        checkBool = false;
                    }
                    else if (opts.on_collapse_action === 'checkall')
                    {
                        // if checkall is the value, then set our bool to true
                        checkBool = true;
                    }

                    // get a node list of the checkboxes in the switch group
                    let checks = this.parentNode.nextSibling.querySelectorAll('input[type=checkbox]');

                    // loop through the node list
                    for (var i = 0; i < checks.length; i++)
                    {
                        // and mark each checkbox as checked/unchecked according to the component settings
                        checks[i].checked = checkBool;
                    }
                        
                }
            }

            // 
            $('#' + opts.group_id + opts.switch_collapse_suffix).collapse('toggle');
            
        });


        // add check/uncheck all elements and event listners according to passed settings data
        if (opts.enable_check_all === true || opts.enable_uncheck_all === true)
        {
            // create the parent element for the check/uncheck all buttons
            let all_buttons_parent = document.createElement('div');
            all_buttons_parent.className = opts.classes.all_buttons_parents;
            
            // if the check all button is enabled
            if (opts.enable_check_all === true)
            {
                // create the check all button and text elements
                let check_btn = document.createElement('button');
                check_btn.className = opts.classes.check_all_buttons;
                check_btn.setAttribute('type', 'button');
                check_btn.id = opts.group_id + opts.check_all_suffix;
                let check_btn_txt = document.createTextNode(opts.check_all_button_text);
                check_btn.appendChild(check_btn_txt);

                // add the click event listner to check all checkboxes
                check_btn.addEventListener('click', function(event)
                {
                    // get a node list of the checkboxes in the switch group
                    let checks = this.parentNode.parentNode.querySelectorAll('input[type=checkbox]');
                    
                    // loop through the node list and mark each checkbox as checked
                    for (var i = 0; i < checks.length; i++)
                    {
                        checks[i].checked = true;
                    }
                });

                // append the button to the parent
                all_buttons_parent.appendChild(check_btn);
            }

            // if the uncheck all button is enabled
            if (opts.enable_uncheck_all === true)
            {
                // create the uncheck all button and text elements
                let uncheck_btn = document.createElement('button');
                uncheck_btn.className = opts.classes.uncheck_all_buttons;
                uncheck_btn.setAttribute('type', 'button');
                uncheck_btn.id = opts.group_id + opts.uncheck_all_suffix;
                let uncheck_btn_txt = document.createTextNode(opts.uncheck_all_button_text);
                uncheck_btn.appendChild(uncheck_btn_txt);

                // add the click event listner to uncheck all checkboxes
                uncheck_btn.addEventListener('click', function(event)
                {
                    // get a node list of the checkboxes in the switch group
                    let checks = this.parentNode.parentNode.querySelectorAll('input[type=checkbox]');
                    
                    // loop through the node list and mark each checkbox as not checked
                    for (var i = 0; i < checks.length; i++)
                    {
                        checks[i].checked = false;
                    }
                });

                // append the button to the parent
                all_buttons_parent.appendChild(uncheck_btn);
            }

            // append the parent to the checkboxes card
            checkboxes_card.appendChild(all_buttons_parent);
        }



        
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

export { Custom_checkboxes_switch_gated_form_group };