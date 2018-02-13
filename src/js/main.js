import Task from './task';

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};
var loggingService = function () {
    var message = 'Logging '
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}
var auditingService = function () {
    var message = 'Auditing '
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

// Mediator - immediately executing function
var mediator = (function(){
    // you can publish or notify to specified chanel
    var channels = {};

    var subscribe = function(chanel, context, func) {
        if (!mediator.channels[chanel]) {
            mediator.channels[chanel] = [];
        }

        mediator.channels[chanel].push({
            context: context,
            func: func
        });
    }

    var publish = function(chanel) {
        if (!mediator.channels[chanel]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for (var i =0; i < mediator.chanels[chanel].length; i++) {            
            var sub = mediator.chanels[chanel][i];
            sub.func.apply(sub.context, args);
        }
    }
    return {
        chanels: {},
        subscribe: subscribe,
        publish: publish
    }
}());



var task1 = new ObservableTask({
    name: 'create a demo for constructors',
    user: 'Jon'
});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);



task1.complete = function() {
    mediator.publish('complete', this);
    task1.prototype.complete.call(this);
}

task1.complete();
task1.save();