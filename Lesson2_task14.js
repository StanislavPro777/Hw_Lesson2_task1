/**
 * Author: Pidgola Stanislav
 */

var n = 1000;
var num = 0;

    while ( n >= 50 ){
       n /= 2;
       num ++;
    }
console.log('Результат деления: ' + n);
console.log('Количество итераций: ' +  num);