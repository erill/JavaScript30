// Flyweight Pattern - out tasks had a lot of non unique data. Flyweigth
// shares data across objects. Results in a smaller memory footprint.
// It's only usefull when large numbers of objects

// All nonunique fields from Task are declared here
function Flyweight(project, priority, user, completed) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
};

var FlyweightFactory = function () {
    var flyweights = {};

    var get = function(project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] =
                new Flyweight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };
    var getCount = function() {
        var count = 0;
        for (var f in flyweights) count++;
        return count;
    };
    return{
        get: get,
        getCount: getCount
    }
}()

// Task object with FlyweightFactory object inside
var Task = function(data) {
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
    this.name = data.name;
    //this.priority = data.priority;
    //this.project = data.project;
    //this.user = data.user;
    //this.completed = data.completed;
}
function TaskCollection() {
    var tasks = {};
    var count = 0;

    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    }
    var get = function(name) {
        return task[name];
    }
    var getCount = function() {
        return count;
    }
    return {
        add: add,
        get: get,
        getCount: getCount
    };
}

var tasks = TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

for (var i = 0; i < 100000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 2)],
    });
}



console.log('tasks: ' + tasks.getCount()); // 100000
console.log("flyweights: " + FlyweightFactory.getCount()); // 160

