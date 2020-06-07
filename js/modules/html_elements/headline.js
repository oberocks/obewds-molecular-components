import { applyAttributes, insertText } from './utilities/dom_generation.js';

class Headline
{
    /** 
     * Headline : A helper script for form input and textarea elements
     * @param {String} level       : Xxxxx
     * @param {Object} attributes  : Xxxxx
     * @param {String, Array} text : Xxxxx
     */

    constructor (options = false)
    {
        this.level      = options.level ? options.level : '1';
        this.attributes = options.attributes ? options.attributes : {};
        this.text       = options.text ? options.text : 'Default Headline Text';
    }

    /** 
     * Generate (Paragraph) : A helper script to generate a <p> HTML element
     * @param {String} level       : Xxxxx
     * @param {Object} attributes  : Xxxxx
     * @param {String, Array} text : Xxxxx
     */

    generate (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let level               = options.level ? options.level : this.level;
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);
        let text                = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('h' + level);

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }

    h1 (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);
        let text                = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('h1');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }

    h2 (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);
        let text                = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('h2');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }

    h3 (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);
        let text                = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('h3');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }

    h4 (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);
        let text                = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('h4');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }

    h5 (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);
        let text                = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('h5');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }

    h6 (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);
        let text                = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('h6');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }
    
}
  
export { Headline };