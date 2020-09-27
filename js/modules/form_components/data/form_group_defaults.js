export let form_group_defaults = {
    classes: {
        form_groups : 'form-group mb-4',
        label_wrappers : 'd-flex justify-content-between align-items-center',
        bordered_label_wrappers : 'd-flex justify-content-between align-items-center border-bottom mb-2',
        labels : 'mb-1',
        label_buttons : 'btn btn-sm btn-link pb-1 pl-3 pr-0',
        label_button_icons : 'fas fa-question-circle text-primary',
        inputs : 'form-control form-control-lg',
        checkbox_parents : 'custom-control custom-checkbox',
        checkboxes : 'custom-control-input',
        checkbox_labels : 'custom-control-label',
        radio_parents : 'custom-control custom-radio',
        radios : 'custom-control-input',
        radio_labels : 'custom-control-label',
        textareas : 'form-control',
        selects : 'custom-select',
        clear_text_parents : 'position-relative text-right',
        clear_text_buttons : 'btn btn-lg position-relative opacity-50 p-2 border-0 bg-transparent',
        form_text_wrappers : 'd-flex justify-content-between align-items-start',
        form_text_parents : 'text-left pr-2',
        form_help_texts : 'form-text text-muted',
        form_error_texts : 'd-none form-text text-danger',
        form_success_texts : 'd-none form-text text-success',
        character_counter_parents : 'small text-right text-muted form-text',
        form_modal_text_ps : 'text-left px-3',
        form_modal_text_uls : 'text-left pl-3 mx-3',
        form_modal_text_lis : '',
        form_modal_imgs : 'img-fluid mb-3',
        submit_button_parent  : 'form-group pt-3',
        submit_button : 'btn btn-lg btn-primary box-shadow-xs',
        invalid_label : 'text-danger',
        valid_label : 'text-success',
        invalid_input : 'form-danger border-width-4',
        valid_input : 'form-success border-width-2',
    },
    aria_describedby_suffix : '-help',
    error_text_suffix : '-error',
    success_text_suffix : '-success',
    characters_count_suffix : '-characters',
    max_characters : '50',
    clear_text_button_styles : 'top:-48px; -webkit-appearance:none;',
    clear_text_button_text : '×',
    rows : '4',
    help_modal_body_styles : 'max-height:200px;',
    form_text : {
        help : ['Default form group help text'],
        error : ['Default form group error text'],
        success : ['Default form group success text']
    },
    form_modal_text : {
        heading : 'Default Modal Title',
        body: [{
            type : 'paragraphs',
            content : [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo omnis ab tempore ipsam rerum.',
                'Aliquid illo omnis ab tempore ipsam rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            ]
        },{
            type : 'listitems',
            content : [
                'Lorem ipsum dolor sit amet',
                'Consectetur adipisicing elit',
                'Aliquid illo omnis ab tempore ipsam rerum'
            ]
        }]
    },
    masking : {
        enable : false,
        type : 'phone',
        min : 0,
        max : 1000,
        seperator : ','
    },
    custom_validation_success_listner : 'change'
};