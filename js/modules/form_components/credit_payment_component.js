import { form_group_defaults as defaults } from './data/form_group_defaults.js';
import { clear_user_value } from './utilities/clear_user_value.js';
import { generate_form_help_modal } from './utilities/generate_form_help_modal.js';
import { get_partial_cc_icon_classes } from './utilities/get_partial_cc_icon_classes.js';

import IMask from '../plugins/imask/index.js';
import { set_imask_format } from './utilities/set_imask_format.js';

class Credit_payment_component
{
    constructor (opts = false)
    {
        this.defaults = {
            classes: {
                form_groups        : defaults.classes.form_groups,
                label_wrappers     : defaults.classes.label_wrappers,
                labels             : defaults.classes.labels,
                label_buttons      : defaults.classes.label_buttons,
                label_button_icons : defaults.classes.label_button_icons,
                inputs             : defaults.classes.inputs,
                clear_text_parents : defaults.classes.clear_text_parents,
                clear_text_buttons : defaults.classes.clear_text_buttons,
                form_text_wrappers : defaults.classes.form_text_wrappers,
                form_text_parents  : defaults.classes.form_text_parents,
                form_help_texts    : defaults.classes.form_help_texts,
                form_error_texts   : defaults.classes.form_error_texts,
                form_success_texts : defaults.classes.form_success_texts
            },
            aria_describedby_suffix  : defaults.aria_describedby_suffix,
            error_text_suffix        : defaults.error_text_suffix,
            success_text_suffix      : defaults.success_text_suffix,
            characters_count_suffix  : defaults.characters_count_suffix,
            max_characters           : defaults.max_characters,
            clear_text_button_styles : defaults.clear_text_button_styles,
            clear_text_button_text   : defaults.clear_text_button_text,
            masking: {
                enable    : defaults.masking.enable,
                type      : defaults.masking.type,
                min       : defaults.masking.min,
                max       : defaults.masking.max,
                seperator : defaults.masking.seperator
            }
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.class_defaults = (opts) ? Object.assign(this.defaults, opts) : this.defaults;
        
        /*

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
        this.max_characters           = opts.max_characters           ? opts.max_characters           : defaults.max_characters;
        this.clear_text_button_styles = opts.clear_text_button_styles ? opts.clear_text_button_styles : defaults.clear_text_button_styles;
        this.clear_text_button_text   = opts.clear_text_button_text   ? opts.clear_text_button_text   : defaults.clear_text_button_text;

        this.masking = {
            enable    : opts.enable    ? opts.enable    : defaults.masking.enable,
            type      : opts.type      ? opts.type      : defaults.masking.type,
            min       : opts.min       ? opts.min       : defaults.masking.min,
            max       : opts.max       ? opts.max       : defaults.masking.max,
            seperator : opts.seperator ? opts.seperator : defaults.masking.seperator
        };
        
        */
    }

    /** 
     * Generate Method : Generates a BS4 Input Form Group, with a label, help modal data, an input, and help/error/success text content
     * @param {Xxxxxx} Xxxxxx : Xxxxxx
     */

    generate (opts = false)
    {
        // dupe the class to a variable to access class data (while inside a listner)
        let thisClass = this;
        
        // set the options if passed or use default values
        let default_options = {
            id: 'default-cc-payment-id',
            features: {
                outer_label: true
            },
            classes: {
                outer_label              : 'd-block mb-2',
                section                  : 'bg-white border border-gray-400 p-3 rounded-lg mb-4',
                heading                  : 'd-flex justify-content-between align-items-center pb-3',
                legend                   : 'text-primary mb-0',
                reset_parent             : 'pl-3',
                reset_button             : 'btn btn-xxs btn-outline-primary',
                label_wrapper            : thisClass.class_defaults.classes.label_wrappers,
                label                    : thisClass.class_defaults.classes.labels,
                label_button             : thisClass.class_defaults.classes.label_buttons,
                label_button_icon        : thisClass.class_defaults.classes.label_button_icons,
                card_number_icon_wrapper : 'text-right pr-1',
                card_number_icon_parent  : 'position-relative',
                card_number_icon         : 'fas fa-credit-card',
                form_text_parents        : 'text-left',
                row                      : 'row',
                row_column_1             : 'col-sm-7 pb-2 pb-sm-0',
                row_column_2             : 'col-sm-5',
                sub_row                  : 'form-row',
                sub_row_column_1         : 'col-5',
                sub_row_column_2         : 'col-2 text-lg text-center',
                sub_row_column_3         : 'col-5',
                sub_row_2                : 'form-row justify-content-end',
                sub_row_2_column         : 'col-sm-9'
            },
            inputs: {
                card_number: {
                    classes: {
                        form_group: 'form-group mb-1',
                        input: thisClass.class_defaults.classes.inputs,
                        clear_button: thisClass.class_defaults.classes.clear_text_buttons
                    },
                    type: 'tel',
                    placeholder: '0000 0000 0000 0000',
                    suffix: '-card-number',
                    name: 'default-cc-payment-id-card-number',
                    value: '',
                    styles: {
                        clear_icon_button  : 'top:-47px;'
                    },
                    masking: {
                        enable: true,
                        type: 'credit'
                    }
                },
                card_name: {
                    classes: {
                        form_group: 'form-group mb-2',
                        input: 'form-control',
                        clear_button: 'btn position-relative opacity-50 p-2 border-0 bg-transparent'
                    },
                    type: 'text',
                    placeholder: 'CARDHOLDER NAME',
                    suffix: '-card-name',
                    name: 'default-cc-payment-id-card-name',
                    value: '',
                    styles: {
                        clear_icon_button  : 'top:-39px;'
                    },
                    masking: {
                        enable: false
                    },
                    form_text: {
                        help    : 'Enter a card number & name exctly as they appear on your card',
                        error   : 'This is the card number and name error text',
                        success : 'This is the card number and name success text'
                    }
                },
                card_month: {
                    classes: {
                        form_group: 'form-group mb-0',
                        input: 'form-control form-control-sm',
                        clear_button: 'btn position-relative opacity-50 p-2 border-0 bg-transparent'
                    },
                    type: 'tel',
                    placeholder: '00',
                    suffix: '-card-month',
                    name: 'default-cc-payment-id-card-month',
                    value: '',
                    styles: {
                        clear_icon_button  : 'top:-37px;'
                    },
                    masking: {
                        enable: true,
                        type: 'two_digits'
                    },
                    form_text: {
                        help    : 'Enter card expiration Month / Year',
                        error   : 'This is the card number and name error text',
                        success : 'This is the card number and name success text'
                    }
                },
                card_year: {
                    classes: {
                        form_group: 'form-group mb-0',
                        input: 'form-control form-control-sm',
                        clear_button: 'btn position-relative opacity-50 p-2 border-0 bg-transparent'
                    },
                    type: 'tel',
                    placeholder: '00',
                    suffix: '-card-year',
                    name: 'default-cc-payment-id-card-year',
                    value: '',
                    styles: {
                        clear_icon_button  : 'top:-37px;'
                    },
                    masking: {
                        enable: true,
                        type: 'two_digits'
                    }
                },
                card_cv: {
                    classes: {
                        form_group: 'form-group mb-0',
                        input: 'form-control form-control-sm',
                        clear_button: 'btn position-relative opacity-50 p-2 border-0 bg-transparent'
                    },
                    type: 'tel',
                    placeholder: '000',
                    suffix: '-card-cv',
                    name: 'default-cc-payment-id-card-cv',
                    value: '',
                    styles: {
                        clear_icon_button  : 'top:-37px;'
                    },
                    masking: {
                        enable: true,
                        type: 'four_digits'
                    },
                    form_text: {
                        help    : '3-4 digit code',
                        error   : 'This is the card number and name error text',
                        success : 'This is the card number and name success text'
                    }
                }
            },
            text: {
                outer_label: 'Payment Information:',
                legend: 'CREDIT CARD',
                reset_button: 'RESET',
                card_number_label: 'Enter Your Card Number/Name:',
                card_expiration_label: 'Expiration Date:',
                card_cv_label: 'CV Code:',
                card_expiration_divider : '/',
                card_number_modal_text: {
                    heading: 'Card Number & Name',
                    body: [{
                        type: 'paragraphs',
                        content: [ 'Enter your card number and the card holder name exactly as they appear on your card.' ]
                    }]
                },
                card_month_modal_text: {
                    heading: 'Card Expiration Date',
                    body: [{
                        type: 'paragraphs',
                        content: [ 'Enter your card month and year as they appear on your card. Both should be 2-digit numbers.' ]
                    }]
                },
                card_cv_modal_text: {
                    heading: 'Card CV Code',
                    body: [{
                        type: 'paragraphs',
                        content: [ 'Your card CV Code is generally on the back of your card and is 3 digits long. For American Express cards however, this code is often on the front of your card and is 4 digits long.' ]
                    }]
                }
            }
        };

        
        // merge any passed options settings into the default settings to get a final settings object
        let settings = (opts) ? Object.assign(default_options, opts) : default_options;


        // create the form group element
        let component = document.createElement('fieldset');
        component.id = settings.id;

        // check if outer label feature is enabled
        if (settings.features.outer_label === true)
        {
            // if so then create outer label elements
            let outer_label = document.createElement('label');
            outer_label.className = settings.classes.outer_label;
            let outer_label_txt = document.createTextNode(settings.text.outer_label);

            // and append the elements to the component
            outer_label.appendChild(outer_label_txt);
            component.appendChild(outer_label);
        }

        // create the section element and append it to the component
        let section = document.createElement('section');
        section.className = settings.classes.section;
        component.appendChild(section);

        // create the heading element and append it to the section
        let heading = document.createElement('heading');
        heading.className = settings.classes.heading;
        section.appendChild(heading);

        // create the legend element and append it to the heading
        let legend = document.createElement('legend');
        legend.className = settings.classes.legend;
        let legend_txt = document.createTextNode(settings.text.legend);
        legend.appendChild(legend_txt);
        heading.appendChild(legend);

        // create the reset button parent element and append it to the heading
        let reset_parent = document.createElement('div');
        reset_parent.className = settings.classes.reset_parent;
        heading.appendChild(reset_parent);

        // create the reset button element and append it to the reset button parent
        let reset_button = document.createElement('button');
        reset_button.className = settings.classes.reset_button;
        reset_button.setAttribute('type', 'button');
        let reset_button_txt = document.createTextNode(settings.text.reset_button);
        reset_button.appendChild(reset_button_txt);
        reset_parent.appendChild(reset_button);

        // create the card number input form group element and append it to the section
        let card_number_form_group = document.createElement('div');
        card_number_form_group.className = settings.inputs.card_number.classes.form_group;
        section.appendChild(card_number_form_group);

        // create the card number input label parent element and append it to the card number input form group
        let card_number_label_parent = document.createElement('div');
        card_number_label_parent.className = settings.classes.label_wrapper;
        card_number_form_group.appendChild(card_number_label_parent);

        // create the card number input label element and append it to the card number input label parent
        let card_number_label = document.createElement('label');
        card_number_label.className = settings.classes.label;
        card_number_label.setAttribute('for', settings.id + settings.inputs.card_number.suffix);
        let card_number_label_txt = document.createTextNode(settings.text.card_number_label);
        card_number_label.appendChild(card_number_label_txt);
        card_number_label_parent.appendChild(card_number_label);

        // create the button element for the input help modal
        let card_number_label_button = document.createElement('button');
        card_number_label_button.className = settings.classes.label_button;
        card_number_label_button.setAttribute('type', 'button');
        card_number_label_button.setAttribute('data-toggle', 'modal');
        card_number_label_button.setAttribute('data-target', '#' + settings.id + settings.inputs.card_number.suffix + '-modal');
        card_number_label_parent.appendChild(card_number_label_button);

        // create the font awesome label button icon element
        let card_number_label_button_icon = document.createElement('i');
        card_number_label_button_icon.className = settings.classes.label_button_icon;
        card_number_label_button.appendChild(card_number_label_button_icon);

        // create the input element
        let card_number_input = document.createElement('input');
        card_number_input.className = settings.inputs.card_number.classes.input;
        card_number_input.setAttribute('type', settings.inputs.card_number.type);
        card_number_input.setAttribute('placeholder', settings.inputs.card_number.placeholder);
        card_number_input.setAttribute('id', settings.id + settings.inputs.card_number.suffix);
        card_number_input.setAttribute('name', settings.inputs.card_number.name);
        card_number_input.setAttribute('value', settings.inputs.card_number.value);
        // NEED TO FIX THIS -> card_number_input.setAttribute('aria-describedby', settings.id + thisClass.class_defaults.aria_describedby_suffix);

        // handle masking plugin options
        let card_number_input_maskedInput;
        if (settings.inputs.card_number.masking.enable && settings.inputs.card_number.masking.enable === true)
        {
            let imask_opts = set_imask_format(settings.inputs.card_number.masking.type);
            card_number_input_maskedInput = IMask(card_number_input, imask_opts);
        }

        card_number_form_group.appendChild(card_number_input);

        // create the card number icon wrapper element
        let card_number_icon_wrapper = document.createElement('div');
        card_number_icon_wrapper.className = settings.classes.card_number_icon_wrapper;
        card_number_icon_wrapper.style.height = '0px';
        card_number_form_group.appendChild(card_number_icon_wrapper);

        // create the card number icon parent span element
        let card_number_icon_button = document.createElement('button');
        card_number_icon_button.className = settings.inputs.card_number.classes.clear_button;
        card_number_icon_button.setAttribute('type', 'button');
        card_number_icon_button.setAttribute('style', settings.inputs.card_number.styles.clear_icon_button);
        card_number_icon_wrapper.appendChild(card_number_icon_button);

        // create the card number icon element
        let card_number_icon = document.createElement('i');
        card_number_icon.className = settings.classes.card_number_icon;
        card_number_icon_button.appendChild(card_number_icon);






        // create the card name input form group element and append it to the section
        let card_name_form_group = document.createElement('div');
        card_name_form_group.className = settings.inputs.card_name.classes.form_group;
        section.appendChild(card_name_form_group);

        // create the input element
        let card_name_input = document.createElement('input');
        card_name_input.className = settings.inputs.card_name.classes.input;
        card_name_input.setAttribute('type', settings.inputs.card_name.type);
        card_name_input.setAttribute('placeholder', settings.inputs.card_name.placeholder);
        card_name_input.setAttribute('id', settings.id + settings.inputs.card_name.suffix);
        card_name_input.setAttribute('name', settings.inputs.card_name.name);
        card_name_input.setAttribute('value', settings.inputs.card_name.value);
        // NEED TO FIX THIS -> card_name_input.setAttribute('aria-describedby', settings.id + thisClass.class_defaults.aria_describedby_suffix);

        // handle masking plugin options
        let card_name_input_maskedInput;
        if (settings.inputs.card_name.masking.enable && settings.inputs.card_name.masking.enable === true)
        {
            let imask_opts = set_imask_format(settings.inputs.card_name.masking.type);
            card_name_input_maskedInput = IMask(card_name_input, imask_opts);
        }

        card_name_form_group.appendChild(card_name_input);

        // create the parent text clear element
        let card_name_clear_text_parent = document.createElement('div');
        card_name_clear_text_parent.className = thisClass.class_defaults.classes.clear_text_parents;
        card_name_clear_text_parent.style.height = '0px';
        card_name_form_group.appendChild(card_name_clear_text_parent);

        // create the text clear button element
        let card_name_clear_text_button = document.createElement('button');
        card_name_clear_text_button.className = settings.inputs.card_name.classes.clear_button;
        card_name_clear_text_button.setAttribute('type', 'button');
        card_name_clear_text_button.setAttribute('style', settings.inputs.card_name.styles.clear_icon_button);
        card_name_clear_text_button.addEventListener('click', function(e) {
            clear_user_value(settings.id + settings.inputs.card_name.suffix);
        });
        let card_name_clear_text_button_txt = document.createTextNode(thisClass.class_defaults.clear_text_button_text);
        card_name_clear_text_button.appendChild(card_name_clear_text_button_txt);
        card_name_clear_text_parent.appendChild(card_name_clear_text_button);

        // create the card name input form group element and append it to the section
        let card_name_form_text_parent = document.createElement('div');
        card_name_form_text_parent.className = settings.classes.form_text_parents;
        card_name_form_group.appendChild(card_name_form_text_parent);

        // create the form help text elements
        let card_name_form_help_text = document.createElement('small');
        card_name_form_help_text.className = thisClass.class_defaults.classes.form_help_texts;
        card_name_form_help_text.setAttribute('id', settings.id + settings.inputs.card_name.suffix + thisClass.class_defaults.aria_describedby_suffix);
        let card_name_form_help_text_text = document.createTextNode(settings.inputs.card_name.form_text.help);
        card_name_form_help_text.appendChild(card_name_form_help_text_text);
        card_name_form_text_parent.appendChild(card_name_form_help_text);

        // create the form error text elements
        let card_name_form_error_text = document.createElement('small');
        card_name_form_error_text.className = thisClass.class_defaults.classes.form_error_texts;
        card_name_form_error_text.setAttribute('id', settings.id + settings.inputs.card_name.suffix + thisClass.class_defaults.error_text_suffix);
        let card_name_form_error_text_text = document.createTextNode(settings.inputs.card_name.form_text.error);
        card_name_form_error_text.appendChild(card_name_form_error_text_text);
        card_name_form_text_parent.appendChild(card_name_form_error_text);

        // create the form success text elements
        let card_name_form_success_text = document.createElement('small');
        card_name_form_success_text.className = thisClass.class_defaults.classes.form_success_texts;
        card_name_form_success_text.setAttribute('id', settings.id + settings.inputs.card_name.suffix + thisClass.class_defaults.success_text_suffix);
        let card_name_form_success_text_text = document.createTextNode(settings.inputs.card_name.form_text.success);
        card_name_form_success_text.appendChild(card_name_form_success_text_text);
        card_name_form_text_parent.appendChild(card_name_form_success_text);

        





        
        
        
       

        // create the font awesome label button icon element
        let row = document.createElement('div');
        row.className = settings.classes.row;
        section.appendChild(row);

        // create the font awesome label button icon element
        let row_column_1 = document.createElement('div');
        row_column_1.className = settings.classes.row_column_1;
        row.appendChild(row_column_1);



        // create the expiration inputs label parent element
        let exp_label_wrapper = document.createElement('div');
        exp_label_wrapper.className = settings.classes.label_wrapper;
        row_column_1.appendChild(exp_label_wrapper);

        // create the expiration inputs label element
        let expiration_label = document.createElement('label');
        expiration_label.className = settings.classes.label;
        expiration_label.setAttribute('for', settings.id + settings.inputs.card_month.suffix);
        let expiration_label_txt = document.createTextNode(settings.text.card_expiration_label);
        expiration_label.appendChild(expiration_label_txt);
        exp_label_wrapper.appendChild(expiration_label);

        // create the expiration button element
        let expiration_label_button = document.createElement('button');
        expiration_label_button.className = settings.classes.label_button;
        expiration_label_button.setAttribute('type', 'button');
        expiration_label_button.setAttribute('data-toggle', 'modal');
        expiration_label_button.setAttribute('data-target', '#' + settings.id + settings.inputs.card_month.suffix + '-modal');
        exp_label_wrapper.appendChild(expiration_label_button);

        // create the expiration font awesome icon element
        let expiration_label_button_icon = document.createElement('i');
        expiration_label_button_icon.className = settings.classes.label_button_icon;
        expiration_label_button.appendChild(expiration_label_button_icon);



        // create the sub row element
        let sub_row = document.createElement('div');
        sub_row.className = settings.classes.sub_row;
        row_column_1.appendChild(sub_row);

        // create the sub row first column element
        let sub_row_column_1 = document.createElement('div');
        sub_row_column_1.className = settings.classes.sub_row_column_1;
        sub_row.appendChild(sub_row_column_1);

        // create the month input form group element
        let month_form_group = document.createElement('div');
        month_form_group.className = settings.inputs.card_month.classes.form_group;
        sub_row_column_1.appendChild(month_form_group);

        // create the input element
        let card_month_input = document.createElement('input');
        card_month_input.className = settings.inputs.card_month.classes.input;
        card_month_input.setAttribute('type', settings.inputs.card_month.type);
        card_month_input.setAttribute('placeholder', settings.inputs.card_month.placeholder);
        card_month_input.setAttribute('id', settings.id + settings.inputs.card_month.suffix);
        card_month_input.setAttribute('name', settings.inputs.card_month.name);
        card_month_input.setAttribute('value', settings.inputs.card_month.value);
        // NEED TO FIX THIS -> card_month_input.setAttribute('aria-describedby', settings.id + thisClass.class_defaults.aria_describedby_suffix);

        // handle masking plugin options
        let card_month_input_maskedInput;
        if (settings.inputs.card_month.masking.enable && settings.inputs.card_month.masking.enable === true)
        {
            let imask_opts = set_imask_format(settings.inputs.card_month.masking.type);
            card_month_input_maskedInput = IMask(card_month_input, imask_opts);
        }

        month_form_group.appendChild(card_month_input);

        // create the parent text clear element
        let month_clear_text_parent = document.createElement('div');
        month_clear_text_parent.className = thisClass.class_defaults.classes.clear_text_parents;
        month_clear_text_parent.style.height = '0px';
        month_form_group.appendChild(month_clear_text_parent);

        // create the text clear button element
        let month_clear_button = document.createElement('button');
        month_clear_button.className = settings.inputs.card_month.classes.clear_button;
        month_clear_button.setAttribute('type', 'button');
        month_clear_button.setAttribute('style', settings.inputs.card_month.styles.clear_icon_button);
        month_clear_button.addEventListener('click', function(e) {
            clear_user_value(settings.id + settings.inputs.card_month.suffix);
        });
        let card_month_clear_text_button_txt = document.createTextNode(thisClass.class_defaults.clear_text_button_text);
        month_clear_button.appendChild(card_month_clear_text_button_txt);
        month_clear_text_parent.appendChild(month_clear_button);


        // create the sub row second column element
        let sub_row_column_2 = document.createElement('div');
        sub_row_column_2.className = settings.classes.sub_row_column_2;
        let sub_row_column_2_txt = document.createTextNode(settings.text.card_expiration_divider);
        sub_row_column_2.appendChild(sub_row_column_2_txt);
        sub_row.appendChild(sub_row_column_2);


        // create the sub row first column element
        let sub_row_column_3 = document.createElement('div');
        sub_row_column_3.className = settings.classes.sub_row_column_3;
        sub_row.appendChild(sub_row_column_3);

        // create the year input form group element
        let year_form_group = document.createElement('div');
        year_form_group.className = settings.inputs.card_year.classes.form_group;
        sub_row_column_3.appendChild(year_form_group);

        // create the input element
        let year_input = document.createElement('input');
        year_input.className = settings.inputs.card_year.classes.input;
        year_input.setAttribute('type', settings.inputs.card_year.type);
        year_input.setAttribute('placeholder', settings.inputs.card_year.placeholder);
        year_input.setAttribute('id', settings.id + settings.inputs.card_year.suffix);
        year_input.setAttribute('name', settings.inputs.card_year.name);
        year_input.setAttribute('value', settings.inputs.card_year.value);
        // NEED TO FIX THIS -> year_input.setAttribute('aria-describedby', settings.id + thisClass.class_defaults.aria_describedby_suffix);

        // handle masking plugin options
        let year_input_maskedInput;
        if (settings.inputs.card_year.masking.enable && settings.inputs.card_year.masking.enable === true)
        {
            let imask_opts = set_imask_format(settings.inputs.card_year.masking.type);
            year_input_maskedInput = IMask(year_input, imask_opts);
        }

        year_form_group.appendChild(year_input);

        // create the parent text clear element
        let year_clear_text_parent = document.createElement('div');
        year_clear_text_parent.className = thisClass.class_defaults.classes.clear_text_parents;
        year_clear_text_parent.style.height = '0px';
        year_form_group.appendChild(year_clear_text_parent);

        // create the text clear button element
        let year_clear_button = document.createElement('button');
        year_clear_button.className = settings.inputs.card_year.classes.clear_button;
        year_clear_button.setAttribute('type', 'button');
        year_clear_button.setAttribute('style', settings.inputs.card_year.styles.clear_icon_button);
        year_clear_button.addEventListener('click', function(e) {
            clear_user_value(settings.id + settings.inputs.card_year.suffix);
        });
        let card_year_clear_text_button_txt = document.createTextNode(thisClass.class_defaults.clear_text_button_text);
        year_clear_button.appendChild(card_year_clear_text_button_txt);
        year_clear_text_parent.appendChild(year_clear_button);

        // 
        let exp_form_text_parent = document.createElement('div');
        exp_form_text_parent.className = settings.classes.form_text_parents;
        row_column_1.appendChild(exp_form_text_parent);

        // create the form help text elements
        let exp_form_help_text = document.createElement('small');
        exp_form_help_text.className = thisClass.class_defaults.classes.form_help_texts;
        exp_form_help_text.setAttribute('id', settings.id + settings.inputs.card_month.suffix + thisClass.class_defaults.aria_describedby_suffix);
        let exp_form_help_text_text = document.createTextNode(settings.inputs.card_month.form_text.help);
        exp_form_help_text.appendChild(exp_form_help_text_text);
        exp_form_text_parent.appendChild(exp_form_help_text);

        // create the form error text elements
        let exp_form_error_text = document.createElement('small');
        exp_form_error_text.className = thisClass.class_defaults.classes.form_error_texts;
        exp_form_error_text.setAttribute('id', settings.id + settings.inputs.card_month.suffix + thisClass.class_defaults.error_text_suffix);
        let exp_form_error_text_text = document.createTextNode(settings.inputs.card_month.form_text.error);
        exp_form_error_text.appendChild(exp_form_error_text_text);
        exp_form_text_parent.appendChild(exp_form_error_text);

        // create the form success text elements
        let exp_form_success_text = document.createElement('small');
        exp_form_success_text.className = thisClass.class_defaults.classes.form_success_texts;
        exp_form_success_text.setAttribute('id', settings.id + settings.inputs.card_month.suffix + thisClass.class_defaults.success_text_suffix);
        let exp_form_success_text_text = document.createTextNode(settings.inputs.card_month.form_text.success);
        exp_form_success_text.appendChild(exp_form_success_text_text);
        exp_form_text_parent.appendChild(exp_form_success_text);



        // 
        let row_column_2 = document.createElement('div');
        row_column_2.className = settings.classes.row_column_2;
        row.appendChild(row_column_2);

        // 
        let sub_row_2 = document.createElement('div');
        sub_row_2.className = settings.classes.sub_row_2;
        row_column_2.appendChild(sub_row_2);

        // 
        let sub_row_2_column = document.createElement('div');
        sub_row_2_column.className = settings.classes.sub_row_2_column;
        sub_row_2.appendChild(sub_row_2_column);



        // create the card number input form group element and append it to the section
        let cv_form_group = document.createElement('div');
        cv_form_group.className = settings.inputs.card_cv.classes.form_group;
        sub_row_2_column.appendChild(cv_form_group);

        // create the card number input label parent element and append it to the card number input form group
        let cv_label_parent = document.createElement('div');
        cv_label_parent.className = settings.classes.label_wrapper;
        cv_form_group.appendChild(cv_label_parent);

        // create the card number input label element and append it to the card number input label parent
        let cv_label = document.createElement('label');
        cv_label.className = settings.classes.label;
        cv_label.setAttribute('for', settings.id + settings.inputs.card_number.suffix);
        let cv_label_txt = document.createTextNode(settings.text.card_cv_label);
        cv_label.appendChild(cv_label_txt);
        cv_label_parent.appendChild(cv_label);

        // create the button element for the input help modal
        let cv_label_button = document.createElement('button');
        cv_label_button.className = settings.classes.label_button;
        cv_label_button.setAttribute('type', 'button');
        cv_label_button.setAttribute('data-toggle', 'modal');
        cv_label_button.setAttribute('data-target', '#' + settings.id + settings.inputs.card_cv.suffix + '-modal');
        cv_label_parent.appendChild(cv_label_button);

        // create the font awesome label button icon element
        let cv_label_button_icon = document.createElement('i');
        cv_label_button_icon.className = settings.classes.label_button_icon;
        cv_label_button.appendChild(cv_label_button_icon);

        // 
        cv_label_button.addEventListener('click', function(e) {
            let modalCheck = document.getElementById(settings.id + settings.inputs.card_cv.suffix + '-modal');
            if (!modalCheck)
            {
                let modal_options = {
                    id: settings.id + settings.inputs.card_cv.suffix,
                    form_modal_text: settings.text.card_cv_modal_text
                };
                let modal_nodes = generate_form_help_modal(modal_options);
                document.body.appendChild(modal_nodes);
                $(modal_nodes).modal('show');
            }
        });



        // create the input element
        let card_cv_input = document.createElement('input');
        card_cv_input.className = settings.inputs.card_cv.classes.input;
        card_cv_input.setAttribute('type', settings.inputs.card_cv.type);
        card_cv_input.setAttribute('placeholder', settings.inputs.card_cv.placeholder);
        card_cv_input.setAttribute('id', settings.id + settings.inputs.card_cv.suffix);
        card_cv_input.setAttribute('name', settings.inputs.card_cv.name);
        card_cv_input.setAttribute('value', settings.inputs.card_cv.value);
        // NEED TO FIX THIS -> card_cv_input.setAttribute('aria-describedby', settings.id + thisClass.class_defaults.aria_describedby_suffix);

        // handle masking plugin options
        let card_cv_input_maskedInput;
        if (settings.inputs.card_cv.masking.enable && settings.inputs.card_cv.masking.enable === true)
        {
            let imask_opts = set_imask_format(settings.inputs.card_cv.masking.type);
            card_cv_input_maskedInput = IMask(card_cv_input, imask_opts);
        }

        cv_form_group.appendChild(card_cv_input);

        // create the parent text clear element
        let cv_clear_text_parent = document.createElement('div');
        cv_clear_text_parent.className = thisClass.class_defaults.classes.clear_text_parents;
        cv_clear_text_parent.style.height = '0px';
        cv_form_group.appendChild(cv_clear_text_parent);

        // create the text clear button element
        let cv_clear_button = document.createElement('button');
        cv_clear_button.className = settings.inputs.card_cv.classes.clear_button;
        cv_clear_button.setAttribute('type', 'button');
        cv_clear_button.setAttribute('style', settings.inputs.card_cv.styles.clear_icon_button);
        cv_clear_button.addEventListener('click', function(e) {
            clear_user_value(settings.id + settings.inputs.card_cv.suffix);
        });
        let cv_clear_button_txt = document.createTextNode(thisClass.class_defaults.clear_text_button_text);
        cv_clear_button.appendChild(cv_clear_button_txt);
        cv_clear_text_parent.appendChild(cv_clear_button);

        // 
        let cv_form_text_parent = document.createElement('div');
        cv_form_text_parent.className = settings.classes.form_text_parents;
        cv_form_group.appendChild(cv_form_text_parent);

        // create the form help text elements
        let cv_form_help_text = document.createElement('small');
        cv_form_help_text.className = thisClass.class_defaults.classes.form_help_texts;
        cv_form_help_text.setAttribute('id', settings.id + settings.inputs.card_cv.suffix + thisClass.class_defaults.aria_describedby_suffix);
        let cv_form_help_text_text = document.createTextNode(settings.inputs.card_cv.form_text.help);
        cv_form_help_text.appendChild(cv_form_help_text_text);
        cv_form_text_parent.appendChild(cv_form_help_text);

        // create the form error text elements
        let cv_form_error_text = document.createElement('small');
        cv_form_error_text.className = thisClass.class_defaults.classes.form_error_texts;
        cv_form_error_text.setAttribute('id', settings.id + settings.inputs.card_cv.suffix + thisClass.class_defaults.error_text_suffix);
        let cv_form_error_text_text = document.createTextNode(settings.inputs.card_cv.form_text.error);
        cv_form_error_text.appendChild(cv_form_error_text_text);
        cv_form_text_parent.appendChild(cv_form_error_text);

        // create the form success text elements
        let cv_form_success_text = document.createElement('small');
        cv_form_success_text.className = thisClass.class_defaults.classes.form_success_texts;
        cv_form_success_text.setAttribute('id', settings.id + settings.inputs.card_cv.suffix + thisClass.class_defaults.success_text_suffix);
        let cv_form_success_text_text = document.createTextNode(settings.inputs.card_cv.form_text.success);
        cv_form_success_text.appendChild(cv_form_success_text_text);
        cv_form_text_parent.appendChild(cv_form_success_text);










        
        
        
        
        
        
        
        
        
        
        // add any event listner functionality to any existing elements
        
        reset_button.addEventListener('click', function(e) {
            let comp = component;
            let comp_inputs = comp.querySelectorAll('input');
            if (comp_inputs)
            {
                for (var i = 0; i < comp_inputs.length; i++)
                {
                    comp_inputs[i].value = '';
                }
                comp_inputs[0].focus();
            }
        });

        card_number_label_button.addEventListener('click', function(e) {
            let modalCheck = document.getElementById(settings.id + settings.inputs.card_number.suffix + '-modal');
            if (!modalCheck)
            {
                let modal_options = {
                    id: settings.id + settings.inputs.card_number.suffix,
                    form_modal_text: settings.text.card_number_modal_text
                };
                let modal_nodes = generate_form_help_modal(modal_options);
                document.body.appendChild(modal_nodes);
                $(modal_nodes).modal('show');
            }
        });

        card_number_input.addEventListener('keyup', function(e){
            let iconClasses = get_partial_cc_icon_classes(this.value);
            let i = document.createElement('i');
            i.className = iconClasses;
            card_number_icon_button.removeChild(card_number_icon_button.lastChild);
            card_number_icon_button.appendChild(i);
        });

        card_number_icon_button.addEventListener('click', function(e) {
            let inputId = settings.id + settings.inputs.card_number.suffix;
            clear_user_value(inputId);
        });

        expiration_label_button.addEventListener('click', function(e) {
            let modalCheck = document.getElementById(settings.id + settings.inputs.card_month.suffix + '-modal');
            if (!modalCheck)
            {
                let modal_options = {
                    id: settings.id + settings.inputs.card_month.suffix,
                    form_modal_text: settings.text.card_month_modal_text
                };
                let modal_nodes = generate_form_help_modal(modal_options);
                document.body.appendChild(modal_nodes);
                $(modal_nodes).modal('show');
            }
        });

        




        // return the component markup
        return component;


        //let component_id = opts.component_id ? opts.component_id : 'default-component-id';
        //let component_tag = opts.component_tag ? opts.component_tag : 'fieldset';
        //let outer_label_enabled = opts.outer_label_enabled ? opts.outer_label_enabled : true;
        //let outer_label_classes = opts.outer_label_classes ? opts.outer_label_classes : 'd-block mb-2';
        //let outer_label_text = opts.outer_label_text ? opts.outer_label_text : 'Payment Information:';
        //let section_classes = opts.section_classes ? opts.section_classes : 'bg-white border border-gray-400 p-3 rounded-lg mb-4';
        //let heading_classes = opts.heading_classes ? opts.heading_classes : 'd-flex justify-content-between align-items-center pb-3';
        //let legend_classes = opts.legend_classes ? opts.legend_classes : 'text-primary mb-';
        //let legend_text = opts.legend_text ? opts.legend_text : 'CREDIT CARD';


        /*
        let id           = opts.id           ? opts.id           : 'default-input-id';
        let name         = opts.name         ? opts.name         : 'default-input-name';
        let value        = opts.value        ? opts.value        : '';
        let label        = opts.label        ? opts.label        : 'Default Input Label';
        let type         = opts.type         ? opts.type         : 'text';
        let placeholder  = opts.placeholder  ? opts.placeholder  : 'Default Placeholder';
        let classes      = opts.classes      ? opts.classes      : null;
        let max          = opts.max          ? opts.max          : null;

        let form_text = opts.form_text ? opts.form_text :  {
            help    : 'Default Input help text',
            error   : 'Default Input error text',
            success : 'Default Input success text'
        };

        let form_modal_text = opts.form_modal_text ? opts.form_modal_text : {
            heading: 'Form Inputs',
            body: [{
                type: 'paragraphs',
                content: [ 'Form Inputs are very useful and convenient options to help users enter data. Inputs allow a user to type in data for a single line, that expands horizontally if a user types a lot of content.' ]
            }]
        };

        let masking = opts.masking ? opts.masking : this.masking;
        */
        
        /*
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
        input.setAttribute('type', type);
        input.setAttribute('placeholder', placeholder);
        input.setAttribute('id', id);
        input.setAttribute('name', name);
        input.setAttribute('value', value);
        input.setAttribute('aria-describedby', id + this.aria_describedby_suffix);
        input.setAttribute('data-max-characters', (max !== null) ? max : this.max_characters);
        input.addEventListener('keyup', function(e) {
            //
        });

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
            clear_user_value(id, thisClass.characters_count_suffix);
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
        */
    }
}

export { Credit_payment_component };