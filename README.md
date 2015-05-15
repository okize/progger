[![NPM version](http://img.shields.io/npm/v/progger.svg?style=flat)](https://www.npmjs.org/package/progger)
[![Dependency Status](http://img.shields.io/david/okize/progger.svg?style=flat)](https://david-dm.org/okize/progger)
[![Downloads](http://img.shields.io/npm/dm/progger.svg?style=flat)](https://www.npmjs.org/package/progger)

# Progger

Colorful CLI progress meter for events of unknown time & magnitude.

For example, this could be useful if you have a series of http requests and you want to indicate activity but you can't display a percent meter because it's impossible to know at what point data will be returned.

## Example

``` js
var Progger = require('progger');

var p = new Progger({
  speed: 50,
  token: '*',
  color: 'red'
});

p.start();

setTimeout(function() {
  p.stop();
}, 5000);
```

## Methods

``` js
var launcher = require('launcher')
```

### start()

Starts a progress ticker in your terminal.

### stop()

Stops the progress ticker.

### isRunning()

Returns boolean for ticker status

## Install

```
npm install progger
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
