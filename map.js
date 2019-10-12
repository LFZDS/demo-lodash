export default (collection, iteratee) => {
    const func = Array.isArray(collection) ? arrayMap: baseMap;
    return func(collection, baseIteratee(iteratee));
}

function arrayMap  (collection, iteratee) {
    let i = -1;
    let length = collection == null ? 0 : collection.length;
    let result = Array(length);
    while(++i < length) {
        result[i] = iteratee( collection[i], i, collection);
    }
    return result;
}

function baseMap (collection, iteratee) {
    let i = 0;
    let result = [];

    const props = keyFunc(collection);
    let length = props.length;
    while (length--) {
        const key = props[i];
        result[i++] = iteratee(collection[key], key, collection);
    }
    return result;
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

    // aa的情况，如果是aa.bb情况可以用get方法获取
    return (object) => {
        return object === null ? undefined : object[iteratee];
    }
}