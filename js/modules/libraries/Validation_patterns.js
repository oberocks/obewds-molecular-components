import { settings_merge } from '../helpers/settings_merge.js';

export class Validation_patterns {
    
    constructor (opts = false) {
        
        // define default class settings/options
        this._defaults = {
            phone : {
                us_formal : {
                    regex : '(?:\(\d{3}\)|\d{3})[ ]?\d{3}[- ]?\d{4}',
                    name : 'US Formal Phone Number',
                    descrip : 'A formatted US phone number expecting (3 number digits) inside parentheses, followed by a space, then another 3 number digits, a dash, and 4 final number digits.',
                    source : 'https://stackoverflow.com/questions/18863420/html5-pattern-for-phone-number-with-parentheses'
                },
                us_minimal_dash : {
                    regex : '\d{3}[\-]\d{3}[\-]\d{4}',
                    name : 'US Minimal Dash Phone Number',
                    descrip : 'A minimally formatted US phone number expecting 3 number digits, a dash, another 3 number digits, another dash, and 4 final number digits',
                    source : 'http://html5pattern.com/Phones'
                },
                us_minimal_dot : {
                    regex : '\d{3}[\.]\d{3}[\.]\d{4}',
                    name : 'US Minimal Dot Phone Number',
                    descrip : 'A minimally formatted US phone number expecting 3 number digits, a dot, another 3 number digits, another dot, and 4 final number digits.',
                    source : 'http://html5pattern.com/Phones'
                },
                fourteen_characters : {
                    regex : '.{14}',
                    name : 'Fourteen Characters String',
                    descrip : 'A 14 character string of any characters excluding line breaks.',
                    source : 'https://www.freeformatter.com/regex-tester.html'
                }
            },
            string : {
                alpha_numeric : {
                    regex : '[a-zA-Z0-9]+',
                    name : 'Alpha-Numeric String',
                    descrip : 'A minimum of 1 character and any length of characters that can only be number digits (0-9), uppercase (A-Z) characters or lowercase (a-z) characters. No spaces, underscores, hypens, dashes or other special characters are allowed.',
                    source : 'http://html5pattern.com/Names'
                }
            }
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
    }

    get_class_defaults () {

        return this.defaults;

    }

    get_phone_us_formal_object (options = false) {
        
        return (options) ? settings_merge(this.defaults.phone.us_formal, options) : this.defaults.phone.us_formal;

    }

    get_phone_us_minimal_dash_object (options = false) {
        
        return (options) ? settings_merge(this.defaults.phone.us_minimal_dash, options) : this.defaults.phone.us_minimal_dash;

    }

    get_phone_us_minimal_dot_object (options = false) {
        
        return (options) ? settings_merge(this.defaults.phone.us_minimal_dot, options) : this.defaults.phone.us_minimal_dot;

    }

    get_string_alpha_numeric_object (options = false) {
        
        return (options) ? settings_merge(this.defaults.string.alpha_numeric, options) : this.defaults.string.alpha_numeric;

    }
    
}