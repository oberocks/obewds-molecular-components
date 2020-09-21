function swap_classes (elNode, swapFromStr, swapToStr)
{
    // convert the passed class strings into an array, splitting by spaces
    let swapFrom = (swapFromStr.indexOf(' ') > -1) ? swapFromStr.split(' ') : [swapFromStr];
    let swapTo = (swapToStr.indexOf(' ') > -1) ? swapToStr.split(' ') : [swapToStr];
    
    // loop through the from array and remove all classes
    let sfl = swapFrom.length;
    for (var i = 0; i < sfl; i++) {
        elNode.classList.remove(swapFrom[i]);
    }

    // loop through the to array and add all classes
    let stl = swapTo.length;
    for (var i = 0; i < stl; i++) {
        elNode.classList.add(swapTo[i]);
    }
}

export { swap_classes };