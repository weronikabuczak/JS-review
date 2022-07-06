//1. What are the possible way to create objects in JavaScript?

//a) object constructor
var object = new Object();

//b) object's create method
const car = {
    drive() {
        console.log(this.name + 'drives');
    }
}

const c1 = Object.create(car);
c1.name = 'My Car ';
c1.drive();

//c) object literal syntax
var object = {
    name: 'Anna',
    age: 20
};

//d) function constructor - create any function and apply the new operator 
//to create object instances
//deprecated

function Person(name) {
    this.name = name;
    this.age = 20;
}

var obj = new Person('Anna');

//e) ES6 class syntax
class Person2 {
    constructor(name) {
        this.name = name;
    }
}

var obj = new Person2('Anna');

//f) function constructor with prototype
function Person3() {
    Person3.prototype.name = 'Anna';
    var object = new Person3();
}

//g) Singleton pattern

var object = new (function () {
    this.name = 'Anna';
})();

//2. What is a prototype chain?

/* Prototype chaining is used to build new types of objects based on
existing ones. It's similar to inheritance in a class based language.
Prototype Object can be called Fallback Objects, because JS automatically
looks into the prototype of the object and searches for the property or
method. */

//3. What is the difference between Call, Apply and Bind?

//Call() method invokes a function with a given 'this' value and arguments provided one by one.

const employee = { firstName: 'John', lastName: 'Rodson' };

function invite(greeting1, greeting2) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

invite.call(employee, "Hi", "How are you?");

//Apply() method invokes the function with a gives 'this' value and allows you to pass in arguments as an array.

invite.apply(employee, ["Hi", "How are you?"]);

//Bind() method returns a new function allowing you to pass any number of arguments

const inviteEmployee = invite.bind(employee);
inviteEmployee('Hello', 'How are you?');

//4. What is JSON and its common operations?

//JSON is text-based data format following JS object syntax. It's useful when you want to transmit data across network and it's basically just a text file with an extension of .json and of MIME (Multipurpose Internet Mail Extension) type of application/json.

const text = '{"name": "Anna", "female": true}';
console.log(JSON.parse(text));
//convert JSON string to object

const textObject = {name: 'Anna', age: 30};
console.log(JSON.stringify(textObject));
//convert object to JSON string

//5. Array slice method - RETURNS NEW ARRAY, WON'T MUTATE THE ORIGINAL

//The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

let sliceIntegers = [1, 2, 3, 4, 5];
console.log(sliceIntegers.slice(0, 2));
console.log(sliceIntegers.slice(2, 3));
console.log(sliceIntegers.slice(4));

//6. Array splice method 

//The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

let spliceIntegers = [1, 2, 3, 4, 5];

let splicedIntegers = spliceIntegers.splice(0, 2);
console.log('splice ' + splicedIntegers); //RETURNS DELETED ARRAY [1,2]
console.log(spliceIntegers); //MODIFIES ORIGINAL ARRAY [3, 4, 5]

let spliceIntegers2 = [1, 2, 3, 4, 5];

let splicedIntegers2 = spliceIntegers2.splice(3, 1, "a", "b", "c");
console.log('splice ' + splicedIntegers2); //RETURNS DELETED ARRAY [4]
console.log(spliceIntegers2); //MODIFIES ORIGINAL ARRAY [1, 2, 3, 'a', 'b', 'c', 5]

//7. Objects vs Maps

//Similarities: 
// - you can set keys to values, retrieve values, delete keys, detect whether something is stored at a key.

//Differences:
// OBJ:the keys of Object are Strings and Symbols
// MAP:key can be any value for Map (functions, objects, any primitive)

// OBJ:keys in Objects are not ordered
// MAP:keys in Map are ordered

// OBJ: number of properties in an Object must be determined manually
const person = {
    name: 'Anna'
}

Object.keys(person).length;
//OR
for (let properties in person) {
    count = count + 1;
}
// MAP: you can get size with map.size()

// OBJ: 
// MAP:Map is an iterable and can be directly iterated

//MAP: Map may perform better in scenerios involving frequent addition and removal of key pairs.

//8. Difference between == and ===?

// === strict operator compare type and value
// == non-strict operator compare only value

0 == false // true
0 === false // false
1 == "1" // true
1 === "1" // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
// []==[], []===[], {}=={}, {}==={} false, refer different object in memory

//10. What are lambda or arrow functions?

//An arrow function is a shorter syntax for a function expression and doesn't have its own this, arguments, super.



 