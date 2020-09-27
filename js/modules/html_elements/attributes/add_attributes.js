export function accept (el, val) {

    if (el.tagName === 'FORM' || el.tagName === 'INPUT') {
        
        el.setAttribute('accept', val);

    }

}

export function accept_charset (el, val) {

    if (el.tagName === 'FORM') {
        
        el.setAttribute('accept-charset', val);

    }

}

export function action (el, val) {

    if (el.tagName === 'FORM') {
        
        el.setAttribute('action', val);

    }

}

export function align (el, val) {

    if (el.tagName === 'APPLET' || el.tagName === 'CAPTION' || el.tagName === 'COL' || el.tagName === 'COLGROUP' || el.tagName === 'HR' || el.tagName === 'IFRAME' || el.tagName === 'IMG' || el.tagName === 'TABLE' || el.tagName === 'TBODY' || el.tagName === 'TD' || el.tagName === 'TFOOT' || el.tagName === 'TH' || el.tagName === 'THEAD' || el.tagName === 'TR') {
        
        el.setAttribute('align', val);

    }

}

export function allow (el, val) {

    if (el.tagName === 'IFRAME') {
        
        el.setAttribute('allow', val);

    }

}

export function alt (el, val) {

    if (el.tagName === 'APPLET' || el.tagName === 'AREA' || el.tagName === 'IMG' || el.tagName === 'INPUT') {
        
        el.setAttribute('alt', val);

    }

}

/* SKIPPING async ATTRIBUTE AS IT'S ONLY FOR SCRIPT TAGS */

export function autocomplete (el, val) {

    if (el.tagName === 'FORM' || el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') {
        
        el.setAttribute('autocomplete', val);

    }

}

export function autofocus (el, val) {

    if (el.tagName === 'BUTTON' || el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') {
        
        el.setAttribute('autofocus', val);

    }

}

export function autoplay (el, val) {

    if (el.tagName === 'AUDIO' || el.tagName === 'VIDEO') {
        
        el.setAttribute('autoplay', val);

    }

}

/* SKIPPING background ATTRIBUTE AS IT'S BETTER TO DO VIA CSS */
/* SKIPPING bgcolor ATTRIBUTE AS IT'S BETTER TO DO VIA CSS */
/* SKIPPING border ATTRIBUTE AS IT'S BETTER TO DO VIA CSS */

export function buffered (el, val) {

    if (el.tagName === 'AUDIO' || el.tagName === 'VIDEO') {
        
        el.setAttribute('buffered', val);

    }

}

export function capture (el, val) {

    if (el.tagName === 'INPUT') {
        
        el.setAttribute('capture', val);

    }

}

export function challenge (el, val) {

    if (el.tagName === 'KEYGEN') {
        
        el.setAttribute('challenge', val);

    }

}

/* SKIPPING charset ATTRIBUTE AS IT'S ONLY FOR SCRIPT & META TAGS */

export function checked (el, val) {

    if (el.tagName === 'COMMAND' || el.tagName === 'INPUT') {
        
        el.setAttribute('checked', val);

    }

}

export function cite (el, val) {

    if (el.tagName === 'BLOCKQUOTE' || el.tagName === 'DEL' || el.tagName === 'INS' || el.tagName === 'Q') {
        
        el.setAttribute('cite', val);

    }

}

export function code (el, val) {

    if (el.tagName === 'APPLET') {
        
        el.setAttribute('code', val);

    }

}

export function codebase (el, val) {

    if (el.tagName === 'APPLET') {
        
        el.setAttribute('codebase', val);

    }

}

/* SKIPPING color ATTRIBUTE AS IT'S BETTER TO DO VIA CSS */

export function cols (el, val) {

    if (el.tagName === 'TEXTAREA') {
        
        el.setAttribute('cols', val);

    }

}

export function colspan (el, val) {

    if (el.tagName === 'TD' || el.tagName === 'TH') {
        
        el.setAttribute('colspan', val);

    }

}

/* SKIPPING content ATTRIBUTE AS IT'S ONLY FOR META TAGS */

export function controls (el, val) {

    if (el.tagName === 'AUDIO' || el.tagName === 'VIDEO') {
        
        el.setAttribute('controls', val);

    }

}

export function coords (el, val) {

    if (el.tagName === 'AREA') {
        
        el.setAttribute('coords', val);

    }

}

export function crossorigin (el, val) {

    if (el.tagName === 'AUDIO' || el.tagName === 'IMG' || el.tagName === 'LINK' || el.tagName === 'SCRIPT' || el.tagName === 'VIDEO') {
        
        el.setAttribute('crossorigin', val);

    }

}

export function csp (el, val) {

    if (el.tagName === 'IFRAME') {
        
        el.setAttribute('csp', val);

    }

}

export function data (el, val) {

    if (el.tagName === 'OBJECT') {
        
        el.setAttribute('data', val);

    }

}

export function datetime (el, val) {

    if (el.tagName === 'DEL' || el.tagName === 'INS' || el.tagName === 'TIME') {
        
        el.setAttribute('datetime', val);

    }

}

export function decoding (el, val) {

    if (el.tagName === 'IMG') {
        
        el.setAttribute('decoding', val);

    }

}

export function default_attribute (el, val) {

    if (el.tagName === 'TRACK') {
        
        el.setAttribute('default', val);

    }

}

/* SKIPPING defer ATTRIBUTE AS IT'S ONLY FOR SCRIPT TAGS */

export function default_attribute (el, val) {

    if (el.tagName === 'TRACK') {
        
        el.setAttribute('default', val);

    }

}