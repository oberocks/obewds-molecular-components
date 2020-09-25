export const global_html_attributes = {
    // REF: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
    accesskey : null,
    autocapitalize : null,
    class : null,
    contenteditable : null,
    dir : null,
    draggable : null,
    exportparts : null,
    hidden : null,
    id : null,
    inputmode : null,
    is : null,
    itemid : null,
    itemprop : null,
    itemref : null,
    itemscope : null,
    itemtype : null,
    lang : null,
    part : null,
    slot : null,
    spellcheck : null,
    style : null,
    tabindex : null,
    title : null,
    translate : null
};

export function add_element_attribute_defaults (obj) {
    
    // check if the passed object's value is a null attributes value, and if so convert it into an object
    if ( obj === null ) { obj = {}; }
    
    // loop through the global_html_attributes and add each key/value pair to the passed object
    for (const prop in global_html_attributes) {
        obj[prop] = global_html_attributes[prop];
    }

}