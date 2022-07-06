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