import {validateTitle,validatePriority,validateDueDate} from './validator.js';
//creating a empty task array
let tasks=[];
//declaring taskId vairable for assigning id to each task 
let taskId=1;
//function to addTask to the task array by validating against some methods
export function addTask(title,priority,dueDate){
    //validating title
    let titleCheck=validateTitle(title);
    if(titleCheck !== true){
        return titleCheck;
    }
    //validating priority
    let priorityCheck=validatePriority(priority);
    if(priorityCheck!==true){
        return priorityCheck;
    }
    //validating duedateCheck
    let dueDateCheck=validateDueDate(dueDate);
    if(dueDateCheck !==true){
        return dueDateCheck;
    }
    //if all are valid then we are creating a task object
    let task={
        id:taskId++,
        title,
        priority,
        dueDate,
        completed:false
    };
    //adding task object to tasks array
    tasks.push(task);
    return "Task added Successfully";

}
//function to know all the tasks
export function getAllTasks(){
    return tasks;
}
// function to mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return "Task not found";
  }
  task.completed = true;
  return "Task marked as completed";
}