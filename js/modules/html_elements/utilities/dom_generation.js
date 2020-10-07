import { Type_checker } from '../../libraries/Type_checker.js';


export function on_dom_ready (callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
}

export function apply_attributes (node, obj) {

    if (Object.keys(obj).length > 0) {

        for (const key in obj) {

            if (obj.hasOwnProperty(key)) {

                if (obj[key] !== null && obj[key] !== false) {

                    node.setAttribute(key, obj[key]);

                }

            }
            
        }

    }

}

export function insert_text (node, str) {

    if (typeof str === 'string' && str.length > 0) {

        let txt = document.createTextNode(str);
        node.appendChild(txt);

    } else if (Array.isArray(str) && str.length > 0) {

        for (var i = 0; i < str.length; i++) {

            if (str[i] instanceof Element || str[i] instanceof HTMLDocument) {

                node.appendChild(str[i]);

            } else if (typeof str[i] === 'string' || str[i] instanceof String) {

                let txt = document.createTextNode(str[i]);
                node.appendChild(txt);

            }

        }

    }

}

export function append_child (node, childNode) {

    if (childNode && childNode.nodeType === Node.ELEMENT_NODE) {

        node.appendChild(childNode);

    }

}

export function append_children_array (node, array) {

    let type_checker = new Type_checker();
    
    if (type_checker.is_array(array)) {

        for (var i = 0; i < array.length; i++) {

            if (array[i].tag) {

                let child = document.createElement(array[i].tag);

                if (array[i].attributes) {
                    apply_attributes(child, array[i].attributes);
                }

                if (array[i].text) {
                    insert_text(child, array[i].text); 
                }

                if (array[i].children) {
                    append_children_array(child, array[i].children);
                }

                node.appendChild(child);

            } else if (type_checker.is_element_node(array[i])) {

                node.appendChild(array[i]);

            }

        }

    }

}

export function add_to_dom (parent, type, el, subType = false, refNode = false) {
        
    let type_checker = new Type_checker();
    
    let t = type.toLowerCase();

    if (t === 'appendchild' || t === 'append') {
        
        parent.appendChild(el);

    } else if (t === 'insert') {
        
        if (subType === 'after') {
            
            parent.insertBefore(el, refNode.nextSibling);

        } else if (subType === 'before' || subType !== false) {
            
            parent.insertBefore(el, refNode);

        }

    } else if (t === 'insertafter' || t === 'after') {
        
        parent.insertBefore(el, subType.nextSibling);

    } else if (t === 'insertbefore' || t === 'before') {
        
        parent.insertBefore(el, subType);

    } else if (t === 'replacechild' || t === 'replace') {
        
        if (subType === 'with' || type_checker.is_string(subType)) {
            
            let ref = refNode ? refNode : undefined;
            if (ref) {
                parent.replaceChild(ref, el);
            }

        } else if (type_checker.is_element_node(subType)) {
            
            parent.replaceChild(subType, el);

        }

    } else if (t === 'removechild' || t === 'remove') {
        
        parent.removeChild(el);

    } else if (t === 'prepend' || t === 'firstchild') {
        
        let firstChild = parent.firstChild;
        parent.insertBefore(el, firstChild);

    }

}

export function generate_element (elemType, elemText = false, attributes = false, nestedElem = false) {
        
    let type_checker = new Type_checker();
    
    // initialize the returned element as a var
    let el;

    // check for a passed element tag
    if (elemType) {
        
        // create the element
        el = document.createElement(elemType);

    }/* else {
        
        self.logElementError();
        console.error("OBE:WDS MC Error: The generate_element() function requires a valid string argument to define a dynamically generated element tag!");

    }*/
    
    // check for passed elemText
    if (elemText) {
        
        // check if value is a string and has length
        if (type_checker.is_string(elemText) && elemText.length > 0) {
            
            // if it's a string then create a text node and append it to the returned element
            el.appendChild(document.createTextNode(elemText));

        } 
        // if the value is an array
        else if (type_checker.is_array(elemText) && elemText.length > 0) 
        {
            
            // loop through the array
            for (var i = 0; i < elemText.length; i++) {
                
                // if it's a string then create a text node and append it to the returned element
                if (type_checker.is_string(elemText[i])) {
                    
                    el.appendChild(document.createTextNode(elemText[i]));

                }
                // if it's an element node then append it to the returned element
                else if (type_checker.is_element_node(elemText[i])) {
                    
                    el.appendChild(elemText[i]);

                } //else {

                    //self.logTextArrayError();

                //}

            }

        } //else {

            //self.logTextArrayError();

        //}
        
    }
        

    // check for passed object of html attribute key/value pairs
    if (attributes) {
        
        // check that the argument is an object and is not null
        if (type_checker.is_object(attributes)) {
            
            // loop through the object
            for (var attr in attributes) {
                
                if (attributes.hasOwnProperty(attr)) {
                    
                    // set the attribute and value
                    el.setAttribute(attr, attributes[attr]);

                }

            }

        } //else {

            //self.logSettingsError(".element()'s 3rd argument");

        //}

    }
    
    // check for passed element array
    if (nestedElem) {
        
        // check if the passed argument is an array
        if (type_checker.is_array(nestedElem)) {
            
            // loop through the array
            for (var i = 0; i < nestedElem.length; i++) {
                
                // check the array item is an element node
                if (type_checker.is_element_node(nestedElem[i])) {
                            
                    // and attach each element
                    el.appendChild(nestedElem[i]);
                    
                } //else {

                    //self.logNodeError(".element()'s 4th argument at index: [" + i + "]");

                //}

            }

        } else {
            
            // check that the passed item is an element node
            if (type_checker.is_element_node(nestedElem)) {
                            
                // if so, then just attach the passed element
                el.appendChild(nestedElem);
                
            } //else {

                //self.logNodeError(".element()'s 4th argument");

            //}

        }
    }

    // return the element
    return el;

}

export function generate_cell (outline = false) {
        
    let settings;
    if (outline) {
        settings = outline;
    } else {
        console.error('OBE:WDS MC Error: The generate_cell() function requires a passed Array ([...]) of JavaScript objects (colloquially known as a "Cell Outline" in Molecular Components) that follow the tag/attribute/text/children key and values schema.');
        return;
    }

    let type_checker = new Type_checker();

    // initialize the output variable as a fragment
    let output = document.createDocumentFragment();

    for (var i = 0; i < settings.length; i++) {
        
        if (type_checker.is_object(settings[i])) {
            
            if (settings[i].tag) {
                
                let parent = document.createElement(settings[i].tag);

                if (settings[i].attributes) {
                    apply_attributes(parent, settings[i].attributes);
                }

                if (settings[i].text) {
                    insert_text(parent, settings[i].text);
                }

                if (settings[i].children) {
                    append_children_array(parent, settings[i].children);
                }

                output.appendChild(parent);

            } else {

                console.error("OBE:WDS MC Error: The array of objects passed (at index " + i + ") into the generate_cell() function did not have a 'tag' property. This property's String value is REQUIRED to properly generate your markup!");

            }

        } else {

            console.error("OBE:WDS MC Error: The generate_cell() method requires that you pass an array of objects to properly generate your markup!");

        }

    }

    return output;

}

export function remove_all_nodes (node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}