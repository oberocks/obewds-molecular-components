# OBE:WDS Molecular Component Modules

A pure JavaScript ES Modules project built to compliment the OBE:WDS (OBE:BS4) Web Design System for rapid modern JavaScript development with design-flexible and deeply configurable interactive and static content components.



# Table of Contents

* [Overview](#overview)
  * [What are Molecular Components?](#what-are-molecula-components)
* [Modules](#modules)
  * [System File Structure](#system-file-structure)
* [Content Components Class](#content-components-class)
  * [Video Component Class](#video-component-class)
* [Form Components Class](#form-components-class)
  * [Input Form Group Component Class](#input-form-group-component-class)
* [HTML Elements Class](#html-elements-class)
  * [Headline Element Class](#headline-element-class)
  * [Image Element Class](#image-element-class)
  * [Paragraph Element Class](#paragraph-element-class)





# Overview

Welcome to the Dousic Media JavaScript Module System documentation! Our JS module set-up is meant to provide developers an extemely fast way to get complex components working in a browser. 

The premise of this system is simple: lock-in ALL of the complexity, functionalities, accessibility fallbacks, and more into singluar component modules, helpers, and settings data.

However, we don't work this way just to make our dev's lives easier! We also do this so our developers can drastically reduce the cognative load of the front end *while coding*, so our devs can focus on higher-level user flow problem solving!

With this premise, all of our developers are encouraged to join in on the fun and power that JavaScript modules provide. Together, we can (over time) compile a fantastic resource that gives us infinitely complex and specific chunks of markup and functionality in an equally scalable and customizable way.

## What are Molecular Components?

To understand how to use the modules in this system to their fullest, we have to make a few analogies. Here's a quick list of the structural premises involved in the design of this systems functionalities:

* CSS is handled by SASS if at all possible
    * For now CSS is compiled into a single master application CSS file for all of the application's markup (IE our Design System - OBE:BS4)
    * Otherwise CSS is specified on either:
        * A URL page level (in `<head>`)
        * As inline CSS through components settings
        * With custom JavaScript on the Element Node level
* CSS is generally used as "Atomic" Classes
* CSS "Atomic" Classes serve as:
    * Single source of truth for visual/aesthetic design choices
    * Default settings to give form to the HTML that forms the "geometry" for a molecule
* HTML is treated as "Molecular Geometry"


# Modules

The majority of the Dousic Media JavaScript Module System modules are implemented as classes. Additionally, all module classes have constructor methods, which generally accept an options object `{}` to set defaults that act as base data that's used by the class `generate()` method. Additionally, all of the `generate()` methods also accept an options object `{}` used to specify the content and settings for the returned component markup.

> The Dousic Media JavaScript Module System is organized in a specific heriarchial pattern. The module system SHOULD ALWAYS be entirely contained in a directory called `modules/` which should ALWAYS be placed in a Dousic Media web project's root `js/` directory.

Inside the `js/modules/` directory, devs can access a series of JavaScript files with names that match directory names. Each of these named pairs are considered top-level abstraction groups for all underlying module components and functionalities. In most cases, the `*.js` files found inside the `js/modules/` directory are "aggrigated" module files. This allows devs to `import` any of the system's sub-modules for that group from a single file.

Conversely, the directory half of these top-level pairs holds all of the individual module scripts the aggrigated files refer to. Additionally, these directories often have a sub-directory or two, where utility functions and global data objects used inside module functionalities can be found in `utilities` or `data` sub-directories respectively.

## System File Structure
Here's an overview of the file structure of the Dousic Media JavaScript Modules System:

- **js/**
    - **modules/**
        - app_data.js
        - **app_data/**
            - brand_data.js
            - structure_data.js
        - content_components.js
        - **content_components/**
            - headline_group.js
            - video_component.js
        - form_components.js
        - **form_components/**
            - credit_payment_component.js
            - custom_checkboxes_form_group.js
            - custom_radios_form_group.js
            - input_character_counter_form_group.js
            - input_form_group.js
            - phone_input_form_group.js
            - submit_button_form_group.js
            - textarea_form_group.js
            - **data/**
                - form_group_defaults.js
            - **utilities/**
                - clear_user_value.js
                - generate_form_help_modal.js
                - get_partial_cc_icon_classes.js
                - set_imask_format.js
                - update_character_count.js
        - **helpers/**
            - merge_objects.js
        - html_elements.js
        - **html_elements/**
            - headline.js
            - image.js
            - paragraph.js
            - **utilities/**
                - dom_generation.js
        - **plugins/**
            - [imask/](https://github.com/uNmAnNeR/imaskjs) 
            _[(Specific Directory)](https://github.com/uNmAnNeR/imaskjs/tree/master/packages/imask/src)_



# Content Components Class

The Content Components Class `Content_components` can be found at `.js/modules/content_components.js`. This class module is designed to... 

## Video Component Class
The Video Component Class... 



## Headline Group Component Class

(Coming Soon!)



# Form Components Class

The Form Components Class `Form_components` can be found at `.js/modules/form_components.js`. This class module is designed to help you bring form elements into the application. All the compenents that are generated by this module will return Dousic Media form components that have quite a few built-in features, and are designed to be flexible, accessible and higly customizable for all developer skill levels.

## Input Form Group Component Class
The Input Form Group Component Class `Input_form_group` can be found accesed via `.js/modules/form_components.js` as well as `.js/modules/form_components/input_form_group.js`. This complex class is designed to handle the deep UX complexity of a 

Here's how to import and instantiate the Form Components module, then generate a default input form group component, and add it to the DOM:

```html
<script type="module">

    /// ^^^^^^^^^^^^^ Note the VERY important type="module" in the script tag!
    
    // Create a fragment for your DOM elements
    const fragment = document.createDocumentFragment();

    // import modules
    import { Input_form_group } from './js/modules/form_components.js';

    // instantiate imported modules
    let my_input_form_group = new Input_form_group();

    // generate the input form group markup with the options
    let my_input = my_input_form_group.generate();

    // append the generated nodes to the fragment
    fragment.appendChild(my_input);

    // append the fragment to the page
    document.body.appendChild(fragment);

</script>
```

> **PRO TIP**:
> Whenever working with JavaScript DOM generation modules in your code, you should ALWAYS use the `document.createDocumentFragment()` method to hold all of the element nodes you are generating. By using document fragments, you can limit the redrawing and re-indexing (from `.appendChild()`) of the DOM tree to a single instance, which helps to bring the performance of our modules up to the speed of the less flexible `innerHTML` approach for DOM insertions.

And here's the exact same example, but this time it's got all of the options you can pass to both the constructor and the `generate()` method. (Note: All of these key/value pairs of data are literally the default values of this component, too!):

```html
<script type="module">

    // Create a fragment for your DOM elements
    const fragment = document.createDocumentFragment();

    // import modules
    import { Input_form_group } from './js/modules/form_components.js';

    // set up your constructor options (these values are all the defaults)
    const my_input_form_group_defaults = {
        classes: {
            form_groups               : 'form-group mb-4',
            label_wrappers            : 'd-flex justify-content-between align-items-center',
            labels                    : 'mb-1',
            label_buttons             : 'btn btn-sm btn-link pb-1 pl-3 pr-0',
            label_button_icons        : 'fas fa-question-circle text-primary',
            inputs                    : 'form-control form-control-lg',
            clear_text_parents        : 'position-relative text-right',
            clear_text_buttons        : 'btn btn-lg position-relative opacity-50 p-2 border-0 bg-transparent',
            form_text_wrappers        : 'd-flex justify-content-between align-items-start',
            form_text_parents         : 'text-left pr-2',
            form_help_texts           : 'form-text text-muted',
            form_error_texts          : 'd-none form-text text-danger',
            form_success_texts        : 'd-none form-text text-success',
            character_counter_parents : 'small text-right text-muted form-text'
        },
        aria_describedby_suffix  : '-help',
        error_text_suffix        : '-error',
        success_text_suffix      : '-success',
        characters_count_suffix  : '-characters',
        max_characters           : '50',
        clear_text_button_styles : 'top:-48px;',
        clear_text_button_text   : '×'
    };

    // instantiate imported modules
    let my_input_form_group = new Input_form_group(my_input_form_group_defaults);

    // define the settings for your input form group itself
    const my_input_settings = {
        id: 'default-id',
        name: 'default-name',
        value: '',
        label: 'Default Input Label',
        type: 'text',
        placeholder: 'Default Placeholder',
        classes: null,
        help_title: 'Form Element Help Modal',
        help_p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo omnis ab tempore ipsam rerum.',
        help_p2: null,
        help_p3: null,
        max: null,
        help_text: 'Default input form help text',
        error_text: 'Default input form error text',
        success_text: 'Default input form success text'
    };

    // generate the input form group markup with the options
    let my_input = my_input_form_group.generate(my_input_settings);

    // append the generated nodes to the fragment
    fragment.appendChild(my_input);

    // append the fragment to the page
    document.body.appendChild(fragment);


</script>
```



# HTML Elements Class

(Coming Soon!)

## Headline Element Class

(Coming Soon!)

## Image Element Class

(Coming Soon!)

## Paragraph Element Class

(Coming Soon!)