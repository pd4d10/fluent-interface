# fluent-interface

[![npm](https://img.shields.io/npm/v/fluent-interface.svg)](https://www.npmjs.com/package/fluent-interface)

Easily build [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) in JavaScript.

## Usage

```js
const add = (t, n) => {
  t.value += n;
  return t;
};

const subtract = (t, n) => {
  t.value -= n;
  return t;
};

const multiply = (t, n) => {
  t.value *= n;
  return t;
};

const divide = (t, n) => {
  t.value /= n;
  return t;
};

const calculator = fi(
  { value: 0 },
  {
    add,
    subtract,
    multiply,
    divide,
  }
);

const result = calculator //
  .add(10)
  .subtract(5)
  .multiply(4)
  .divide(2);

console.log(result.value); // 10
// (0 + 10 - 5) * 4 / 2
```

## License

MIT
