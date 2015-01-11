/*jshint eqeqeq:false*/

'use strict';

var isPlainObject = require('is-plain-object');
var filter = require('deep-filter');

function compact(value) {
    return filter(value, notEmpty);
}

function notEmpty(value, prop, subject) {
    var key;

    if (Array.isArray(value)) {
        return value.length > 0;
    }

    if (isPlainObject(value)) {
        for (key in value) {
            return true;
        }

        return false;
    }

    if (typeof value === 'string') {
        value = subject[prop] = value.trim();

        return value.length > 0;
    }

    return value != null;
}

module.exports = compact;
