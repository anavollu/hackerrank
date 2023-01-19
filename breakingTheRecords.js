// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let countMin = 0;
  let countMax = 0;
  let minNumber = 0;
  let maxNumber = 0;
  let numbers = [];
  let i = 0;
  const lenght = scores.length;

  for (i; i < lenght; i++) {
    if (i == 0) {
      maxNumber = scores[i];
      minNumber = scores[i];
      numbers.push(scores[i]);
    }
    if (i > 0) {
      if(!numbers.includes(scores[i])) {
        if (scores[i] > maxNumber) {
          countMax += 1;
          maxNumber = scores[i];
        }
        if (scores[i] < minNumber) {
          countMin += 1;
          minNumber = scores[i];
        }
        numbers.push(scores[i]);
      }
    }
  }
  return [countMax, countMin];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
