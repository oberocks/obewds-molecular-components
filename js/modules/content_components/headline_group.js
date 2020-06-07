import { applyAttributes, insertText } from './utilities/dom_generation.js';

class Headline_group
{
    /** 
     * Headline Group : A helper script for form input and textarea elements
     * @param {Array} levels     : Xxxxx
     * @param {Array} attributes : Xxxxx
     * @param {Array} texts      : Xxxxx
     */

    constructor (options = false)
    {
        this.levels     = options.levels ? options.levels : ['1', '2'];
        this.attributes = options.attributes ? options.attributes : [{}, {}];
        this.text       = options.text ? options.text : [['Default Primary Headline'], ['Default Secondary Headline']];
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
    
}
  
export { Headline_group };