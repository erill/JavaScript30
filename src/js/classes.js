// let task = new Task(); // error - use before declaration

class Task {
    constructor() {

    }
    showId() {
        console.log();
    }
}

let task = new Task();

console.log(typeof Task); // function
console.log(typeof task); // object
console.log(task instanceof Task); // true
console.log(task.showId === Task.prototype.showId); // true

function Car() { };
console.log(window.Car === Car); // true
console.log(window.Task === Task); // false



class Project {
    constructor(name) {
        console.log('constructing Project: ' + name);
        console.log(new.target); // is pointing to the constructor directly
    }
    getCount() {
        return 50;
    }
    static getDefaultId() {
        return 0;
    }
}

class SoftwareProject extends Project {
    constructor(name) {
        super(name); // super must be called even if the  class above doesnt have own constructor
        console.log('constructing software project');
        this.name = name;
    }
    getCount() {
        return super.getCount() + 7; 
    }
}

let p = new SoftwareProject('Mocarella');
console.log(p.getCount()); // 57
console.log('name: ', p.name); // Mocarella

// Static
console.log('default id: ', Project.getDefaultId()); // static method get attached directly to class
let project = new Project('name');
// console.log(p.getDefaultId()); // error f.getDefaultId is not a function

Project.id = 99; // creating static property by attaching it to the class
console.log(Project.id); // 99