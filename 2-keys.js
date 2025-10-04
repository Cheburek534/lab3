'use strict';

const generateKey = (length, characters) => {
  let end = " ";
  for (let i = 0; i < length; i++) {
     end += characters[Math.floor(Math.random() * characters.length)];
  }
  return end;
};

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(11, characters);
console.log(key); 
