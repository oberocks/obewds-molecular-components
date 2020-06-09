import { merge_objects } from '../helpers/merge_objects.js';

class Placeholder_text
{
    constructor (opts = false)
    {
        /** 
         * Submit Button Form Group : Xxxxxx
         * @param {Xxxxxx} Xxxxxx : Xxxxxx
         */
        
        this._defaults = {
            placeholder_text : {
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
            }
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? merge_objects(true, this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;
    }

    get_random_index (arrayLength)
    {
        // Helper function to get random index for an array length
        // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        return Math.floor(Math.random() * Math.floor(arrayLength));
    }

    headline ()
    {
        // get a random index and return placeholder text string
        let index = this.get_random_index(this.defaults.placeholder_text.headlines.length);
        return this.defaults.placeholder_text.headlines[index];
    }

    paragraph ()
    {
        // get a random index and return placeholder text string
        let index = this.get_random_index(this.defaults.placeholder_text.paragraphs.length);
        return this.defaults.placeholder_text.paragraphs[index];
    }

    quote ()
    {
        // get a random index and return placeholder text string
        let index = this.get_random_index(this.defaults.placeholder_text.quotes.length);
        return this.defaults.placeholder_text.quotes[index];
    }

    brand ()
    {
        // get a random index and return placeholder text string
        let index = this.get_random_index(this.defaults.placeholder_text.brands.length);
        return this.defaults.placeholder_text.brands[index];
    }

    navigation ()
    {
        // get a random index and return placeholder text string
        let index = this.get_random_index(this.defaults.placeholder_text.navigation.length);
        return this.defaults.placeholder_text.navigation[index];
    }

    node (type)
    {
        if (type === 'headline')
        {
            // 
            return document.createTextNode( this.headline() );
        }
        else if (type === 'paragraph')
        {
            // 
            return document.createTextNode( this.paragraph() );
        }
        else if (type === 'quote')
        {
            // 
            return document.createTextNode( this.quote() );
        }
        else if (type === 'brand')
        {
            // 
            return document.createTextNode( this.brand() );
        }
        else if (type === 'navigation')
        {
            // 
            return document.createTextNode( this.navigation() );
        }
    }
}

export { Placeholder_text };