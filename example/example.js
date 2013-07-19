var Progger = require('../lib/progger.js');

var p1 = new Progger();
var p2 = new Progger();
var p3 = new Progger();

console.log('start first progger');
p1.start();

setTimeout(function() {
  p1.stop();
  console.log('\n');
  console.log('start second progger');
  p2.start();
}, 1500);

setTimeout(function() {
  p2.stop();
  console.log('\n');
  console.log('start third progger');
  p3.start();
}, 4500);

setTimeout(function() {
  p3.stop();
  console.log('\n');
}, 10500);