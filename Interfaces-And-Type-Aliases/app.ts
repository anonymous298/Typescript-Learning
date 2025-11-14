// Interfaces and Type Aliases
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersecion types

interface User {
    name: string,
    email: string,
    password: string,
    gender?: string
}

function doSomething(obj: User) {
    
}

doSomething({name : 'talhah', email : 'talha@gmail.com', password : 'abcd123'})


// Extending Interfaces

interface Engine {
    engine: string,
    engineModel: string,
    engineManufactureDate: number
}

interface Car extends Engine {
    carModel: string,
    carCompany: string
}

function manufactureCar(details: Car) {
    
}

manufactureCar({
    engine : 'petrol',
    engineModel : 'v8',
    engineManufactureDate : 1997,
    carModel : 'Land Cruiser',
    carCompany : 'toyota'
}) 


// Type Aliases

type custom = number | string | boolean

let a: custom  = 'talha'

type arg = number | boolean

function abcd(val: arg) {

}

abcd(true)


// Intersection types

type User1 = {
    name: string,
    email: string,
}

type Admin = User1 & {
    getDetails(user: string): void,
    permission: boolean,

}

function something(arg: Admin) {

}

function method(user: string): void {
    console.log('')
}

something({
    name : 'talha',
    email : 'talhha@gmail.com',
    getDetails : method,
    permission: true
})

// Interface helps us to create object shape

interface random {
    a: string,
    b: number,
    c: boolean
}

let randomObj: random = {
    a : '',
    b : 2,
    c : true
}

// type help us to check values and its types

type abc = {
    a: string,
    b: number,
    c: null,
    method(inp: number): string,

}

type abcdef = number | string

interface User {
  name: string;
  age: number;
  gender: string;
}

let a: User = {
  name: 'Talha',
  age: 18,
  gender: 'male'
};


interface User {
  name: string;
  age: number;
  gender: string;
}

function greet(user: User) {
  console.log(`Hello ${user.name}, age ${user.age}`);
}

greet({ name: 'Talha', age: 18, gender: 'male' });


type User = {
  name: string;
  age: number;
  gender: string;
};

let b: User = { name: 'Talha', age: 18, gender: 'male' };

type ID = string | number;

let userId1: ID = 123;
let userId2: ID = "abc123";
