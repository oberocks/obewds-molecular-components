export class Html_element {

    constructor () {

        // define default class settings/options
        this._defaults = {
            // REF: https://www.w3.org/WAI/PF/aria-1.1/states_and_properties
            arias : {
                'aria-activedescendant' : null,
                'aria-atomic' : null,
                'aria-autocomplete' : null,
                'aria-busy (state)' : null,
                'aria-checked (state)' : null,
                'aria-controls' : null,
                'aria-describedat' : null,
                'aria-describedby' : null,
                'aria-disabled (state)' : null,
                'aria-dropeffect' : null,
                'aria-expanded (state)' : null,
                'aria-flowto' : null,
                'aria-grabbed (state)' : null,
                'aria-haspopup' : null,
                'aria-hidden (state)' : null,
                'aria-invalid (state)' : null,
                'aria-label' : null,
                'aria-labelledby' : null,
                'aria-level' : null,
                'aria-live' : null,
                'aria-multiline' : null,
                'aria-multiselectable' : null,
                'aria-orientation' : null,
                'aria-owns' : null,
                'aria-posinset' : null,
                'aria-pressed (state)' : null,
                'aria-readonly' : null,
                'aria-relevant' : null,
                'aria-required' : null,
                'aria-selected (state)' : null,
                'aria-setsize' : null,
                'aria-sort' : null,
                'aria-valuemax' : null,
                'aria-valuemin' : null,
                'aria-valuenow' : null,
                'aria-valuetext' : null
            },
            attributes : {
                // REF: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
                accesskey : null,
                autocapitalize : null,
                class : null,
                contenteditable : null,
                dir : null,
                draggable : null,
                exportparts : null,
                hidden : null,
                id : null,
                inputmode : null,
                is : null,
                itemid : null,
                itemprop : null,
                itemref : null,
                itemscope : null,
                itemtype : null,
                lang : null,
                part : null,
                slot : null,
                spellcheck : null,
                style : null,
                tabindex : null,
                title : null,
                translate : null
            },
            text : null
        };

    }

}