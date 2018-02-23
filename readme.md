# transform-obj-keys

> Transform object keys easily using whatever transform function like: [`camelcase`](https://github.com/sindresorhus/camelcase), [`decamelize`](https://github.com/sindresorhus/decamelize), [`uppercamelcase`](https://github.com/SamVerschueren/uppercamelcase), [`to-case`](https://github.com/ianstormtaylor/to-case) or simple String.prototype.toLowerCase()


## Install

```
$ npm install --save transform-obj-keys
```


## Usage

```js
const transformObjKeys = require('transform-obj-keys');
const camelCase = require('camelcase');

// Convert an object
transformObjKeys({'foo-bar': true}, camelCase);
//=> {fooBar: true}

// Convert an array of objects
transformObjKeys([{'foo-bar': true}, {'bar-foo': false}], camelCase);
//=> [{fooBar: true}, {barFoo: false}]

transformObjKeys({'foo-bar': true, nested: {unicorn_rainbow: true}}, camelCase, {deep: true});
//=> {fooBar: true, nested: {unicornRainbow: true}}
```

```js
const transformObjKeys = require('transform-obj-keys');
const camelCase = require('camelcase');

const argv = require('minimist')(process.argv.slice(2));
//=> {_: [], 'foo-bar': true}

transformObjKeys(argv, camelCase);
//=> {_: [], fooBar: true}
```


## API

### transformObjKeys(input, transformFunc, [options])

#### input

Type: `Object` `Object[]`

Object or array of objects to transform.

#### transformFunc

Type: `Function`

Function to manipulate strings

#### options

Type: `Object`

##### exclude

Type: `string[]` `RegExp[]`<br>
Default: `[]`

Exclude keys from being transformed.

##### deep

Type: `boolean`<br>
Default: `false`

Recurse nested objects and objects in arrays.


## License

MIT © [Martin Litvaj](https://litvaj.com)
