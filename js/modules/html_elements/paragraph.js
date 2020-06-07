import { applyAttributes, insertText } from './utilities/dom_generation.js';

class Paragraph
{
    /** 
     * Paragraph : A helper script to generate a paragraph element
     * @param {Object} attributes  : Xxxxx
     * @param {String, Array} text : Xxxxx
     */

    constructor (options = false)
    {
        this.attributes = options.attributes ? options.attributes : {};
        this.text       = options.text ? options.text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum vitae risus vitae semper. Donec consectetur felis et mollis tristique. Nunc consequat lacus in urna congue, eu lacinia est placerat.';
    }

    /** 
     * Generate (Paragraph) : A helper script to generate a <p> HTML element
     * @param {Object} attributes  : Xxxxx
     * @param {String, Array} text : Xxxxx
     */

    generate (options = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = options.attributes ? options.attributes : {};
        let attributes = Object.assign(instance_attributes, this.attributes);
        let text       = options.text ? options.text : this.text;

        // create the element
        let el = document.createElement('p');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // check if text is a string and if so then add it as a text node
        insertText(el, text);

        // return the new element node
        return el;
    }
    
}
  
export { Paragraph };