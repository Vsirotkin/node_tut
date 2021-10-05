const names = require('./4_names');
const sayHi = require('./5_utils');
console.log(names);
console.log(sayHi);
const data = require('./6_alternativeFlavor');
console.log(data);
require('./7_mindGrenade')

sayHi(names.john);
sayHi(names.peter);