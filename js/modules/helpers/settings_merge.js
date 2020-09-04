
function is_boolean (val) {
    return typeof val === 'boolean';
}

function is_string (val) {
    return typeof val === 'string';
}

function is_number (val) {
    return typeof val === 'number';
}

function is_bigint (val) {
    return typeof val === 'bigint';
}

function is_function (val) {
    return typeof val === 'function';
}

function is_object (val) {
    return (Object.prototype.toString.call(val) === '[object Object]' && val != null) ? true : false;
}

function is_array (val) {
    return Array.isArray(val);
}

function is_element_node (val) {
    return (val instanceof Element || val instanceof HTMLDocument) ? true : false;
}

function is_prop_defined (val) {
    return typeof val !== 'undefined'
}


function settings_merge (baseObj, modObj) {

    let output = {};
            
    var merge = function (baseObj, modObj) {
    
        // check the modObject and trigger console warnings as needed
        for ( var prop in modObj ) {

            // if a modified object's property is not already defined in the base object
            // then log a warning for the user/dev that the data will be skipped
            /*
            if ( baseObj[prop] === undefined ) {
                console.warn('OBE:WDS Molecular Components Warning: The property [ ' + prop + ' ] with a value [ ' + modObj[prop] + ' ] was ignored, because it is not a valid property for the molecular component it was passed into.' );
            }
            */
            
            // if a modified object's property value is null
            // then log a warning for the user/dev that null values will be skipped
            if ( Object.prototype.toString.call(modObj[prop]) === null || Object.prototype.toString.call(modObj[prop]) === 'null' || Object.prototype.toString.call(modObj[prop]) === 'NULL') {
                console.warn('OBE:WDS Molecular Components Warning: The property [ ' + prop + ' ] was passed with a value of [ ' + modObj[prop] + ' ], so it was ignored. A null value is not not an allowed value for object properties in molecular components, so the compoent default value was used for this property instead.' );
            }

        }
        
        // loop through the properties of the base object
        for ( var prop in baseObj ) {

            // if this base object property is a boolean
            if ( is_boolean(baseObj[prop]) ) {

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
            } else if ( is_string(baseObj[prop]) ) {

                output[prop] = is_prop_defined(modObj[prop]) ? String(modObj[prop]) : baseObj[prop];

            // otherwise if this base object prop is a number
            } else if ( is_number(baseObj[prop]) ) {

                output[prop] = is_prop_defined(modObj[prop]) ? Number(modObj[prop]) : baseObj[prop];

            // or if this base object prop is a big int
            } else if ( is_bigint(baseObj[prop]) ) {

                output[prop] = is_prop_defined(modObj[prop]) ? BigInt(modObj[prop]) : baseObj[prop];

            // or if this base object prop is a function
            } else if ( is_function(baseObj[prop]) ) {

                output[prop] = is_prop_defined(modObj[prop]) ? modObj[prop] : baseObj[prop];

            } else if ( is_object(baseObj[prop]) ) {

                output[prop] = is_prop_defined(modObj[prop]) ? settings_merge( baseObj[prop], modObj[prop] ) : baseObj[prop];

            } else if ( is_array(baseObj[prop]) ) {

                let temp_array = [];

                if ( is_array(modObj[prop]) ) {

                    for (var i = 0; i < modObj[prop].length; i++) {

                        if ( is_boolean(modObj[prop][i]) ) {

                            let temp_value = is_prop_defined(modObj[prop][i]) ? Boolean(modObj[prop][i]) : baseObj[prop][i];
                            temp_array.push( temp_value );

                        } else if ( is_string(modObj[prop][i]) ) {

                            let temp_value = is_prop_defined(modObj[prop][i]) ? String(modObj[prop][i]) : baseObj[prop][i];
                            temp_array.push( temp_value );

                        } else if ( is_number(modObj[prop][i]) ) {

                            let temp_value = is_prop_defined(modObj[prop][i]) ? Number(modObj[prop][i]) : baseObj[prop][i];
                            temp_array.push( temp_value );

                        } else if ( is_bigint(modObj[prop][i]) ) {

                            let temp_value = is_prop_defined(modObj[prop][i]) ? BigInt(modObj[prop][i]) : baseObj[prop][i];
                            temp_array.push( temp_value );

                        } else if ( is_element_node(modObj[prop][i]) ) {

                            temp_array.push( modObj[prop][i] );

                        } else if ( is_object(modObj[prop][i]) ) {

                            let temp_obj = settings_merge( baseObj[prop][0], modObj[prop][i] );
                            let final_obj = settings_merge( modObj[prop][i], temp_obj );
                            temp_array.push( final_obj );

                        } /*else if ( is_array(modObj[prop][i]) ) {

                            temp_array.push( settings_merge( baseObj[prop][i], modObj[prop][i] ) );

                        }*/

                    }

                } else {

                    temp_array = baseObj[prop];

                }
                
                    

                output[prop] = temp_array;

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

export { is_boolean, is_string, is_number, is_bigint, is_function, is_object, is_array, is_element_node, is_prop_defined, settings_merge };