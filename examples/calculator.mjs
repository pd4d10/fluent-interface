import fi from "fluent-interface";

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

console.log(result.value);
