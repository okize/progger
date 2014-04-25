var Progger = require('../lib/progger.js');

var pride = new Progger({
  speed: 100,
  token: '.',
  color: 'pride'
});

pride.start();
setTimeout(function() {
  pride.stop();
}, 5000);