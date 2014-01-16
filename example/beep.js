var Progger = require('../lib/progger.js');

var p = new Progger({
  speed: 500,
  token: '.',
  color: 'red',
  beep: true
});

p.start();

setTimeout(function() {
  p.stop();
  console.log('\n');
}, 5000);