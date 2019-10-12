function isArray(value) {
    return value && typeof value === 'object' && typeof value.length === 'number' && Object.prototype.toString.call(value) === '[object Array]';
}

function isNumber () {
    // new number(11);
    return typeof value === 'number' ||
        (value && typeof value === 'object' &&  Object.prototype.toString.call(value) === '[object Number]')
}

function isString (value) {
    // new string(11);
    return typeof value === 'string' ||
        (value && typeof value === 'object' &&  Object.prototype.toString.call(value) === '[object String]')
}

function isBoolean (value) {
    return typeof value === 'boolean' ||
        (value && typeof value === 'object' &&  Object.prototype.toString.call(value) === '[object Boolean]')
}

function isFunction() {
    return typeof value === 'function';
}


function isNull(value) {
    return value === null;
}

function isUndefined(value) {
    return value === undefined;
}


function isEmpty(value) {
    if (value === null) {
        return true;
    }
    if (Array.isArray(value)) {
        return !value.length;
    }
    if (Object.prototype.toString.call(value) === '[object Object]') {
        for(const key in value) {
            if (value.hasOwnProperty(key)) {
                return false;
            }
        }
    }
    return true;
}