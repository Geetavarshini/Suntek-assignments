/* HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in but profile incomplete → show "Complete your profile"
   4. Store the result in message
   5. If logged in but profile incomplete → show "Complete your profile" */
//Intial data:
    let isLoggedIn = true;
    let isProfileComplete = false;
    let message = " ";
    // If user is not logged in → show "Please login"
    if(!isLoggedIn){
        message = "Please login";
    }
    // If logged in but profile incomplete → show "Complete your profile"///
    else if(isLoggedIn && !isProfileComplete){
        message = "Complete your profile";
    }
    // If logged in but profile incomplete → show "Complete your profile"
    else{
        message = "Welcome back!";
    }
    //print the message
    console.log("Alrert message:",message);



// ===============================================================================================================





/*HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;

Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label */
//Intial data
   let price = 1299;
   let courseTag = "";
//    If price < 500 → "Budget Course"
    if(price < 500){
        courseTag = "Budget Course";
    }
    // If price between 500–1000 → "Standard Course"
    else if(price >= 500 && price <= 1000){
        courseTag = "Standard Course";
    }
    // If price > 1000 → "Premium Course"
    else{
        courseTag = "Premium Course";
    }   
    //print the course tag
    console.log("courseTag according to price is:",courseTag);



// =======================================================================================================






/*HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message */
    //Intail data:
    let hasPaid = true;
    let hasCompletedBasics = false;
    // using ternary operator check if both conditions hasPaid and hasCompletedBasics are true then store Enroll now otherwise Complete requirments
    let enrollMessage = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements";
    //print the EnrollMessage
    console.log("Enrollement done ?:",enrollMessage);