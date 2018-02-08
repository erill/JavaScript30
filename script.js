//Literał obiektowy 
var car = {
    type: "Skoda",
    color: "red"
}

//Funkcja konstruująca
function Vehicle() {
    this.ride = function() {
       console.log("I'm riding!");
    }
}

function Car(name, color) {
    Vehicle.call(this);
    this.name = name;
    this.color = color;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.age = 13;

var car1 = new Car("skoda", "red");
var car2 = new Car("volvo", "black");
// age przysłonięty polem obiektu car2
car2.age = 7;

// car1 i car1 wskazują na ten sam pusty obiek Car w pamięci
// car2 ma nadal dostęp do wieku swojego prototypu
console.log(car2.age);
console.log(car2.__proto__.age);
car2.ride();
console.log(car2);
console.log(car1);

//Object.create()
var car3 = Object.create(Object.prototype, 
    {
        name: {
            value: "BHW",
            enumerable: true,
            writable: true,
            configurable: true
        },
        color: {
            value: 'White',
            enumerable: true,
            writable: true,
            configurable: true
        }
    });


    //ES6 klasy
    class Animal {
        constructor(voice) {
            this.voice = voice || "none";
        }

        speak() {
            console.log(this.voice);
        }
    }

    class Cat extends Animal {
        constructor(name, color) {
            super('Meow');
            this.name = name;
            this.color = color;
        }
    }

    var cat = new Cat("Skoda", "black");
    cat.speak();
 


