// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let countPositive = 0;
    let countNegative = 0;
    let countNeutral = 0;

    let posRatios = 0.0;
    let negRatios = 0.0;
    let neuRatios = 0.0;

    const iterator = arr.values();

    for (const value of iterator) {
        if(value > 0) {
        countPositive += 1;
        }
        if(value < 0) {
        countNegative += 1;
        }
        if(value == 0) {
        countNeutral += 1;
        }
    }
    
    posRatios = (((countPositive / arr.length) * 1000000) / 1000000).toFixed(6)
    negRatios = (((countNegative / arr.length) * 1000000) / 1000000).toFixed(6)
    neuRatios = (((countNeutral / arr.length) * 1000000) / 1000000).toFixed(6)
    
    console.log(posRatios)
    console.log(negRatios)
    console.log(neuRatios)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
