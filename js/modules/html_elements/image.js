import { applyAttributes } from './utilities/dom_generation.js';

class Image
{
    /** 
     * Image : A helper script to create image elements
     * @param {Object} attributes.src   : Xxxxx
     * @param {Object} attributes.alt   : Xxxxx
     * @param {Object} attributes.class : Xxxxx
     */

    constructor (attributes = false)
    {
        this.attributes = {
            src   : attributes.src   ? options.src      : 'https://obewds.com/images/obewds-logo-social-square-light-ground.jpg',
            alt   : attributes.alt   ? attributes.alt   : 'OBE:WDS Square Profile Logo',
            class : attributes.class ? attributes.class : 'img-fluid box-shadow-xs mb-2'
        };
    }

    /** 
     * Generate (Paragraph) : A helper script to generate a <p> HTML element
     * @param {Object} attributes.src   : Xxxxx
     * @param {Object} attributes.alt   : Xxxxx
     * @param {Object} attributes.class : Xxxxx
     */

    generate (attrs = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let instance_attributes = attrs ? attrs : {};
        let attributes          = Object.assign(instance_attributes, this.attributes);

        // create the element
        let el = document.createElement('img');

        // check if there are attributes then set them
        applyAttributes(el, attributes);

        // return the new element node
        return el;
    }
    
}
  
export { Image };