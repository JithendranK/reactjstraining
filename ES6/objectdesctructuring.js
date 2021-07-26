let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let firstName = person.firstName;
let lastName = person.lastName; 

let { firstName: fname, lastName: lname } = person;

let { firstName, lastName } = person;
({firstName, lastName} = person);

let { firstName, lastName, middleName } = person;
console.log(middleName); // undefined

let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28

let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};

let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // 'C.'
console.log(age); // 28

function getPerson() {
    return null;
}

let { firstName, lastName } = getPerson();

console.log(firstName, lastName);

let { firstName, lastName } = getPerson() || {};

let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    }
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe

let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }

let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);
