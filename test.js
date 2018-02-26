import test from 'ava';
import m from './src';
import camelCase from 'camelcase';

test('main', t => {
  t.true(m({ 'foo-bar': true }, camelCase).fooBar);
});

test('exclude option', t => {
  t.true(m({ '--': true }, camelCase, { exclude: ['--'] })['--']);
  t.deepEqual(m({ 'foo-bar': true }, camelCase, { exclude: [/^f/] }), { 'foo-bar': true });
});

test('deep option', t => {
  t.deepEqual(
    // eslint-disable-next-line camelcase
    m({ foo_bar: true, obj: { one_two: false, arr: [{ three_four: true }] } }, camelCase, { deep: true }),
    { fooBar: true, obj: { oneTwo: false, arr: [{ threeFour: true }] } }
  );
});

test('accepts an array of objects', t => {
  t.deepEqual(
    // eslint-disable-next-line camelcase
    m([{ foo_bar: true }, { bar_foo: false }, { 'bar-foo': 'false' }], camelCase),
    [{ fooBar: true }, { barFoo: false }, { barFoo: 'false' }]
  );
});
