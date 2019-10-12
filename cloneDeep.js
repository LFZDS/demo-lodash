import forEach from './forEach';

export default (value) => {
    return baseCLone(value);
}
function baseCLone (value) {
    let result;
    if (Array.isArray(value)) {
        result = Array(value.length);
    } else {
        const propertys = Object.getPrototypeOf(value);
        result = Object.create(propertys);
    }
    if (typeof value !== 'object') {
        return value;
    }
    forEach(value, (item, key) => {
        result[key] = baseCLone(item);
    });
    return result;
}