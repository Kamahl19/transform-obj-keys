import mapObj from 'map-obj';
import QuickLru from 'quick-lru';

const has = (arr, key) => arr.some(x => (typeof x === 'string' ? x === key : x.test(key)));
const cache = new QuickLru({ maxSize: 100000 });

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
      if (!(opts.exclude && has(opts.exclude, key))) {
        if (cache.has(key)) {
          key = cache.get(key);
        } else {
          const ret = transformFunc(key);

          if (key.length < 100) {
            // Prevent abuse
            cache.set(key, ret);
          }

          key = ret;
        }
      }

      return [key, val];
    },
    { deep: opts.deep }
  );
};

export default (input, transformFunc, opts) =>
  Array.isArray(input)
    ? Object.keys(input).map(key => transform(input[key], transformFunc, opts))
    : transform(input, transformFunc, opts);
