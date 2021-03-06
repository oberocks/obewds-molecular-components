import { settings_merge } from '../helpers/settings_merge.js';
import { apply_attributes } from '../html_elements/utilities/dom_generation.js';

export class Video_component {

    constructor (opts = false) {
        
        // define default class settings/options
        this._defaults = {
            parent: {
                attributes: {
                    class: 'embed-responsive embed-responsive-16by9 box-shadow-xs mb-2'
                }
            },
            iframe: {
                attributes: {
                    class: 'embed-responsive-item border-0',
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube.com/embed/jr5yHAZDbm0',
                    allowfullscreen: ''
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

        // create the parent element
        let parent = document.createElement('div');
        apply_attributes(parent, opts.parent.attributes);

        // create the iframe element
        let iframe = document.createElement('iframe');
        apply_attributes(iframe, opts.iframe.attributes);

        // append elements
        parent.appendChild(iframe);

        // return the new elements
        return parent;
    }
    
}