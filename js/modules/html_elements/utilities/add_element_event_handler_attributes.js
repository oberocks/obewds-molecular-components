function add_element_event_handler_attribute_defaults (obj)
{
    // REF: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
    
    // convert the passed class strings into an array, splitting by spaces
    let events = {
        onabort : null,
        onautocomplete : null,
        onautocompleteerror : null,
        onblur : null,
        oncancel : null,
        oncanplay : null,
        oncanplaythrough : null,
        onchange : null,
        onclick : null,
        onclose : null,
        oncontextmenu : null,
        oncuechange : null,
        ondblclick : null,
        ondrag : null,
        ondragend : null,
        ondragenter : null,
        ondragexit : null,
        ondragleave : null,
        ondragover : null,
        ondragstart : null,
        ondrop : null,
        ondurationchange : null,
        onemptied : null,
        onended : null,
        onerror : null,
        onfocus : null,
        oninput : null,
        oninvalid : null,
        onkeydown : null,
        onkeypress : null,
        onkeyup : null,
        onload : null,
        onloadeddata : null,
        onloadedmetadata : null,
        onloadstart : null,
        onmousedown : null,
        onmouseenter : null,
        onmouseleave : null,
        onmousemove : null,
        onmouseout : null,
        onmouseover : null,
        onmouseup : null,
        onmousewheel : null,
        onpause : null,
        onplay : null,
        onplaying : null,
        onprogress : null,
        onratechange : null,
        onreset : null,
        onresize : null,
        onscroll : null,
        onseeked : null,
        onseeking : null,
        onselect : null,
        onshow : null,
        onsort : null,
        onstalled : null,
        onsubmit : null,
        onsuspend : null,
        ontimeupdate : null,
        ontoggle : null,
        onvolumechange : null,
        onwaiting : null
    };
    
    // loop through the object properties and add each key/value
    for (const prop in events) {
        obj[prop] = events[prop];
    }
}

export { add_element_event_handler_attribute_defaults };