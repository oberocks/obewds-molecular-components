export class Type_checker {

    is_defined(val) {
        if (typeof val !== 'undefined') return true;
        return false;
    }

    is_undefined(val) {
        if (typeof val === 'undefined') return true;
        return false;
    }

    is_null(val) {
        if (val === null && typeof val === 'object') return true;
        return false;
    }

    is_null_or_undefined(val) {
        if (this.is_null || this.is_undefined) return true;
        return false;
    }

    is_element_node(val) {
        if (val instanceof Element || val instanceof HTMLDocument) return true;
        return false;
    }

    is_boolean(val) {
        if (typeof val === typeof true) return true;
        return false;
    }

    is_big_integer (val) {
        return typeof val === 'bigint';
    }

    is_true(val) {
        if (val === true) return true;
        return false;
    }

    is_false(val) {
        if (val === false) return true;
        return false;
    }

    is_truthy(val) {
        if (val) return true;
        return false;
    }

    is_falsy(val) {
        if (!val) return true;
        return false;
    }

    is_object(val) {
        if (typeof val === 'object' && val === Object(val) && Object.prototype.toString.call(val) !== '[object Array]' && Object.prototype.toString.call(val) !== '[object Date]') {
            return true;
        }
        return false;
    }

    is_empty_object(val) {
        if (this.is_object && Object.keys(val).length === 0) return true;
        return false;
    }

    is_string(val) {
        if (typeof val === 'string') return true;
        return false;
    }

    is_empty_string(val) {
        if (this.is_string && val.length === 0) return true;
        return false;
    }

    is_number(val) {
        if (Number.isFinite(val)) return true;
        return false;
    }

    is_array(val) {
        if (Array.isArray(val)) return true;
        return false;
    }

    is_empty_array(val) {
        if (this.is_array && val.length === 0) return true;
        return false;
    }

    is_function(val) {
        if (typeof val === 'function') return true;
        return false;
    }

    is_date(val) {
        return ( val instanceof Date || Object.prototype.toString.call(val) === '[object Date]' );
    }

    is_symbol(val) {
        return ( typeof val === 'symbol' || (typeof val === 'object' && Object.prototype.toString.call(val) === '[object Symbol]') );
    }
    
}