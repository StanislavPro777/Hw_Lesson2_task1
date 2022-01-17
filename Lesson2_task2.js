/**
 * Author: Pidgola Stanislav
 */

var message;
var login = 'Pitter';

message = ( login == 'Pitter' ) ? 'Hi' :
            ( login == 'Owner' ) ? 'Hello' :
                ( login == '' ) ? 'unknown' : '';

console.log(login + ' say ' + message);