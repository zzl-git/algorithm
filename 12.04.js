var func = function(A,B) {
    var arr =[];
    var max,min;
    if(A.length> B.length) {
        max = A;
        min = B;
    }else {
        max = B;
        min = A;
    }
    var fenzi = clFunc(max.filter(function(item, index){
        arr.push(item);
        min[index]? arr.push(min[index]): '';
        return min.indexOf(item)>-1
    }))
    var fenm = clFunc(arr);
    return fenzi.length/fenm.length
}
function clFunc(arr) {
    var newArr =[];
    for(var i =0; i<arr.length; i++) {
        newArr.indexOf(arr[i]) == -1? newArr.push(arr[i]) : '';
    }
    return newArr;
}
console.log(func(['P1','P2','P3','P1','P4','P2'],['P1', 'P1', 'P4' ,'P5']));