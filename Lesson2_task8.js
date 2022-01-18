/**
 * Author: Pidgola Stanislav
 */

// сумма четных чисел больше 3 : 10
var array = [1,2,3,4,5,6,7];

function arrSum( arr ){
    let sum = 0;

    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] % 2 == 0 && arr[i] > 3)
            sum += arr[i];
    }
    console.log('Сумма четных элементов масива больше 3 : ' + sum);
}
arrSum(array);

