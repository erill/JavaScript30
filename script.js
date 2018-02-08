// Structural Design Patterns - conderned with how objects are made up and
// simplify relationship between objects

// Decorator Pattern - used to add new functionality to and existing object,
// without changing that object

var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving task: ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();



/* Design Pattern - simple decorator */

var UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function() {
    console.log("notifying important people");
};

urgentTask.complete();
// Decorating save task with some additional features and functionality
// that don't break the existinh Task object
urgentTask.save = function() {
    this.notify();
    Task.prototype.save.call(this);
}

urgentTask.save();


/* Design Patter - more complex decorator */

var UrgentTask2 = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}

// Passing new Task object to UrgentTask2 prototype 
// instead of by reference (UrgentTask2.prototype = Task.prototype)
// becuase it may break existing Task
UrgentTask2.prototype = Object.create(Task.prototype);

var ut = new UrgentTask2("Urgent Task2", 1);

UrgentTask2.prototype.notify = function() {
    console.log("notifying important people");
};

UrgentTask2.prototype.save = function() {
    console.log('I do some special stuff before saving');
    Task.prototype.save.call(this);
}

ut.complete();
ut.save();
console.log(ut);