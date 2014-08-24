[![NPM version](http://img.shields.io/npm/v/progger.svg?style=flat)](https://www.npmjs.org/package/progger)
[![Dependency Status](http://img.shields.io/david/okize/progger.svg?style=flat)](https://david-dm.org/okize/progger)
[![Downloads](http://img.shields.io/npm/dm/progger.svg?style=flat)](https://www.npmjs.org/package/progger)

# Progger

Progress meter for events of unknown time &amp; magnitude. Like, say, you've got a series of http requests that you don't know when will return data.

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
