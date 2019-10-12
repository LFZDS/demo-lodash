export default (collection, iteratee) => {
    const func = Array.isArray(collection) ? arrayMap: baseMap;
    return func(collection, baseIteratee(iteratee));
}

function arrayMap  (collection, iteratee) {
    let i = -1;
    let length = collection == null ? 0 : collection.length;
    while(++i < length) {
        if (iteratee( collection[i], i, collection) === false) {
            break;
        };
    }
    return collection;
}

function baseMap (collection, iteratee) {
    let i = 0;

    const props = keyFunc(collection);
    let length = props.length;
    while (length--) {
        const key = props[i++ ];
        if (iteratee(collection[key], key, collection) === false) {
            break;
        };
    }
    return collection;
}

function keyFunc (object) {
    const result = [];
    for (const key in object) {
        if (hasOwnProperty.call(object, key) && key !== 'constructor') {
            result.push(key);
        }
    }
    return result;
}

function baseIteratee(iteratee) {
    if (typeof iteratee === 'function') {
        return iteratee;
    }
    if (typeof iteratee === 'object') {
        const keys = keyFunc(iteratee);
        // 源码比较复杂，这里简写 {aa: 11, bb: 22}
        return (value, key, collection) => {
            let i = 0;
            let length = keys.length;
            while(length--) {
                if (value[keys[i]] !== iteratee[keys[i]]) {
                    return false;
                }
                i++;
            }
            return true;
        }
    }
}