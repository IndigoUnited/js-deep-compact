# deep-compact

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/deep-compact
[downloads-image]:http://img.shields.io/npm/dm/deep-compact.svg
[npm-image]:http://img.shields.io/npm/v/deep-compact.svg
[travis-url]:https://travis-ci.org/IndigoUnited/js-deep-compact
[travis-image]:http://img.shields.io/travis/IndigoUnited/js-deep-compact.svg
[david-dm-url]:https://david-dm.org/IndigoUnited/js-deep-compact
[david-dm-image]:https://img.shields.io/david/IndigoUnited/js-deep-compact.svg
[david-dm-dev-url]:https://david-dm.org/IndigoUnited/js-deep-compact#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/IndigoUnited/js-deep-compact.svg

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
