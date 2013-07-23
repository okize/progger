# progger [![NPM version](https://badge.fury.io/js/progger.png)](http://badge.fury.io/js/progger)

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

## Install

```
npm install progger
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[![NPM](https://nodei.co/npm/progger.png)](https://nodei.co/npm/progger/)