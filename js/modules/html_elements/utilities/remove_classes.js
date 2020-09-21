function remove_classes (elNode, classesStr)
{
    // convert the passed class strings into an array, splitting by spaces
    let classes = (classesStr.indexOf(' ') > -1) ? classesStr.split(' ') : [classesStr];
    
    // loop through the from array and remove all classes
    let cl = classes.length;
    for (var i = 0; i < cl; i++) {
        elNode.classList.remove(classes[i]);
    }
}

export { remove_classes };