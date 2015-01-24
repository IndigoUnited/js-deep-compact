# deep-compact [![Build Status](https://travis-ci.org/IndigoUnited/js-deep-compact.svg?branch=master)](https://travis-ci.org/IndigoUnited/js-deep-compact)

Recursively compacts collection values (arrays and objects), removing empty values from your arrays & objects.   
It will also trim and remove empty strings.


## Installation

`$ npm install deep-compact` - `NPM`   
`$ bower install deep-compact` - `bower`

The browser file is named `index.umd.js` which supports CommonJS, AMD and globals (`deepCompact`).
If you want to run this module on old browsers, you must include [es5-shim](https://github.com/es-shims/es5-shim).



## Usage

```js
var deepcompact = require('deep-compact');

deepcompact({
    something: [
        {
            colors: ['red', ' green ', ''],
            cars: { audi: 'nice', vw: 'good', aston: '  ' }
        },
        undefined,
        ''
    ],
    foo: 'bar'
});

/*
{
    something: [
        {
            colors: ['red', 'green'],
            cars: { audi: 'nice', vw: 'good' }
        }
    ],
    foo: 'bar'
});
*/
```


## Tests

`$ npm test`


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
