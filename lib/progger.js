// Progger constructor
function Progger () {

  this.options = {
    speed: 100,
    token: '.'
  };

}

// var to hold timer reference
Progger.prototype.timer = '';

// start progress ticker
Progger.prototype.start = function () {
  var opts = this.options;
  this.timer = setInterval(function () {
    process.stdout.write(opts.token);
  }, opts.speed);
};

// stop progress ticker
Progger.prototype.stop = function () {
  clearInterval(this.timer);
  process.stdout.write('\n');
};

module.exports = Progger;