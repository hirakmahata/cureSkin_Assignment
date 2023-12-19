function objectToArray(input) {
  return Object.keys(input).map((key) => ({ [key]: input[key] }));
}

let result = objectToArray({ a: 1, b: 2, c: 3 });

console.log(result);
