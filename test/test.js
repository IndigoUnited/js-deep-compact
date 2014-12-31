'use strict';

var expect = require('expect.js');
var compact = require('../');

describe('deep-compact', function () {
    describe('primitive input', function () {
        it('should return null on null/undefined values', function () {
            expect(compact(undefined)).to.equal(null);
            expect(compact(null)).to.equal(null);
        });

        it('should return null on empty strings', function () {
            expect(compact('')).to.equal(null);
        });

        it('should trim strings', function () {
            expect(compact(' ')).to.equal(null);
            expect(compact(' hi ')).to.equal('hi');
        });

        it('should return the value if is neither null/undefined or an empty string', function () {
            var value;

            expect(compact(' hi ')).to.equal('hi');

            expect(compact(1)).to.equal(1);
            expect(compact(0)).to.equal(0);

            expect(compact(true)).to.equal(true);
            expect(compact(false)).to.equal(false);

            value = /foo/;
            expect(compact(/foo/)).to.eql(/foo/);

            value = new Date();
            expect(compact(value)).to.equal(value);

            function Person() {}
            value = new Person();

            expect(compact(Person)).to.equal(Person);
            expect(compact(value)).to.equal(value);
        });
    });

    describe('object input', function () {
        it('should remove null/undefined values recursively', function(){
            expect(compact({ foo: null })).to.equal(null);
            expect(compact({ foo: undefined })).to.equal(null);

            expect(compact({ foo: { bar: null } })).to.equal(null);
            expect(compact({ foo: { bar: undefined } })).to.equal(null);
            expect(compact({ foo: { bar: null, baz: 1 } })).to.eql({ foo: { baz: 1 }});
        });

        it('should remove empty string values', function(){
            expect(compact({ foo: { bar: '' } })).to.equal(null);
            expect(compact({ foo: { bar: '  ' } })).to.equal(null);
            expect(compact({ foo: { bar: null, baz: ' hi ' } })).to.eql({ foo: { baz: 'hi' }});
        });
    });

    describe('array input', function () {
        it('should remove null/undefined values', function(){
            expect(compact([null])).to.equal(null);
            expect(compact([undefined])).to.equal(null);
            expect(compact([1])).to.eql([1]);
        });

        it('should remove empty string values', function(){
            expect(compact([''])).to.equal(null);
            expect(compact(['  '])).to.equal(null);
            expect(compact([' hi '])).to.eql(['hi']);
        });
    });

    describe('mixed & complex array/object input', function () {
        it('should work well', function () {
            var original;
            var compacted;

            original = {
                something: [
                    {
                        colors: ['red', 'green', ''],
                        cars: { audi: 'nice', vw:'good', aston: '' }
                    },
                    undefined,
                    ''
                ],
                foo: 'bar'
            };
            compacted = {
                something: [
                    {
                        colors: ['red', 'green'],
                        cars: { audi:'nice', vw:'good' }
                    }
                ],
                foo: 'bar'
            };

            expect(compact(original)).to.eql(compacted);

            original = [
                {
                    something: [
                        {
                            colors: ['red', 'green', ''],
                            cars: { audi: 'nice', vw:'good', aston: '' }
                        },
                        undefined,
                        ''
                    ],
                    foo: 'bar'
                },
                null,
                undefined,
                ' ',
                '',
                'foo'
            ];
            compacted = [
                {
                    something: [
                        {
                            colors: ['red', 'green'],
                            cars: { audi: 'nice', vw:'good' }
                        }
                    ],
                    foo: 'bar'
                },
                'foo'
            ];

            expect(compact(original)).to.eql(compacted);
        });
    });
});
