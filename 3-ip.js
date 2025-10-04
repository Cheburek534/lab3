'use strict';
//without reduce
const changedIp = (ip) => {
 const arr = ip.split('.').map(Number);
 return (ip[0]<<8<<8<<8) + (ip[1]<<8<<8) + (ip[2]<<8) + ip[3];
};
console.log(changedIp("192.168.1.10"));

//with reduce
const changedIpReduce = (ip) => {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte, index) => acc + (byte << (8 * (3 - index))), 0);
};
console.log(changedIpReduce("192.168.1.10"));