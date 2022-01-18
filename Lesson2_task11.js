/**
 * Author: Pidgola Stanislav
 */

var array = [2, 5, 9, 6, 15, 0, 4];

function f ( arr ){
    for ( var i = 0; i < arr.length; i++ ){
        if ( arr[i] > 3 && arr[i] < 10 ){
            console.log('Ответ ' + arr[i] + ' <br>');
        }
    }
    return arr;
}
f(array);