/**
 * Author: Pidgola Stanislav
 */


var arr = [1,2,3,4,5,6,7];

function arrSum( array ){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log('Сумма элементов масива ' + sum);
}
arrSum(arr);