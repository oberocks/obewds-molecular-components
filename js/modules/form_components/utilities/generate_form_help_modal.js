export function generate_form_help_modal (opts = false) {

    // set the options if passed or use default values
    let modal_classes    = opts.modal_classes    ? opts.modal_classes    : 'modal fade fade-scale';
    let dialog_classes   = opts.dialog_classes   ? opts.dialog_classes   : 'modal-dialog modal-dialog-centered modal-dialog-scrollable';
    let content_classes  = opts.content_classes  ? opts.content_classes  : 'modal-content bg-primary text-white p-3';
    let header_classes   = opts.header_classes   ? opts.header_classes   : 'modal-header justify-content-center border-0';
    let headline_classes = opts.headline_classes ? opts.headline_classes : 'modal-title';
    let body_classes     = opts.body_classes     ? opts.body_classes     : 'modal-body text-center py-0';
    let footer_classes   = opts.footer_classes   ? opts.footer_classes   : 'modal-footer justify-content-center border-0';
    let button_classes   = opts.button_classes   ? opts.button_classes   : 'btn btn-outline-white';
    let id               = opts.id               ? opts.id               : 'default-id';
    //let title          = opts.title            ? opts.title            : null;
    let button_text      = opts.button_text      ? opts.button_text      : 'CLOSE';


    let form_modal_text = opts.form_modal_text ? opts.form_modal_text : {
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
    };
    let form_modal_text_p_classes   = opts.form_modal_text_p_classes   ? opts.form_modal_text_p_classes   : 'text-center';
    let form_modal_text_ul_classes  = opts.form_modal_text_ul_classes  ? opts.form_modal_text_ul_classes  : 'text-left pl-3 mx-3';
    let form_modal_text_li_classes  = opts.form_modal_text_li_classes  ? opts.form_modal_text_li_classes  : '';
    let form_modal_text_img_classes = opts.form_modal_text_img_classes ? opts.form_modal_text_img_classes : 'img-fluid mb-3';
    
    let help_modal_body_styles     = opts.help_modal_body_styles     ? opts.help_modal_body_styles     : 'max-height:200px;';
    let form_modal_suffix          = opts.form_modal_suffix          ? opts.form_modal_suffix          : '-modal';
    let form_modal_headline_suffix = opts.form_modal_headline_suffix ? opts.form_modal_headline_suffix : '-modal-headline';

    // create the modal element
    let modal = document.createElement('div');
    modal.className = modal_classes;
    modal.setAttribute('id', id + form_modal_suffix);
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', id + form_modal_headline_suffix);
    modal.setAttribute('aria-hidden', 'true');

    // create the modal dialog element
    let dialog = document.createElement('div');
    dialog.className = dialog_classes;

    // create the modal content element
    let content = document.createElement('div');
    content.className = content_classes;

    // create the modal header element
    let header = document.createElement('div');
    header.className = header_classes;

    // create the modal header element
    let headline = document.createElement('h5');
    headline.className = headline_classes;
    headline.setAttribute('id', id + form_modal_headline_suffix);
    
    let headline_text = document.createTextNode(form_modal_text.heading);
    
    /*
    let headline_text;

    if (title === null) {

        headline_text = document.createTextNode(form_modal_text.heading);

    } else {

        headline_text = document.createTextNode(title);

    }
    */

    // create the modal body element
    let body = document.createElement('div');
    body.className = body_classes;
    body.setAttribute('style', help_modal_body_styles);



    // append all elements so far
    modal.appendChild(dialog);
    dialog.appendChild(content);
    content.appendChild(header);
    header.appendChild(headline);
    headline.appendChild(headline_text);
    content.appendChild(body);
    


    for (var i = 0; i < form_modal_text.body.length; i++) {

        if (form_modal_text.body[i].type === 'paragraphs') {

            for (var j = 0; j < form_modal_text.body[i].content.length; j++) {

                // create a paragraph element and text node - and append together
                let p = document.createElement('p');
                p.className = form_modal_text_p_classes;
                let txt = document.createTextNode(form_modal_text.body[i].content[j]);
                p.appendChild(txt);

                // append the paragraph to the modal body element
                body.appendChild(p);

            }

        } else if (form_modal_text.body[i].type === 'listitems') {

            // create a parent unordered list element
            let ul = document.createElement('ul');
            ul.className = form_modal_text_ul_classes;

            for (var k = 0; k < form_modal_text.body[i].content.length; k++) {

                // create a paragraph element and text node - and append together
                let li = document.createElement('li');
                li.className = form_modal_text_li_classes;
                let txt = document.createTextNode(form_modal_text.body[i].content[k]);
                li.appendChild(txt);

                // append the li to the ul element
                ul.appendChild(li);

            }

            // append the ul to the modal body element
            body.appendChild(ul);

        } else if (form_modal_text.body[i].type === 'image') {

            // create a parent unordered list element
            let img = document.createElement('img');
            img.className = form_modal_text_img_classes;
            img.setAttribute('src', form_modal_text.body[i].src);
            
            if (form_modal_text.body[i].alt) {
                img.setAttribute('alt', form_modal_text.body[i].alt);
            }

            // append the img to the modal body element
            body.appendChild(img);

        } else if (form_modal_text.body[i].type === 'node') {

            if (form_modal_text.body[i].node) {
                // append the node to the modal body element
                body.appendChild(form_modal_text.body[i].node);
            }

        }

    }


    // create the modal footer element
    let footer = document.createElement('div');
    footer.className = footer_classes;

    // create the modal button element
    let button = document.createElement('button');
    button.className = button_classes;
    button.setAttribute('type', 'button');
    button.setAttribute('data-dismiss', 'modal');
    let button_txt = document.createTextNode(button_text);

    // append all elements together
    content.appendChild(footer);
    footer.appendChild(button);
    button.appendChild(button_txt);

    return modal;

}