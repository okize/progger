var Progger = require('../lib/progger.js');

var p = new Progger();

p.start();

setTimeout(function() {
  p.stop();
  console.log('\n');
}, 5000);