[![NPM version](https://badge.fury.io/js/progger.png)](http://badge.fury.io/js/progger)

# progger

Progress meter for events of unknown time &amp; magnitude. Like, say, you've got a series of http requests that you don't know when will return data.

# example

``` js
var Progger = require('progger');

var p = new Progger();

p.start();

setTimeout(function() {
  p.stop();
}, 5000);
```

***

# methods

``` js
var launcher = require('launcher')
```

## start()

Starts a progress ticker in your terminal.

## stop()

Stops the progress ticker.



# install

```
npm install progger
```

# license

MIT


[![NPM](https://nodei.co/npm/progger.png)](https://nodei.co/npm/progger/)