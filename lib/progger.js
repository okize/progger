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
  this._pDir = 1;
  this._pIt = 0;

}

// var to hold timer reference
Progger.prototype._timer = '';

// returns speed that tokens should be printed to console
Progger.prototype._getSpeed = function () {

  return this.options.speed;

};

// returns color for token
Progger.prototype._getColor = function (color) {

  var colors = {
    'black': '\x1B[30m',
    'red': '\x1B[31m',
    'green': '\x1B[32m',
    'yellow': '\x1B[33m',
    'blue': '\x1B[34m',
    'magenta': '\x1B[35m',
    'cyan': '\x1B[36m',
    'white': '\x1B[37m',
    'grey': '\x1B[90m'
  };

  var pride = ['yellow', 'red', 'magenta', 'green', 'cyan', 'blue'];

  function count () {
    this._pIt += this._pDir;
    this._pDir *= (((this._pIt % 5) === 0) ? -1 : 1);
  }

  // 'pride' easter egg
  if (this.options.color === 'pride') {
    color = pride[this._pIt];
    count.call(this);
  }

  return colors[color];

};

// returns a "colored" token
Progger.prototype._getToken = function () {

  return this._getColor(this.options.color) + this.options.token + '\x1B[39m';

};

// start progress ticker
Progger.prototype.start = function () {

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