// var A, B;
// // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// while ((A=readInt()) != null && (B=readInt()) != null) {
//   print (A + ' ' + B);
//   // 循环读取“接下来的M行”
//   for (let i=0; i<B; i++) {
//     let a = readInt();
//     let b = readInt();
//     let c = readInt();
//     // 每行是3个整数，a，b，c。
//     print(a + ' ' + b + ' ' + c);
//   }
//   // M行读取完了，就又要开始下一组了，去while那里。
// }
var N = 5;
var arr =[
    [3, 3, 3],
    [2, 4, 2],
    [2, 2, 2],
    [2, 2, 2],
    [10, 15, 13],
]
var func = function(N, arr) {
    var num = 0;
    for (var i = 0; i < N; i++) {
        var newArr = arr[i];
        var isMin = newArr.every(function(item,index){
            for (var g = 0; g < N; g++) {
                return item < arr[g][index]
            }
        });
        isMin? num +=1: '';
    }
    console.log(num);
}
func(N, arr)



