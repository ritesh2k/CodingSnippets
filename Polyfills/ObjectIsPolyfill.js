// Polyfill implementation for Object.is`

Object.prototype.myEqualityCheck = function ObjectIs(input1, input2) {
    if (input1 === 0 && input2 === 0) {
        return 1 / input1 === 1 / input2; // -Infinity !== Infinity
    }

    if (input1 !== input1 && input2 !== input2) {
        return true; // only NaN is not equal to itself
    }

    return input1 === input2;
};

// tests:
console.log(Object.myEqualityCheck(42, 42) === true);
console.log(Object.myEqualityCheck('foo', 'foo') === true);
console.log(Object.myEqualityCheck(false, false) === true);
console.log(Object.myEqualityCheck(null, null) === true);
console.log(Object.myEqualityCheck(undefined, undefined) === true);
console.log(Object.myEqualityCheck(NaN, NaN) === true);
console.log(Object.myEqualityCheck(-0, -0) === true);
console.log(Object.myEqualityCheck(0, 0) === true);

console.log(Object.myEqualityCheck(-0, 0) === false);
console.log(Object.myEqualityCheck(0, -0) === false);
console.log(Object.myEqualityCheck(0, NaN) === false);
console.log(Object.myEqualityCheck(NaN, 0) === false);
console.log(Object.myEqualityCheck(42, '42') === false);
console.log(Object.myEqualityCheck('42', 42) === false);
console.log(Object.myEqualityCheck('foo', 'bar') === false);
console.log(Object.myEqualityCheck(false, true) === false);
console.log(Object.myEqualityCheck(null, undefined) === false);
console.log(Object.myEqualityCheck(undefined, null) === false);
