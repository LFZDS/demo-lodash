import _ from './lodash';

// const getData = {
//     aa: {
//         bb: 2222
//     }
// };
// console.log('get', _.get(getData, 'aa[0].bb', 'getVal'));

// const mapData = {aa: 11, bb: 22};
// console.log('map', _.map(mapData, (item, key) => {
//     return key === 'aa' ? false : item;
// }))
//
//
// const filterData = [{aa: 11, bb: 22}, {aa: 2222}];
// console.log('filter', _.filter(filterData, {aa: 11}));
//
// const forEachData = [{aa: 11, bb: 12}, {aa: 22, bb: 21}, {aa: 99}];
// console.log('foreach', _.forEach(forEachData, (item, index) => {
//     if (item.aa === 22) {
//         return false;
//     }
// }));

// const data =[{aa: 11, bb: 22}, {aa: 22}];
// console.log(_.orderBy(data, 'aa', 'desc'));

// const data =[{aa: 11, bb: 22}, {aa: 22}];
// console.log(sortBy(data, (item) => {
//     return item.aa;
// }));

// const data =[{aa: 11, bb: 22}, {aa: 22}];
// console.log(_.sortBy(data, (item) => {
//     return item.aa;
// }, 'desc'));

const cloneDeepdata = {aa: 11, bb: 22};
console.log(_.cloneDeep(cloneDeepdata));
