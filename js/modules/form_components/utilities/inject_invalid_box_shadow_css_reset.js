function inject_invalid_box_shadow_css_reset ()
{
    // set id and get a reference of any stylesheets with that id already in the docuent
    let id = 'inject-invalid-box-shadow-css-reset';
    let stylesheet = document.getElementById(id);
    
    // if no stylesheet with the id was found
    if (!stylesheet) {
        
        // REF: https://davidwalsh.name/add-rules-stylesheets
        
        // create a style tag and insert it into the document
        // while returning a textNode to work with in JS
        var sheet = (function() {
            
            // Create the <style> tag
            var style = document.createElement('style');
            style.setAttribute('id', id);
        
            // WebKit hack :(
            style.appendChild(document.createTextNode(""));
        
            // Add the <style> element to the page
            document.head.appendChild(style);
        
            // return the textNode so rules can be maniputlated in it
            return style.sheet;

        })();

        // add the invalid box shadow CSS rules to the sheet
        // REF: https://stackoverflow.com/questions/3809146/firefox-4-required-input-form-red-border-outline
        sheet.insertRule(':invalid { box-shadow: none; }', 0);
        sheet.insertRule(':-moz-submit-invalid { box-shadow: none; }', 1);
        sheet.insertRule(':-moz-ui-invalid { box-shadow: none; }', 2);
        
    }
}

export { inject_invalid_box_shadow_css_reset };