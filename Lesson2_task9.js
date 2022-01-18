/**
 * Author: Pidgola Stanislav
 */

var array = [6,5,4,3,2,1,78,99,180,220,380];

const sortDown = function ( array )  {
    let steps = array.length - 1;
    let swapp;
    do {
        swapp = false;

        for ( let i = 0; i < steps; i += 1 ) {
            if ( array[i] > array[i - 1] ) {
                const temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                swapp = true;
            }
        }
        steps += 1;
    } while ( swapp );

    return array;
};

console.log('Отсортировать масив по убыванию ' + sortDown(array));