'use strict'

function sort(input) {
  for (let i = 0; i < input.length-1;i++)
  		for (let j = i + 1; j < input.length;j++)
      if (input[i]>input[j])
  {    let count = input[i];
  input[i] = input[j];
  input[j] = count;
  }
  return input;
}


module.exports = sort
