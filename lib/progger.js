var colors = require('colors');

// merges options with defaults
function optMerge (defaults, options) {
  for (var p in options) {
    if (options[p] && options[p].constructor && options[p].constructor === Object) {
      defaults[p] = defaults[p] || {};
      options(defaults[p], options[p]);
    } else {
      defaults[p] = options[p];
    }
  }
  return defaults;
}

// Progger constructor
function Progger (options) {

  // default options
  this.options = optMerge({
    speed: 100,
    token: '.',
    color: 'grey'
  }, options);

}

// var to hold timer reference
Progger.prototype.timer = '';

// start progress ticker
Progger.prototype.start = function () {
  var opts = this.options;
  this.timer = setInterval(function () {
    process.stdout.write(opts.token[opts.color]);
  }, opts.speed);
};

// stop progress ticker
Progger.prototype.stop = function () {
  clearInterval(this.timer);
  process.stdout.write('\n');
};

module.exports = Progger;