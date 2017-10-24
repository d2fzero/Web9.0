'use strict'

// function generate(numberOfTestcases, filePath = "./test-data.json"){
//   return Array.from(Array(numberOfTestcases)); // Remove this line and change to your own algorithm
// }
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateInput() {
  var input = [];
  var length = randomNumber(0, 500);
  for (var i = 0; i < length; i++) {
    input[i] = randomNumber(-10000, 10000);
  }
  input.sort((a, b) => a - b);
  return input;
  function generate(numberOfTestcases, filePath = "./test-data.json") {
    let arr = [];
    if (numberOfTestcases >= 5) {
        //Empty array
        let obj = {
            "input": [],
            "target": randomNumber(-10000, 10000),
            "output": -1
        };
        arr.push(obj);

        //Not found
        let input = generateInput();
        let temp = randomNumber(-10000, 10000);
        while (input.indexOf(temp) !== -1)
        {
          temp = randomNumber(-10000, 10000);
        }
        obj = {
            "input": input,
            "target": temp,
            "output": -1
        };
        arr.push(obj);

        //First index
        input = generateInput();
        obj = {
            "input": input,
            "target": input[0],
            "output": 0
        };
        arr.push(obj);

        //Last index
        input = generateInput();
        obj = {
            "input": input,
            "target": input[input.length - 1],
            "output": input.length - 1
        };
        arr.push(obj);

        //Middle index
        input = generateInput();
        obj = {
            "input": input,
            "target": input[Math.floor(input.length / 2)],
            "output": Math.floor(input.length / 2)
        };
        arr.push(obj);


    }

    writeFile(filePath, arr);
    return arr;
  s}
}

module.exports = generate
