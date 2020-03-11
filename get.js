export default (object, path, defaultVal) => {

    if (typeof path !== 'array') {
        if (isKey(path, object)) {
            path = [path];
        } else {
            path = path == null ? '' : stringToPath(toString(path));
        }
    }

    let i = 0;
    while(object !== null && i < path.length && object !== undefined) {  // ？源码没有undefined
        object = object[path[i ++ ]];
    }
    return i && i == path.length ? object: defaultVal;
}


function isKey (value, object) {
    // var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    //     reIsPlainProp = /^\w*$/;
    var reIsDeepProp = /\.|\[(\w)\]/,  // 匹配 aa.bb  [0] ['aa']
        reIsPlainProp = /^\w*$/;

    const type = typeof  value;
    if (type == 'number' || type == 'boolean' || type == 'symbol' || value === null) {
        return true;
    }
    // Object(object)将object转成对象，防止报错把，应该
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object !== null && value in Object(object));
}

function toString (value) {
    if (typeof value == 'string') {
        return value;
    }
    if (typeof value == 'symbol') {
        // TODO 一些处理，不太熟悉symbol
    }
    let result = value + '';
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

function stringToPath (string) {
    // var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    const rePropName = /[^.\[\]]+|\[(\w)\]/g;
    const result = [];
    string.replace(rePropName, function (match, number, quote, subString) {
        // result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
        result.push(number || match);
    });
    return result;
}
