/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
      DD-MM-YYYY HH:mm:ss
      */
     //creating a date object using Date() 
     let currentDate=new Date();
     console.log("Current date and time in ISO:",currentDate);
     console.log("current date and time in ISD:",currentDate.toString());
     //extracting year
     console.log("Current Year:",currentDate.getFullYear());
     //extracting month
     console.log("Current Month:",currentDate.getMonth()+1);
     //extracting date
     console.log("Current Date:",currentDate.getDate());
     //extracting day of the week
     console.log("current day:",currentDate.getDay());
     //extracting hours,minutes,seconds;
     console.log("current time:",currentDate.getHours()," hours ",currentDate.getMinutes()," minutes ",currentDate.getSeconds()," seconds");
    //  3. Display the date in this format:DD-MM-YYYY HH:mm:ss
    console.log(currentDate.getDate(),"-",currentDate.getMonth(),"-",currentDate.getFullYear());




//     Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

let enrollmentDeadline = new Date("2026-01-20");
let today=new Date();
//checking where today is before deadline or after deadline
if(today.getDate()>enrollmentDeadline.getDate()){
    console.log("Enrollment closed");
}else{
    console.log('Enrollment open');
}
//validating user input date whether date is valid or invalid
let date=new Date('2026-01-30');
if (!isNaN(date.getTime())) {
  console.log(`The given date ${date.toDateString()} is valid`);
} else {
  console.log("The given date is invalid. Please enter a valid date");
}



// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years
let inputDate=new Date('2000-05-15');
//calculate age exactly in years
//get current year
let Today=new Date();
let currentYear=Today.getFullYear();
let bornyear=inputDate.getFullYear();
//subtract current year with born year to get age;
let age=currentYear-bornyear;
if(Today.getMonth() < inputDate.getMonth()){
    age--;
}
console.log("Age is:",age);