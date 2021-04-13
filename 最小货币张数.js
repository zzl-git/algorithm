var num = 3;
var array = [1, 4, 9].reverse();
console.log(array);
var all = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    all += element
}
function getNum(num, array, k =2) {
    var arr =[1];
    let allNum =0;
    for (let i = 1; i < num; i++) {
        arr.push(i*k)
    }
    for (let i = 0; i < array; i++) {
        const element = array[i];
        for (let index = 0; index < num; index++) {
            var key = element%arr[index]
           if( key !== 0) {
               continue;
           }
           
           allNum += element%arr[index]
        }
         
    }
}