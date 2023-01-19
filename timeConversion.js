// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const shift = s.slice(-2);
    let hour = s.slice(0, 2);
    let hourInt = 0;

    if (shift == 'AM' && hour != '12') {
    return s.slice(0, -2);
    }
    if (shift == 'AM' && hour == '12') {
    return '00' + s.slice(2, -2);
    }
    if (shift == 'PM' && hour == '12') {
    return s.slice(0, -2);
    }
    if (shift == 'PM' && hour != '12') {
    hourInt = parseInt(hour);
    hourInt += 12;
    hour = '' + (hourInt);
    return hour + s.slice(2, -2);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
