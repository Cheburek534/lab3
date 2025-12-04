'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min); //округлює в меншу сторону
};

console.log(random(5, 36));  
console.log(random(0, 20));  
