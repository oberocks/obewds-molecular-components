import { get_random_index } from '../helpers/get_random_index.js';
import { settings_merge } from '../helpers/settings_merge.js';

export class Placeholder_text {
    
    constructor (opts = false) {
        
        // define default class settings/options
        this._defaults = {
            headlines : [
                'Lorem Ipsum Dolor Sit',
                'Quisque Feugiat Hendrerit',
                'Mauris Ut Nulla Id Libero',
                'Sed Bibendum Nisi A Est Semper'
            ],
            paragraphs : [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis bibendum augue, in facilisis lorem euismod fermentum. Maecenas non auctor magna, et tempor purus. Morbi et ex iaculis nunc tincidunt semper a eget dui. Nulla ac turpis id arcu cursus condimentum eget vel ante. Quisque vel malesuada sapien. Etiam non urna vitae urna iaculis rutrum non non sem.',
                'Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.',
                'Mauris ut nulla id libero viverra lobortis. Phasellus ut elit eu diam feugiat scelerisque. Vivamus semper nibh id turpis pharetra bibendum. In eget felis risus. Nullam at tincidunt tellus, non fermentum enim. Mauris varius suscipit lectus ac feugiat. Pellentesque pulvinar semper tempor. Vivamus ac ipsum bibendum, malesuada magna id, viverra erat. Ut aliquet neque nec hendrerit tristique.',
                'Sed bibendum nisi a est semper consequat. Aliquam mi neque, blandit lobortis justo sit amet, commodo consectetur sem. Donec sagittis erat quis venenatis dignissim. Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst. Vestibulum euismod purus et tellus congue accumsan. Sed ligula libero, finibus non neque sed, semper consectetur est. Ut tincidunt, sapien aliquam varius fermentum, diam sem consequat risus, eget molestie erat ante quis erat.'
            ],
            quotes : [
                'Nulla ac turpis id arcu cursus condimentum eget vel ante.',
                'Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis.',
                'In eget felis risus. Nullam at tincidunt tellus, non fermentum enim.',
                'Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst.'
            ],
            brands : [
                'Lorem Ipsum',
                'Suspendisse',
                'Nulla Ac Magna',
                'Aliquam Vulputate'
            ],
            navigation : [
                'Link One',
                'Link Two',
                'Link Three',
                'Link Four',
                'Link Five'
            ]
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
    }

    get_class_defaults () {

        return this.defaults;

    }

    headline (index = false) {
        
        // get a random index and return placeholder text string
        let i = index ? Number(index) : get_random_index(this.defaults.headlines.length);
        return this.defaults.headlines[i];

    }

    paragraph (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : get_random_index(this.defaults.paragraphs.length);
        return this.defaults.paragraphs[i];

    }

    quote (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : get_random_index(this.defaults.quotes.length);
        return this.defaults.quotes[i];

    }

    brand (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : get_random_index(this.defaults.brands.length);
        return this.defaults.brands[i];

    }

    navigation (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : get_random_index(this.defaults.navigation.length);
        return this.defaults.navigation[i];

    }

    node (type, index = false) {
        
        let text;
        
        if (type === 'headline') {
            
            // 
            text = index ? this.headline(index) : this.headline();

        } else if (type === 'paragraph') {
            
            // 
            text = index ? this.paragraph(index) : this.paragraph();

        } else if (type === 'quote') {
            
            // 
            text = index ? this.quote(index) : this.quote();

        } else if (type === 'brand') {
            
            // 
            text = index ? this.brand(index) : this.brand();

        } else if (type === 'navigation') {
            
            // 
            text = index ? this.navigation(index) : this.navigation();
            
        }

        return document.createTextNode( text );
    }
}