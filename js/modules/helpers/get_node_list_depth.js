export function get_node_list_depth (nodes, currentDepth = 1) {
    
    let depth = currentDepth;

    if (nodes.hasChildNodes()) {

        // assign the child nodes to a variable
        let kids = nodes.childNodes;
        
        // loop through the child nodes to determine the depth of the children
        for (var i = 0; i < kids.length; i++) {

            // check if the node is an element node
            if (kids[i].nodeType === Node.ELEMENT_NODE) {

                // if so, increment the depth
                depth++;
                // run the function again recursively, and return the final incremented depth
                return get_node_list_depth(kids[i], depth);

            }

        }

        return depth;

    } else {

        return depth;

    }

}