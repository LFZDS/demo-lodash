import map from './map';

export default (collection, iteratees, orders) => {
    // iteratees  ['name', 'age']  orders: ['desc', 'age'];
    let i = -1;
    orders = Array.isArray(orders) ? orders : [orders];
    iteratees = Array.isArray(iteratees) ? iteratees : [iteratees];

    const result = map(collection, value => {
        const criteria = map(iteratees, iteratee => {
            return value[iteratee];
        });
    
        return {
            criteria: criteria,
            index: ++i,
            value: value
        }
    });

    const sortData = result.sort(function (next, pre) {
        const length = next.criteria.length;
        let i = -1;
        while(++i < length) {
            let flag;
            if (next.criteria[i] >  pre.criteria[i]) {
                flag = 1;
            }

            if (next.criteria[i] <  pre.criteria[i]) {
                flag = -1;
            }
            if (flag) {
                return orders[i] === 'desc' ? -flag : flag;
            }
        }
        return next.index - next.pre;
    });
    return map(sortData, item => {
        return item.value;
    });
}