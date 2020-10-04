import { Type_checker } from '../libraries/Type_checker.js';


export function settings_merge (baseObj, modObj) {

    let type_checker = new Type_checker();
    
    let output = {};
            
    var merge = function (baseObj, modObj) {
        
        // loop through the properties of the base object
        for ( var prop in baseObj ) {

            if (baseObj.hasOwnProperty(prop)) {

                // if this base object property is a boolean
                if ( type_checker.is_boolean(baseObj[prop]) ) {

                    // init a var to help handle incorrect declarations of true/false values
                    let mod_obj_bool;

                    if ( modObj[prop] === false || modObj[prop] === 'false' || modObj[prop] === 'FALSE' ) {
                        
                        // correct any incorrect false values as a false boolean
                        mod_obj_bool = false;

                    } else if ( modObj[prop] === true || modObj[prop] === 'true' || modObj[prop] === 'TRUE' ) {
                        
                    // correct any incorrect true values as a true boolean
                        mod_obj_bool = true; 

                    }

                    // assign the corrected bool if provided - otherwise use the default property value
                    output[prop] = (typeof modObj[prop] !== 'undefined') ? mod_obj_bool : baseObj[prop];

                // if this base object property is a boolean
                } else if ( type_checker.is_string(baseObj[prop]) ) {

                    output[prop] = type_checker.is_defined(modObj[prop]) ? String(modObj[prop]) : baseObj[prop];

                // otherwise if this base object prop is a number
                } else if ( type_checker.is_number(baseObj[prop]) ) {

                    output[prop] = type_checker.is_defined(modObj[prop]) ? Number(modObj[prop]) : baseObj[prop];

                // or if this base object prop is a big int
                } else if ( type_checker.is_big_integer(baseObj[prop]) ) {

                    output[prop] = type_checker.is_defined(modObj[prop]) ? BigInt(modObj[prop]) : baseObj[prop];

                // or if this base object prop is a function
                } else if ( type_checker.is_function(baseObj[prop]) ) {

                    output[prop] = type_checker.is_defined(modObj[prop]) ? modObj[prop] : baseObj[prop];

                // or if this base object prop is an object
                } else if ( type_checker.is_object(baseObj[prop]) ) {

                    output[prop] = type_checker.is_defined(modObj[prop]) ? settings_merge( baseObj[prop], modObj[prop] ) : baseObj[prop];

                    // if the current property is called attributes (and it's value is an object obviously)
                    if (prop === 'attributes') {
                        
                        // if there is a matching attributes object in the modObj, too
                        if ( type_checker.is_object(modObj[prop]) ) {
                            // loop through the attributes object's properties
                            for ( var subprop in modObj[prop] ) {
                                // if the property doesn't already exist in the output object
                                // (meaning this is a user-defined attribute - possibly a data-* attribute)
                                if (!output[prop][subprop]) {
                                    // add/overwrite each attribute key/value pair from the modObj
                                    output[prop][subprop] = modObj[prop][subprop]
                                }
                            }
                        }
                        
                    }

                // or if this base object prop is an array
                } else if ( type_checker.is_array(baseObj[prop]) ) {

                    let temp_array = [];

                    if ( type_checker.is_array(modObj[prop]) ) {

                        for (var i = 0; i < modObj[prop].length; i++) {

                            if ( type_checker.is_boolean(modObj[prop][i]) ) {

                                let temp_value = type_checker.is_defined(modObj[prop][i]) ? Boolean(modObj[prop][i]) : baseObj[prop][i];
                                temp_array.push( temp_value );

                            } else if ( type_checker.is_string(modObj[prop][i]) ) {

                                let temp_value = type_checker.is_defined(modObj[prop][i]) ? String(modObj[prop][i]) : baseObj[prop][i];
                                temp_array.push( temp_value );

                            } else if ( type_checker.is_number(modObj[prop][i]) ) {

                                let temp_value = type_checker.is_defined(modObj[prop][i]) ? Number(modObj[prop][i]) : baseObj[prop][i];
                                temp_array.push( temp_value );

                            } else if ( type_checker.is_big_integer(modObj[prop][i]) ) {

                                let temp_value = type_checker.is_defined(modObj[prop][i]) ? BigInt(modObj[prop][i]) : baseObj[prop][i];
                                temp_array.push( temp_value );

                            } else if ( type_checker.is_element_node(modObj[prop][i]) ) {

                                temp_array.push( modObj[prop][i] );

                            } else if ( type_checker.is_object(modObj[prop][i]) ) {

                                let temp_obj = settings_merge( baseObj[prop][0], modObj[prop][i] );
                                let final_obj = settings_merge( modObj[prop][i], temp_obj );
                                temp_array.push( final_obj );

                            }

                        }

                    } else {

                        temp_array = baseObj[prop];

                    }

                    output[prop] = temp_array;

                // if this base object property is null
                } else if ( type_checker.is_null(baseObj[prop]) ) {

                    output[prop] = ( modObj[prop] ) ? modObj[prop] : baseObj[prop];

                // otherwise if this base object property has a value of undefined
                } else {

                    console.error('OBE:WDS MC Error: The property [ ' + prop + ' ] was passed with a value of [ ' + modObj[prop] + ' ], which is not an data type the merge_settings() function can work with. Component settings values need to be either booleans, strings, numbers, big integers, functions, objects, arrays, or element nodes (depending on the contexts and the component).' );

                }

            }

        }

    };

    // Loop through each object and conduct a settings merge for each pair in sequence
	for ( var j = 0; j < arguments.length; j++ ) {
		var obj1 = arguments[j];
        var obj2 = arguments[j + 1];
        if ( obj2 ) {
            merge( obj1, obj2 );
        }
	}

    return output;

}