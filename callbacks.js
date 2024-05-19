// function greet(userName, callback){
//     console.log(`Hello there ${userName}`);

//     callback();
// };

// function intro(){
//     console.log(`This is me`);
// };

// greet(`Hellen`, intro);


// setTimeout(intro, 2000)

// setInterval(function(){
//     console.log(`This is an interval`);
// }, 3000);


// CLOSURES


class Task {
    constructor(description, urgency) {
        this.description = description;
        this.urgency = urgency;
    }
}

class TaskManager {
    constructor() {
        this.taskQueue = []; 
    }

    addTask(task) {
        this.taskQueue.push(task);
        this.taskQueue.sort((a, b) => a.urgency - b.urgency); 
    }

    // getNextTask() {
    //     if (this.taskQueue.length > 0) {
    //         return this.taskQueue[0];
    //     } else {
    //         return null;
    //     }
    // }

    // completeTask() {
    //     if (this.taskQueue.length > 0) {
    //         return this.taskQueue.shift();
    //     } else {
    //         return null;
    //     }
    // }
}

const taskManager = new TaskManager();

taskManager.addTask(new Task("Finish report", 3));
taskManager.addTask(new Task("Prepare presentation", 5));
taskManager.addTask(new Task("Reply to urgent email", 7));
console.log(taskManager);
// const nextTask = taskManager.getNextTask();
// if (nextTask) {
//     console.log(`Next task: ${nextTask.description}`);
// } else {
//     console.log("No tasks in the queue.");
// }
// const completedTask = taskManager.completeTask();
// if (completedTask) {
//     console.log(`Completed task: ${completedTask.description}`);
// } else {
//     console.log("No tasks to complete.");
// }



