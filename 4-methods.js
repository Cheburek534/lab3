'use strict';

const iface = {
 //різна кількість параметрів
  m1: x => [x],
  
  m2: function (x, y) {
    return [x, y];
  },
  
  m3(x, y, z) {
    return [x, y, z];
  }
};

//масив пар 
const result = Object.entries(iface)
  .map(([key, fn]) => [key, fn.length]);

console.log(result);

