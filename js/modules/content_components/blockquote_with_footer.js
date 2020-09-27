import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Blockquote_with_footer {
    
    constructor (opts = false) {

        // define default class settings/options
        this._defaults = {
            blockquote: {
                attributes: {
                    class: 'blockquote'
                }
            },
            paragraph: {
                attributes: {
                    class: 'mb-0'
                },
                text: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nostrum exercitationem voluptatibus cumque amet dolorem.']
            },
            footer: {
                attributes: {
                    class: 'blockquote-footer'
                },
                text: ['Lorem Ipsum']
            }
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
        

        // create the blockquote element
        let blockquote = document.createElement('blockquote');

        // apply any blockquote element attributes
        apply_attributes(blockquote, opts.blockquote.attributes);


        // create the paragraph element
        let paragraph = document.createElement('p');

        // apply any paragraph element attributes
        apply_attributes(paragraph, opts.paragraph.attributes);

        // append text/nodes into paragraph
        insert_text(paragraph, opts.paragraph.text);


        // create the paragraph element
        let footer = document.createElement('footer');

        // apply any paragraph element attributes
        apply_attributes(footer, opts.footer.attributes);

        // append text/nodes into paragraph
        insert_text(footer, opts.footer.text);


        // append all element together accordingly
        blockquote.appendChild(paragraph);
        blockquote.appendChild(footer);

        // return the new element node
        return blockquote;
    }
    
}