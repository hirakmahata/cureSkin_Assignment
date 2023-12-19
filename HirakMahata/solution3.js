function arrayToObject(input) {
  return Object.assign({}, ...input);
}

let result = arrayToObject([{ a: 1 }, { b: 2 }, { c: 3 }]);

console.log(result);
