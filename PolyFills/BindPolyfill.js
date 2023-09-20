// Implement a polyfill of bind()
const obj = { first: 'ritesh', last: 'kumar' };

Function.prototype.myBind = function (...params) {
    // setting the this ref to a variable to form a closure
    const obj = this;
    console.log(params);

    return function (...returnedFunctionParamList) {
        // using apply to handle multiple args;
        // combine args from bind polyfill and the returned function call args

        obj.apply(params[0], [...params.splice(1), ...returnedFunctionParamList]);
    };
};

function printName(age, town) {
    console.log(`${this.first} ${this.last} ${age} ${town}`);
}

const print = printName.myBind(obj, 27);

print('Auckland');
