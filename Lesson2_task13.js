/**
 * Author: Pidgola Stanislav
 */

var array = [1, 2, 5, 9, 40, 13, 4, 10, 12, 15];

function f ( arr ){
    for ( var i = 0; i < arr.length; i++ ){
        if ( arr[i] === 4 ){
            console.log('Есть!');
            break;
        }
    }
}
f(array);