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

const textObject = { name: 'Anna', age: 30 };
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
let count;
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

//10. Lambda or arrow functions.

//An arrow function is a shorter syntax for a function expression and doesn't have its own this, arguments, super.

//11. First class function.

//When functions in language are treated like any other variable. A function can be passed as argument to other functions and can be returned.

//12. First order function.

//Function that doesn't accept another function as an argument and doesn't return a function as its return value.

//13. Higher order function.

//Function that accepts another function as an argument or returns a function as a return value or both.

//14. Unary function.

//Function that accepts exactly one argument.

//15. Currying function.

//Currying (rozwijanie funkcji) is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. It improves code reusability.

function calculateVolume(length) {
    return function (width) {
        return function (height) {
            return length * width * height;
        }
    }
}
console.log(calculateVolume(2)(3)(4));

//16. Pure function.

//Given the same input, always return the same output.
//Produces no side effects (mutating input, console.log, HTTP calls, changing file system, querying DOM).

//17. let keyword.

//Block scope local variable.
//Introduced as part of ES6.
//Hoisted but not initialized.

//18. var keyword.

//Function scope
//Available from the beginning
//Variables will be hoisted


function userDetails(username) {
    if (username) {
        console.log(salary); // undefined due to scoping
        //console.log(age); //Cannot access age before initialization
        var salary = 10000;
        let age = 30;
    }
    console.log(salary); //accessible due to function scope
    // console.log(age); //age is not defined
}

userDetails("John");

//19. Switch 

const exp = 'Mangoes';
switch (exp) {
    case 'Oranges':
        console.log('Oranges');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas');
        break;
    default:
        console.log('No output');
}

//20. Temporal Dead Zone

//Unlike var, which can be accessed before it is declared, variables declared with let and constants declared using const cannot be accessed before their declaration.
//Similar to var, variables declared with let and constants declared using const are also hoisted; it is just that how they are hoisted is different from how var variables are hoisted.
//Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.

let age = 50;

function printAge() {
    console.log(age);
    let age = 30;
}
// printAge(); //Cannot access 'age' before initialization

//21. What is IIFE (Immediately Invoked Function Expression)?

//Function that runs as soon as it is defined. The signature of it would be as below.

(function () {
    var message = 'IIFE';
})();
// console.log(message);

//Variables declared within the IIFE cannot be accessed by the outside world.

//22. How do you decode or encode a URL in JavaScript?

let uri = "employeeDetails?name=Bożydar&occupation=Górnik";
let encodedUri = encodeURI(uri);
console.log(encodedUri);
let decodedUri = decodeURI(encodedUri);
console.log(decodedUri);

//23. What is memoization?

//Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.

const memoization = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log("Fetching from cache");
            return cache[value];
        } else {
            console.log("Calculating result");
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    };
};
const addition = memoization();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached

//24. What is hoisting?

// message("Good morning"); //Good morning
console.log(fun)

var fun = function message(name) {
    console.log(name);
}

console.log(messageVar); //output : undefined
var messageVar = "The variable Has been hoisted";

//25. Classes in ES6.

//Classes are primarily syntactic sugar over JS existing prototype-based inheritance.

//constructor function
function Bike(model, color) {
    this.model = model;
    this.color = color;
};

Bike.prototype.getDetails = function () {
    return this.model + this.color;
}

//ES6 class
class Bike2 {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }

    getDetails() {
        return this.model + this.color;
    }
}

//26. What are closures?

//Closure is the combination of a function and the lexical environment within which that function was declared. The closure has 3 scope chains: own scope where variables defined between its curly brackets, outer function's variables, global variables.

//27. What are modules?

//Modules refer to small units of indepentent, reusable code and also act as the foundation of many JS design patterns. 
//Maintainability
//Reusability
//Namespacing

//28. What is a service worker?

//Service worker is basically a script that runs in the background separate from a web page and provides features that don't need a web page or user interaction. Service worker determine offline behavior.

//29. How do you manipulate DOM using a service worker?

//Service worker can't access DOM directly. But it can communicate with the pages it controls by responding to messages sent via the postMessage interface.

//30. What is IndexedDB? 

//It's a low-level API for client side storage of larger amount of structured data, including files/blobs. This app uses indexes to enable high-performance searches of this data.

//31. Web storage.

//It's an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion that using cookies. 
//Local storage - stores data of current origin with no exp date
//max 5MB
//Session storage - stores data for one sesion and the data is lost when the browser tab is closed.
//max 5MB

//setItem(), getItem(), removeItem(), clear()

//32. What is a Cookie?

//Cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs. Cookies are used to remember information about the user profile.
//max 4KB

//By default cookie is deleted when the browser is closed, but you can change this behavior by setting expire date.
document.cookie = "username=John; expires=Fri, 8 Jul 2022 12:00:00 UTC";

//By default the cookie belongs to current page, but you can tell the browser what path the cookie belongs.
document.cookie = "username=John; path/services";

//33. Why do you need web storage?

//Web storage is more secure and large amount of data can be stored locally, without affecting website performance.

//34. What is a promise?

//Promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it's not resolved.

//Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks.

//Three states of promise:
//Pending: initial state of Promise before an operation begins
//Fulfilled: This state indicates that the specified operation was completed.
//Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.

const promise = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve("I'm a Promise!");
        }, 5000);
    },
    (reject) => { }
);

promise.then((value) => console.log(value));

//Promise chaining

//The procces of executing a sequence of asynchronous tasks one after another.

//35. What is a callback function?

//Function passed into another function as an argument. This function is invoked inside the outer function to complete an action. 

//Why do we use callback in JavaScript? Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.

function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
}

function callMe() {
    console.log("I am a callback function");
}

//passing fn as an argument
greet('Peter', callMe);

//The callbacks are needed because JS is an event driven language. That means instead of waiting for a response JS will keep executing while listening for other events.

//36. Server-side events

//It's a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only.

//It has 3 events:
//onopen - when connection is opened
//onmessage - when message is received
//onerror - when error occurs

//37. Promise.all

//It takes an array of promises as an input and it gets resolved when all the promises get resolved or any one of them gets rejected.

Promise.all([Promise1, Promise2, Promise3]).then((result) => { console.log(result) }).catch(error => console.log(error));

//38. Promise.race()

//It will return the promise instance which is firstly resolved or rejected.

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "one");
  });
  var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "two");
  });
  
  Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
  });

  //39. Strict mode

  //Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.

//40. What is the purpose of double exclamation

//It ensures the resulting type is a boolean. 

//41. What is the purpose of the delete operator?

//It's used to delete the property as well as its value.
var user = {name: "John", age: 20};
delete user.age;

//42. Differences between null and undefined?

//null: Object  undefined: undefined
//null: converted to 0  undefined: converted to NaN

//43. Eval

//It evaluates JS code represented as a string. 
console.log(eval("1 + 2"));

//44. What is the difference between window and document?

//Window: 
//Root level element in any web page
//By default available implicitly in the page
//Methods: alert(), confirm() properties: document, location

//Document:
//Direct child of the window - window.document
//Methods: getElementById, getElementsByTagName, createElement

//45. How you access history in js?

//The window history object contains the browser's history.
//window.history.back(), window.history.forward()


//46. Detect caps lock is turned on or not.

//Use the mouseEvent - getModifierState("CapsLock");












































