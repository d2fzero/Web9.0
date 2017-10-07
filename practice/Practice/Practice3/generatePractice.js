'use strict'

// function generate(numberOfTestcases, filePath = "./test-data.json"){
//   return Array.from(Array(numberOfTestcases)); // Remove this line and change to your own algorithm
// }
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateInput() {
  var input = [];
  var length = randomNum(0, 500);
  for (var i = 0; i < length; i++) {
    input[i] = randomNum(-10000, 10000);
  }
  input.sort((a, b) => a - b);
  return input;
  function generate(numberOfTestcases, filePath = "./test-data.json") {
    let arr = [];
    if (numberOfTestcases >= 5) {
        //Empty array
        let obj = {
            "input": [],
            "target": randomInt(-10000, 10000),
            "output": -1
        };
        arr.push(obj);

        //Not found
        let input = generateInputArray();
        let temp = randomInt(-10000, 10000);
        while (input.indexOf(temp) !== -1)
        {
          temp = randomInt(-10000, 10000);
        }
        obj = {
            "input": input,
            "target": temp,
            "output": -1
        };
        arr.push(obj);

        //First index
        input = generateInputArray();
        obj = {
            "input": input,
            "target": input[0],
            "output": 0
        };
        arr.push(obj);

        //Last index
        input = generateInputArray();
        obj = {
            "input": input,
            "target": input[input.length - 1],
            "output": input.length - 1
        };
        arr.push(obj);

        //Middle index
        input = generateInputArray();
        obj = {
            "input": input,
            "target": input[Math.floor(input.length / 2)],
            "output": Math.floor(input.length / 2)
        };
        arr.push(obj);

        for (let i = 5; i < numberOfTestcases; i++) {
            input = generateInputArray();
            temp = randomInt(0, input.length);
            obj = {
                "input": input,
                "target": input[temp],
                "output": temp
            };
            arr.push(obj);
        }
    }
    }
    writeFile(filePath, arr);
    return arr;

//    return Array.from(Array(numberOfTestcases)); // Remove this line and change to your own algorithm
}

module.exports = generate
