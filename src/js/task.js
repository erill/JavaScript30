// Behavioral Pattern - concerned with the assignment of responsibilities
// between objects and how the communicate

// Mediator Pattern - controls communication between objects so neither
// object has to be coupled to the others
// - allows for loosely coupled system
// - 1 object manages all comunication
// - many to many relationship


var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

export default Task;