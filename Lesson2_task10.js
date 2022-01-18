/**
 * Author: Pidgola Stanislav
 */

var arr = [6,5,4,3,8,7,9,2,1];

const sortUp = function ( arr )  {
    let stepsCount = arr.length - 1;
    let swapped;
    do {
        swapped = false;

        for ( let i = 0; i < stepsCount; i += 1 ) {
            if ( arr[i] > arr[i + 1] ) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        stepsCount -= 1;
    } while ( swapped );

    return arr;
};

console.log('Отсортировать масив по возрастанию ' + sortUp(arr));




