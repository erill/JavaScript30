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
    retun {
        complete: function(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        }
    };
}