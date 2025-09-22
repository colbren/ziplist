function zipList(list1, list2) {
    var result = [];
    for (var i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce(function (acc, value, index) {
        acc.push(value, list2[index]);
        return acc;
    }, []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
