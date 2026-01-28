/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */
//given data
    let temp = [32, 35, 28, 40, 38, 30, 42];
//1. filtering temperatures above 35 and storing it into temperatureAbove35
    let temperatureAbove35 = temp.filter((element)=> element>35);
    console.log("Temperatures above 35 are:",temperatureAbove35);
//2.using map() method converting all temperatures from Celsius → Fahrenheit and stroring it into fahrenheitarray
    let Fahrenheit = temp.map((element)=> (element * 9/5) + 32);
    console.log("temperature in terms of Fahrenheit:",Fahrenheit);
//3.reduce() method to calculate average temperature 
    let averageTemperature = temp.reduce((acc, ele)=> acc + ele, 0) / temp.length;
    console.log("Average Temperature is:",averageTemperature);
//4.find() first temperature above 40     
    let result = temp.find((ele)=> ele>40);
    console.log("first temperature below 40 is:",result);
//5. findIndex() of temperature 28  
    let indexOfTemperature = temp.findIndex((ele)=> ele==28);
    console.log("index of temperature 28 is:",indexOfTemperature);


// ==============================================================================================================


/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/

//given data
    const courses = ["javascript", "react", "node", "mongodb", "express"];
//1.courses with name length > 5
    let names = courses.filter((element)=>element.length>5);  
    console.log("course names with length greater than 5:",names);
//2.convert course names to uppercase
    let upperCaseCourses = courses.map((element)=>element.toUpperCase());
    console.log("courses converted to uppercase:",upperCaseCourses);
//3.reduce() to generate a single string
    let singleString = courses.reduce((acc, ele)=> acc + " | " + ele);
    console.log("single string:",singleString);
// 4. find() the course "react"
    let react = courses.find((ele)=> ele=="react");
    console.log("the course react is found:",react);
//5.findIndex() of "node"
    let index = courses.findIndex((ele)=> ele=="node");
    console.log("Index of course named Node:",index);


// ======================================================================================================


 
/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/
//given data
    const marks = [78, 92, 35, 88, 40, 67];
//1.marks using filter methodks above 40
    let passMarks = marks.filter((element)=> element>=40);   
    console.log("pass marks :",passMarks);
//2.map() to add 5 grace marks to each student
    let UpdatedMarks = marks.map((element)=> element + 5);
    console.log("5 marks added to each student:",UpdatedMarks);
//3. reduce() to find highest mark
    let highestMarks = marks.reduce((max, ele)=> (ele > max ? ele : max), marks[0]);
    console.log("highest marks:",highestMarks);
//4.find() first mark below 40
    let markBelow40 = marks.find((ele)=> ele<40);
    console.log("marks below 40:",markBelow40);
//5. findIndex() of mark 92
    let findIndex = marks.findIndex((ele)=> ele==92);
    console.log("Index of marks 92 is:",findIndex);