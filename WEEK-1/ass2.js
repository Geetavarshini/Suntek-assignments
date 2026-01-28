function loginStatus(log,pro){
    if (log!=true){
        console.log("Please Login")
    }
    if(log==true && pro!=true){
        console.log("Complete your profile")
    }
    else{
        console.log("Welcome back")
    }
}
let isLoggedIn=true
let isProfileComplete=false
loginStatus(isLoggedIn,isProfileComplete)