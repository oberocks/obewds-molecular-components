# OBE:WDS Molecular Component Modules

A pure JavaScript ES Modules project built to compliment the OBE:WDS (OBE:BS4) Web Design System for rapid modern JavaScript development with design-flexible and deeply configurable interactive and static content components.

To learn more, check out the project here: [OBE:WDS Molecular Components](https://obewds.com/molecular-components)


<!---
# Table of Contents

* [Overview](#overview)
* [Installation](#installation)
* [Updating](#updating)
* [Project Structure](#project-structure)
* [Form Components Class](#form-components-class)
--->

<!---
* [What are Molecular Components?](#what-are-molecula-components)
  * [System File Structure](#system-file-structure)
* [Content Components Class](#content-components-class)
  * [Video Component Class](#video-component-class)
* [HTML Elements Class](#html-elements-class)
  * [Headline Element Class](#headline-element-class)
  * [Image Element Class](#image-element-class)
  * [Paragraph Element Class](#paragraph-element-class)
  * [Input Form Group Component Class](#input-form-group-component-class)
--->
<!---
# Overview

Welcome to the OBE:WDS Molecular Component Modules documentation! Our JS module set-up is meant to give projects an extemely fast way to get complex and extremely customizable responsive components working in a browser. 

> **The Premise of the System**:  
> Lock-in as much of the complexity, functionalities, accessibility fallbacks, and more into singluar component modules, helpers, and settings data.

However, these components were not only made to make a dev's life easier. These components are designed to provide developers with a drastic reduction in the cognative load of the front end *while coding*, so those devs can focus on higher-level user flow and UX-orientated problem solving!

The goal of this project (over time), is to compile a fantastic resource that gives projects infinitely complex chunks of pre-wired HTML and JavaScript functionality that works perfectly with Bootstrap and the OBE:WDS (OBE:BS4 Web Design System).


# Installation

Installation is pretty easy. Simply grab the repo via npm, and then add or just run a copy script in the command line to add all of the modules to your project's JavaScript directory.

**Install with NPM**

```bash
npm install oberocks/obewds-molecular-components --save
```

**Copy Molecular Components to Your Working JavaScript Directory**

```bash
cp -a ./node_modules/obewds-molecular-components/js/. ./--your-directory-path-here--/
```


# Updating

Updating to the newest version of the Molecular Components system is easy, too. It's recommended to add a few NPM Scripts to your `package.json` file to make updates easy and fast for devs. 

**Add NPM Script To Package.json**

```json
// package.json
"scripts": {
    "install_molecular_components": "npm install oberocks/obewds-molecular-components --save",
    "update_molecular_components": "cp -a ./node_modules/obewds-molecular-components/js/. ./--your-directory-path--/",
    "update_and_install_molecular_components": "npm run install_molecular_components && npm run update_molecular_components"
}
```

**And After You've Filled in /--your-directory-path--/**

With those NPM Scripts in your `package.json`file, you can install new Molecular Components updates to your `node_modules` directory with:
```bash
npm run install_molecular_components
```

Then move the new updated files into your project with:
```bash
npm run update_molecular_components
```

Or both update and move the updated files into your project in one shot with:
```bash
npm run update_and_install_molecular_components
```
--->
<!---
# What are Molecular Components?

To understand how to use the modules in this system to their fullest, we have to make a few analogies. Here's a quick list of the structural premises involved in the design of this system:

* CSS is handled by SASS if at all possible
    * For now CSS is compiled into a single master application CSS file for all of the application's markup (IE a Design System - OBE:WDS/OBE:BS4)
    * Otherwise CSS is specified on either:
        * A URL page level (in `<head>`)
        * As inline CSS through components settings
        * With custom JavaScript on the Element Node level
* CSS is generally used as "Atomic" Classes
* CSS "Atomic" Classes serve as:
    * Single source of truth for visual/aesthetic design choices
    * Default settings to give form to the HTML that forms the "geometry" for a molecule
* HTML is treated as "Molecular Geometry"
--->

<!---
# Project Structure

The majority of the OBE:WDS Molecular Component Modules are implemented as classes. Additionally, all module classes have constructor methods, which generally accept an options object `{}` to set defaults that act as base data used by the `generate()` method of the class. Additionally, all of the `generate()` methods also accept an options object `{}` used to specify the content and settings for the returned component markup.

> The OBE:WDS Molecular Component Modules is organized in a specific heriarchial pattern. The module system SHOULD ALWAYS be entirely contained in a directory called `modules/` which should ALWAYS be placed in your web project's root `js/` directory.

Inside the `js/modules/` directory, devs can access a series of JavaScript files with names that match directory names. Each of these named pairs are considered top-level abstraction groups for all underlying module components and functionalities. In most cases, the `*.js` files found inside the `js/modules/` directory are "aggrigated" module files. This allows devs to `import` any of the system's sub-modules for that group from a single file.

Conversely, the directory half of these top-level pairs holds all of the individual module scripts the aggrigated files refer to. Additionally, these directories often have a sub-directory or two, where utility functions and global data objects used inside module functionalities can be found in `utilities` or `data` sub-directories respectively.
--->

<!---
## System File Structure
Here's an overview of the file structure of the  Molecular Component Modules System:

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

--->

<!---
# Content Components Class

The Content Components Class `Content_components` can be found at `.js/modules/content_components.js`. This class module is designed to... 

## Video Component Class
The Video Component Class... 



## Headline Group Component Class

(Coming Soon!)
--->

<!---
# Form Components Class

The Form Components Class `Form_components` can be found at `.js/modules/form_components.js`. This class module is designed to help you bring form elements into the application. All the compenents that are generated by this module will return Molecular form components that have quite a few built-in features, and are designed to be flexible, accessible and higly customizable for all developer skill levels.

> **PRO TIP**:
> Whenever working with JavaScript DOM generation modules in your code, you should generally use the `document.createDocumentFragment()` method to hold/collect all of the element nodes you are generating. By using a document fragment, you can limit the redrawing and re-indexing (from `.appendChild()`) of the DOM tree to a single instance, which helps to bring the performance of our modules up to the speed of the less flexible `innerHTML` approach for DOM insertions.
--->

<!---

# HTML Elements Class

(Coming Soon!)

## Headline Element Class

(Coming Soon!)

## Image Element Class

(Coming Soon!)

## Paragraph Element Class

(Coming Soon!)

--->