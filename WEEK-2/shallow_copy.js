// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t
const User = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
//creating a shallow copy of object user
let copyUser={...User}
// changing name in copied object 
copyUser.name="nithin";
//changing preference theme in copied object
copyUser.preferences.theme="light";
//priting both the objects
console.log("user",User);
console.log("copyUser",copyUser);
// here the changes made to theme in preferences had been changed in both the objects because the refernces of prefernces are pointing to same memory location so change in one affects others;