class Video_component
{
    /** 
     * Image : A helper script to create image elements
     * @param {String} opts.div_classes    : Xxxxx
     * @param {String} opts.iframe_classes : Xxxxx
     * @param {String, Number} opts.width  : Xxxxx
     * @param {String, Number} opts.height : Xxxxx
     * @param {String, Number} opts.src    : Xxxxx
     */

    constructor (opts = false)
    {
        this.div_classes    = opts.parent_classes ? opts.parent_classes : 'embed-responsive embed-responsive-16by9 box-shadow-xs mb-2';
        this.iframe_classes = opts.iframe_classes ? opts.iframe_classes : 'embed-responsive-item border-0';
        this.width          = opts.width          ? opts.width          : '560';
        this.height         = opts.height         ? opts.height         : '315';
        this.src            = opts.src            ? opts.src            : 'https://www.youtube.com/embed/jr5yHAZDbm0';
    }
    
    /** 
     * Generate (Paragraph) : A helper script to generate a <p> HTML element
     * @param {String} opts.div_classes    : Xxxxx
     * @param {String} opts.iframe_classes : Xxxxx
     * @param {String, Number} opts.width  : Xxxxx
     * @param {String, Number} opts.height : Xxxxx
     * @param {String, Number} opts.src    : Xxxxx
     */

    generate (opts = false)
    {
        // set up any passed options and merge attributes from any passed class settings
        let div_classes    = opts.div_classes    ? opts.div_classes    : this.div_classes;
        let iframe_classes = opts.iframe_classes ? opts.iframe_classes : this.iframe_classes;
        let width          = opts.width          ? opts.width          : this.width;
        let height         = opts.height         ? opts.height         : this.height;
        let src            = opts.src            ? opts.src            : this.src;

        // create the parent element
        let div = document.createElement('div');
        div.className = div_classes;

        // create the iframe element
        let iframe = document.createElement('iframe');
        iframe.className = iframe_classes;
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('width', width);
        iframe.setAttribute('height', height);
        iframe.setAttribute('src', src);

        // append elements
        div.appendChild(iframe);

        // return the new elements
        return div;
    }
    
}
  
export { Video_component };