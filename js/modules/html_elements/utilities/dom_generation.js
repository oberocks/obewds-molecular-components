export function apply_attributes (node, obj) {

    if (Object.keys(obj).length > 0) {

        for (const key in obj) {

            if (obj[key] !== null && obj[key] !== false) {

                node.setAttribute(key, obj[key]);

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

export function append_child (node, childNodes) {

    if (childNodes && childNodes.nodeType === Node.ELEMENT_NODE) {

        node.appendChild(childNodes);

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
        
        if (subType === 'with' || self.isString(subType)) {
            
            let ref = refNode ? refNode : undefined;
            if (ref) {
                parent.replaceChild(ref, el);
            }

        } else if (self.isElementNode(subType)) {
            
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
        if (self.isString(elemText) && elemText.length > 0) {
            
            // if it's a string then create a text node and append it to the returned element
            el.appendChild(self.textNode(elemText));

        } 
        // if the value is an array
        else if (Array.isArray(elemText) && elemText.length > 0) 
        {
            
            // loop through the array
            for (var i = 0; i < elemText.length; i++) {
                
                // if it's a string then create a text node and append it to the returned element
                if (self.isString(elemText[i])) {
                    
                    el.appendChild(self.textNode(elemText[i]));

                }
                // if it's an element node then append it to the returned element
                else if (self.isElementNode(elemText[i])) {
                    
                    el.appendChild(elemText[i]);

                } else {

                    self.logTextArrayError();

                }

            }

        } else {

            self.logTextArrayError();

        }
        
    }
        

    // check for passed object of html attribute key/value pairs
    if (attributes) {
        
        // check that the argument is an object and is not null
        if (self.isObject(attributes)) {
            
            // loop through the object
            for (var attr in attributes) {
                
                if (attributes.hasOwnProperty(attr)) {
                    
                    // set the attribute and value
                    el.setAttribute(attr, attributes[attr]);

                }

            }

        } else {

            self.logSettingsError(".element()'s 3rd argument");

        }

    }
    
    // check for passed element array
    if (nestedElem) {
        
        // check if the passed argument is an array
        if (Array.isArray(nestedElem)) {
            
            // loop through the array
            for (var i = 0; i < nestedElem.length; i++) {
                
                // check the array item is an element node
                if (self.isElementNode(nestedElem[i])) {
                            
                    // and attach each element
                    el.appendChild(nestedElem[i]);
                    
                } else {

                    self.logNodeError(".element()'s 4th argument at index: [" + i + "]");

                }

            }

        } else {
            
            // check that the passed item is an element node
            if (self.isElementNode(nestedElem)) {
                            
                // if so, then just attach the passed element
                el.appendChild(nestedElem);
                
            } else {

                self.logNodeError(".element()'s 4th argument");

            }

        }
    }

    // return the element
    return el;

}