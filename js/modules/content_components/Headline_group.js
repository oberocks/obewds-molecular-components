import { apply_attributes, insert_text } from '../html_elements/utilities/dom_generation.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Headline_group {

    constructor (opts = false) {
        // define default class settings/options
        this._defaults = {
            parent: {
                attributes: {
                    class: 'border-left border-width-5 border-primary pl-3 pt-2 pb-3 mb-2'
                }
            },
            headlines: {
                top: {
                    tag: 'h1',
                    attributes: {
                        class: 'mb-1'
                    },
                    text: ['Headline Group Top']
                },
                bottom: {
                    tag: 'h5',
                    attributes: {
                        class: 'mb-0'
                    },
                    text: ['Default Bottom Headline']
                }
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

    get_merged_options (options) {
        return settings_merge(this.defaults, options);
    }

    generate (options = false)
    {
        // merge any passed options settings into the default settings to get a final settings object
        let opts = (options) ? settings_merge(this.defaults, options) : this.defaults;

        // create the headline group element
        let grp = document.createElement('hgroup');

        // check if there are attributes for the headline group element - then set them
        apply_attributes(grp, opts.parent.attributes);

        // create the top headline element
        let top = document.createElement(opts.headlines.top.tag);

        // check if there are attributes for the top headline element - then set them
        apply_attributes(top, opts.headlines.top.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(top, opts.headlines.top.text);

        // create the top headline element
        let bottom = document.createElement(opts.headlines.bottom.tag);

        // check if there are attributes for the top headline element - then set them
        apply_attributes(bottom, opts.headlines.bottom.attributes);

        // check if text is a string and if so then add it as a text node
        insert_text(bottom, opts.headlines.bottom.text);

        // append all element together accordingly
        grp.appendChild(top);
        grp.appendChild(bottom);

        // return the new element node
        return grp;
    }
    
}