// Facade Pattern - used to provide a simplified interface to a 
// complicated system. In oposite to decorator pattern - we're not adding
// new deatures, we're creatuing new interface for cover that what is done 

var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskServices = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function(task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function(task, user) {
            console.log('notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function(task) {
            console.log('saving task: ' + task.name);
        }
    }
}();

var myTask = new Task({
    name: 'My Task',
    priority: 1, 
    project: 'Courses',
    user: 'Jon',
    completed: false
});

var TaskServiceWrapper = function() {

    var completeAndNotify = function (task) {
        if (myTask.completed == false) {
            TaskServices.setCompleteDate(myTask);
            TaskServices.notifyCompletion(myTask, myTask.user);
            TaskServices.save(myTask);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}();

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);

/*  TaskServiceWrapper instead of calling each function like below

TaskService.complete(myTask);
if (myTask.completed == true) {
    TaskServices.setCompleteDate(myTask);
    TaskServices.notifyCompletion(myTask, myTask.user);
    TaskServices.save(myTask);
}
console.log(myTask);
*/