'use strict'
// const fs = require('fs')
// fs.write


function search(input, target) {
    if (target > 10000 || target < -10000) {
      return -1;
    }
    for (let i = 0; i < input.length; i++) {
      if (input[i] === target) {
        return i;
      }
    }
    return -1;
  }


module.exports = search
