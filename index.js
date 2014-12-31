/*jshint eqeqeq:false*/

'use strict';

var isPlainObject = require('is-plain-object');

function compact(value) {
    if (Array.isArray(value)) {
        return compactArray(value);
    }

    if (isPlainObject(value)) {
        return compactObject(value);
    }

    if (typeof value === 'string') {
        value = value.trim();
    }

    return isPrimitiveEmpty(value) ? null : value;
}

function compactObject(obj) {
    var newObj = {};
    var key;
    var value;
    var isEmpty = true;

    for (key in obj) {
        value = compact(obj[key]);

        if (!isPrimitiveEmpty(value)) {
            newObj[key] = value;
            isEmpty = false;
        }
    }

    return isEmpty ? null : newObj;
}

function compactArray(array) {
    var newArray = [];
    var isEmpty = true;

    array.forEach(function (value) {
        value = compact(value);

        if (!isPrimitiveEmpty(value)) {
            newArray.push(value);
            isEmpty = false;
        }
    });

    return isEmpty ? null : newArray;
}

function isPrimitiveEmpty(value){
    if (value == null) {
        return true;
    }

    if (typeof value === 'string') {
        return !value.length;
    }

    return false;
}

module.exports = compact;
