 // function to validate title;
 export function validateTitle(title) {
    //checking the empty title
    if(title.length==0){
        return "Title is Empty";
    }
    //check if title does not contain 3 characters
    if(title.length<3){
        return "Title must contain 3 characters";
    }
    return true;
 }
 //function to validate priority
 export function validatePriority(priority) {
    const priorities=["low","medium","high"];
    //priority must have priorities values 
    if(priorities.includes(priority)){
        return true;
    }else{
        return "Priority must have low or medium or High";
    }
}
//fucntion to validate dueDate
export function validateDueDate(date){
    let presentDate=new Date();
    let duedate=new Date(date);
    //dueDate should be future
    if(presentDate > duedate){
        return " the date must be future date";
    }else{
        return true;
    }
}