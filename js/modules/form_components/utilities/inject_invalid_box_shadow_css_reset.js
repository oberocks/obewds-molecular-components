export function inject_invalid_box_shadow_css_reset ()
{
    // set id and get a reference of any stylesheets with that id already in the docuent
    let id = 'inject-invalid-box-shadow-css-reset';
    let stylesheet = document.getElementById(id);
    
    // if no stylesheet with the id was found
    if (!stylesheet) {
        
        // create the style element and set attributes and content
        var style = document.createElement('style');
        style.setAttribute('id', id);
        style.innerHTML = ' :invalid { box-shadow: none; } ' + ' :-moz-ui-invalid { box-shadow: none; } '; // cut :-moz-submit-invalid { box-shadow: none; } out so submit's can have box shadows
        
        // add the new style tag to the head element
        document.getElementsByTagName('head')[0].appendChild(style);
        
    }
}