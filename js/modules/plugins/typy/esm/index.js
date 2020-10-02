import Typy from './Typy.js';

const typyCheck = (input, objectPath) => new Typy().check(input, objectPath);
const { Schema } = Typy;

export const addCustomTypes = (validators) => {
    
    if (typyCheck(validators).isObject) {
        
        Object.keys(validators).forEach((validator) => {
            
            if (typyCheck(validators[validator]).isFunction) {
                
                // eslint-disable-next-line
                Typy.prototype.__defineGetter__(validator, function() {
                    
                    return validators[validator](this.input);

                });

            } else {
                
                throw new Error(`validator ${validator} is not a function`);

            }

        });

    } else {
        
        throw new Error('validators must be key value pairs');

    }

};

export default typyCheck;
export { typyCheck, Schema };
