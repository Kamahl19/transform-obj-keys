/* global describe, it, before */

import chai from 'chai';
import transformObjKeys from '../lib/transform-obj-keys.js';

chai.expect();

const expect = chai.expect;

const transformFunc = str => str.toUpperCase();

describe('main', () => {
  it('should convert to UPPERCASE', () => {
    expect(transformObjKeys({ 'foo-bar': true }, transformFunc)['FOO-BAR']).to.be.equal(true);
  });
});

describe('exclude option', () => {
  it('should convert to UPPERCASE and exclude keys', () => {
    expect(transformObjKeys({ '--': true }, transformFunc, { exclude: ['--'] })['--']).to.be.equal(
      true
    );
    expect(
      transformObjKeys({ 'foo-bar': true }, transformFunc, { exclude: [/^f/] })['foo-bar']
    ).to.be.equal(true);
  });
});

describe('deep option', () => {
  it('should convert deep objects and arrays of objects', () => {
    expect(
      transformObjKeys(
        { foo_bar: true, obj: { one_two: false, arr: [{ three_four: true }] } },
        transformFunc,
        { deep: true }
      )
    ).to.deep.equal({ FOO_BAR: true, OBJ: { ONE_TWO: false, ARR: [{ THREE_FOUR: true }] } });
  });
});

describe('accepts an array of objects', () => {
  it('should should accept array of objects', () => {
    expect(
      transformObjKeys(
        [{ foo_bar: true }, { bar_foo: false }, { 'bar-foo': 'false' }],
        transformFunc
      )
    ).to.deep.equal([{ FOO_BAR: true }, { BAR_FOO: false }, { 'BAR-FOO': 'false' }]);
  });
});
