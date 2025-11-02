// Primitive and Reference
// primitive
var a = 19;
var b = a;
var age = 18;
// age = 'talha'
// reference
var c = [1, 2, 3];
var d = c;
d[2] = 10;
// Arrays 
var arr = [1, 2, 3, 4, 5];
var names = ['talha', 'talhha', 'talha'];
var arr2 = [1, 2, 3, 'talha', { name: 'talha' }];
var arr3 = [1, 2, 3, 4, 5];
var names2 = ['talha', 'talhha', 'talha'];
// Tuples
var tupArr = [10, 29, 'talha'];
// Enums
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "admin";
    UserRoles["user"] = "user";
})(UserRoles || (UserRoles = {}));
UserRoles.admin;
// Any, Unknown, Void, Never, Undefined, Null
// let abc: number;
var abc;
abc = 34;
abc = 'talha';
// let abcd;
// abcd = 12
// abcd = 'talha'
// abcd.toUpperCase()
var abcd;
abcd = 12;
abcd = 'talha';
// Type Narrowing
if (typeof abcd === 'string') {
    abcd.toUpperCase();
}
// Void
function sendData(data) {
    console.log('Hello World!');
    console.log('Data Sended...');
}
function getData() {
    return { data: 'data' };
}
// Null
var n;
var n = 'talha';
// Union 
var g;
g = 34;
// Undefined 
var f;
// let f: number;
// Never
function abcf() {
    while (true) {
    }
}
abcf();
console.log('Hello World');
