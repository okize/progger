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

  // terminal color support
  this.colors = (process.env.TERM === 'xterm-256color') ? 'full' : 'limited';

  // tracking for 'pride'
  this.state = 0;

}

// var to hold timer reference
Progger.prototype._timer = '';

// returns speed that tokens should be printed to console
Progger.prototype._getSpeed = function () {

  return this.options.speed;

};

// returns color for token
Progger.prototype._getColor = function (color, stf) {

  var colors = {
    'black'     : ['\x1B[30m', '\x1B[39m'],
    'red'       : ['\x1B[31m', '\x1B[39m'],
    'green'     : ['\x1B[32m', '\x1B[39m'],
    'yellow'    : ['\x1B[33m', '\x1B[39m'],
    'blue'      : ['\x1B[34m', '\x1B[39m'],
    'magenta'   : ['\x1B[35m', '\x1B[39m'],
    'cyan'      : ['\x1B[36m', '\x1B[39m'],
    'white'     : ['\x1B[37m', '\x1B[39m'],
    'grey'      : ['\x1B[90m', '\x1B[39m']
  };

  var pride = ['yellow', 'red', 'magenta', 'green', 'cyan', 'blue'];

  // 'pride' easter egg
  if (this.options.color === 'pride') {
    color = pride[this.state];
    if (this.state >= 0 && this.state < (pride.length - 1)) {
      this.state++;
    } else {
      this.state--;
    }
  }

  return colors[color][stf];

};

// returns a "colored" token
Progger.prototype._getToken = function () {

  var token = this._getColor(this.options.color, 0) +
              this.options.token +
              this._getColor(this.options.color, 1);

  return token;

};

// start progress ticker
Progger.prototype.start = function () {

  var opts = this.options;
  var self = this;

  self._timer = setInterval(function () {
    process.stdout.write(self._getToken());
  }, self._getSpeed());

};

// stop progress ticker
Progger.prototype.stop = function () {

  clearInterval(this._timer);

  process.stdout.write('\n');

};

module.exports = Progger;