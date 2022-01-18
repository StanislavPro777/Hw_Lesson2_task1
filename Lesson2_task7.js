/**
 * Author: Pidgola Stanislav
 */

// сумма четных чисел 20
var array = [1,2,3,4,5,6,7,8,9];

function arrSum( arr ){
    let sum = 0;

    for ( let i = 0; i < arr.length; i++ ){
            if ( arr[i] % 2 == 0 )
            sum += arr[i];
    }
    console.log('Сумма четных элементов масива ' + sum);
}
arrSum(array);

