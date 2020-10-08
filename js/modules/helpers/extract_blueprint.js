// import utility dependencies
import { get_node_list_depth } from './get_node_list_depth.js';

export function extract_blueprint (nodes) {
    
    // initialize an object to output
    let obj = {};
    
    // assign the tag name of the 
    obj.tag = nodes.tagName.toLowerCase();
    
    // check if the node has any attributes
    if (nodes.hasAttributes()) {

        // if so create an empty attributes object
        let attributes = {};
        
        // assign the attributes to a variable
        let attrs = nodes.attributes;
        
        // loop through the attributes
        for (var i = 0; i < attrs.length; i++) {

            // assign each key/value pair to the attributes object
            attributes[attrs[i].name] = attrs[i].value;

        }
        
        // assign the attributes to the output object
        obj.attributes = attributes;

    }

    if (nodes.hasChildNodes()) {

        // if so create an empty children array
        let children = [];
        
        // assign the child nodes to a variable
        let kids = nodes.childNodes;

        // 
        let depth = get_node_list_depth(nodes);
        
        // loop through the child nodes
        for (var i = 0; i < kids.length; i++) {

            if (kids[i].firstChild != null || kids[i].nodeType === Node.ELEMENT_NODE) {

                // run this function recursively and add the returned object to the children array
                children.push( extract_blueprint(kids[i]) );

            } else {

                /*if (depth != kids.length) {

                    // create an empty object
                    let node = {};
                    // assign a tag property
                    node.tag = 'span';
                    // assign the passed string
                    node.text = [kids[i].textContent];
                    // add the object to the passed array
                    children.push(node);

                } else {

                    obj.text = [kids[i].textContent];

                }*/

                if (kids[i].nodeType === Node.TEXT_NODE) {

                    let temp = (kids[i].textContent).trim();
                    if (temp.length > 0) {
                        obj.text = [kids[i].textContent];
                    }

                }
                
            }
            
        }

        if (children.length > 0) {

            obj.children = children;

        }

    }

    return obj;

}