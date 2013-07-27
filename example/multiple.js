var Progger = require('../lib/progger.js');

var p1 = new Progger({
  speed: 200,
  token: '-',
  color: 'red'
});
var p2 = new Progger({
  speed: 100,
  token: '*',
  color: 'white'
});
var p3 = new Progger({
  speed: 50,
  token: '.',
  color: 'blue'
});

console.log('start first progger:');
p1.start();

setTimeout(function() {
  p1.stop();
  console.log('\n');
  console.log('start second progger:');
  p2.start();
}, 2000);

setTimeout(function() {
  p2.stop();
  console.log('\n');
  console.log('start third progger:');
  p3.start();
}, 4000);

setTimeout(function() {
  p3.stop();
  console.log('\n');
}, 8000);