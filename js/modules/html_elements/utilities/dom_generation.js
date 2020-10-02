import Typy from '../../plugins/typy/esm/Typy.js'; // import the default exported class

const typy = new Typy();

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

    if (Array.isArray(array)) {

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

            } else if (typy.check(array[i]).isElementNode) {

                node.appendChild(array[i]);

            }

        }

    }

}

export function add_to_dom (parent, type, el, subType = false, refNode = false) {
        
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
        
        if (subType === 'with' || typy.check(subType).isString) {
            
            let ref = refNode ? refNode : undefined;
            if (ref) {
                parent.replaceChild(ref, el);
            }

        } else if (typy.check(subType).isElementNode) {
            
            parent.replaceChild(subType, el);

        }

    } else if (t === 'removechild' || t === 'remove') {
        
        parent.removeChild(el);

    } else if (t === 'prepend' || t === 'firstchild') {
        
        let firstChild = parent.firstChild;
        parent.insertBefore(el, firstChild);

    }

};

export function generate_element (elemType, elemText = false, attributes = false, nestedElem = false) {
        
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
        if (typy.check(elemText).isString && elemText.length > 0) {
            
            // if it's a string then create a text node and append it to the returned element
            el.appendChild(document.createTextNode(elemText));

        } 
        // if the value is an array
        else if (Array.isArray(elemText) && elemText.length > 0) 
        {
            
            // loop through the array
            for (var i = 0; i < elemText.length; i++) {
                
                // if it's a string then create a text node and append it to the returned element
                if (typy.check(elemText[i]).isString) {
                    
                    el.appendChild(document.createTextNode(elemText[i]));

                }
                // if it's an element node then append it to the returned element
                else if (typy.check(elemText[i]).isElementNode) {
                    
                    el.appendChild(elemText[i]);

                } else {

                    //self.logTextArrayError();

                }

            }

        } else {

            //self.logTextArrayError();

        }
        
    }
        

    // check for passed object of html attribute key/value pairs
    if (attributes) {
        
        // check that the argument is an object and is not null
        if (typy.check(attributes).isObject) {
            
            // loop through the object
            for (var attr in attributes) {
                
                if (attributes.hasOwnProperty(attr)) {
                    
                    // set the attribute and value
                    el.setAttribute(attr, attributes[attr]);

                }

            }

        } else {

            //self.logSettingsError(".element()'s 3rd argument");

        }

    }
    
    // check for passed element array
    if (nestedElem) {
        
        // check if the passed argument is an array
        if (Array.isArray(nestedElem)) {
            
            // loop through the array
            for (var i = 0; i < nestedElem.length; i++) {
                
                // check the array item is an element node
                if (typy.check(nestedElem[i]).isElementNode) {
                            
                    // and attach each element
                    el.appendChild(nestedElem[i]);
                    
                } else {

                    //self.logNodeError(".element()'s 4th argument at index: [" + i + "]");

                }

            }

        } else {
            
            // check that the passed item is an element node
            if (typy.check(nestedElem).isElementNode) {
                            
                // if so, then just attach the passed element
                el.appendChild(nestedElem);
                
            } else {

                //self.logNodeError(".element()'s 4th argument");

            }

        }
    }

    // return the element
    return el;

}

export function generate_cell (cell_plan = false) {
        
    let settings;
    if (cell_plan) {
        settings = cell_plan;
    } else {
        console.error('OBE:WDS MC Error: The generate_cell() function requires a passed Array ([...]) of JavaScript objects that follow the tag/attribute/text/children key and values schema.');
        return;
    }

    // initialize the output variable as a fragment
    let output = document.createDocumentFragment();

    for (var i = 0; i < settings.length; i++) {
        
        if (typy.check(settings[i]).isObject) {
            
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