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