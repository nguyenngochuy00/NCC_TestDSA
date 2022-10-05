function intersection(a, b) {
    var d = {};
    var result = [];
    for (var i = 0; i < b.length; i++) {
        d[b[i]] = true;
    }
    for (var i = 0; i < a.length; i++) {
        if (d[a[i]]) 
            result.push(a[i]);
    }
    return result;
}
console.log(intersection([1, 3, 4, 2, 7, 9, 10, 6, 8], [1, 3, 9, 11, 5, 7, 13]));