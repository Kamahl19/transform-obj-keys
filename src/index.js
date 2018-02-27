import mapObj from 'map-obj';

const has = (arr, key) => arr.some(x => (typeof x === 'string' ? x === key : x.test(key)));

const transform = (input, transformFunc, opts) => {
  opts = Object.assign(
    {
      deep: false,
    },
    opts
  );

  return mapObj(
    input,
    (key, val) => {
      key = opts.exclude && has(opts.exclude, key) ? key : transformFunc(key);

      return [key, val];
    },
    { deep: opts.deep }
  );
};

export default (input, transformFunc, opts) =>
  Array.isArray(input)
    ? Object.keys(input).map(key => transform(input[key], transformFunc, opts))
    : transform(input, transformFunc, opts);
