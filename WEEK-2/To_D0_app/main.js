import {completeTask,getAllTasks,addTask} from './task.js';
//1.adding some tasks
console.log(addTask("Mern Stack", "high", "2026-01-25"));
console.log(addTask("Study JavaScript", "medium", "2026-01-30"));
console.log(addTask("ym", "low", "2026-01-28"));

// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(2));

// 4. Display all tasks again
console.log("Updated Tasks:");
console.log(getAllTasks());