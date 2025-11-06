//Functions
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Function types
// Optional and default parameters
// Rest parameters
// Overloads
function doSomething(name, age) {
}
var func = function () {
};
// Function types
function abcd(name, cb) {
    cb(name);
}
abcd('talhhha', function (name) { console.log(name); });
// Optional and Default parameter
function user(name, age, gender, loggedIn) {
    if (loggedIn === void 0) { loggedIn = false; }
}
// Rest operator
function rest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
}
rest(123, 231, 23, 23, 2, 32, 2, 3, 4, 3, 3);
/// Spread Operator 
console.log.apply(console, [1, 2, 3, 4, 5]);
//Generics
// Generic functions
// Generic interfaces
// Generic classes
// Not Good
function something(a) {
}
something('talha');
something(2);
something(true);
// Generic function example
function generic(value) {
    return value;
}
console.log(generic('tlahha'));
console.log(generic(23));
// Type assertion
var a = '151';
console.log(typeof Number(a)); // This is type casting
// Type Guards and TypeScript Utility Types
// Using typeof and instanceof
// Partial, Required, Readonly
function abcde(a) {
    // type narrowing
    if (typeof a === 'string') {
    }
    else if (typeof a === 'number') {
    }
    else {
        throw new Error('Pagal ho gya kia');
    }
}
// using instanceof
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log('ANimal is walking...');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        console.log('Cat is meowing...');
    };
    return Cat;
}(Animal));
var ca = new Cat();
console.log(ca instanceof Animal);
console.log(ca instanceof Cat);
