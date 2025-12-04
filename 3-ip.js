'use strict';

//без reduce
const ipToInt = (ip) => {
  const bytes = ip.split('.').map(Number); 
  
  // bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3]
  return (
    (bytes[0] << 24) + 
    (bytes[1] << 16) + 
    (bytes[2] << 8) + 
    bytes[3]
  );
};

console.log(ipToInt('192.168.1.10'));  

//з reduce
const ipToIntReduce = (ip) => {
  return ip
    .split('.')                    // Розбиває на масив 
    .map(Number)                   // Конвертує в числа 
    .reduce((acc, byte, index) => {
      
      const shift = 8 * (3 - index); / Зсуває кожен байт на потрібну позицію 
      return acc + (byte << shift);
    }, 0);
};

console.log(ipToIntReduce('192.168.1.10'));  // 3232235786
