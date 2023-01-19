// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

function run(command, subject, input) {
  if (command === 'S') {
    return input
      .replace('()', '')
      .replace(/[A-Z]/g, (l, i) => `${i == 0 ? '' : ' '}${l.toLowerCase()}`);
  }

  if (command === 'C') {
    return (
      input
        .split(' ')
        .map((str, i) => {
          if (i === 0 && subject !== 'C') {
            return str;
          }
          return str.substring(0, 1).toUpperCase() + str.substring(1);
        })
        .join('') + (subject === 'M' ? '()' : '')
    );
  }
  throw new Error(
    `invalid entry: [command = ${command}, subject = ${subject}, input = ${input}]`
  );
}

function processData(input) {
  let arr = input.split('\n').filter(el => !!el).map(el => el.replace('\r', ''));
  console.log(arr.map(el => {
    const [command, subject, input] = el.split(';');
    return run(command, subject, input);
  }).join('\n'));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
