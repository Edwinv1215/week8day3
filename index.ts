// testing
console.log('testing')
// Type Aliases: Creating our own Type


// Union Types: Can allow a variable to be one of many types (number | string)


// TypeScript Arrow Function



// Literal Types (exact)



// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects



// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.



// Creating Classes

// typeof vs instanceof


// private properties and accessing them


// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object

// homework!!!
// 1. Given the data below, define a type alias for representing users.
type User = { name: string; age: number; company?: string; };
let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];
// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
 // 3. Given the Person class below, create a getter for getting the full name of a person.
 class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
     } 
    }
 
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    salary: number
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface EmployeeAddress {
    street: string;
    city: string;
    zipCode: number;
}

interface EmployeeData {
    name: string;
    salary: number;
    address: EmployeeAddress;
}

