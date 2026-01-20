
// Test data
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};


console.log("Name:", user.name);
console.log("Email:", user.email);
// 2. Add new property 
user.lastLogin = "2026-01-01";
// 3. Update role 
user.role = "admin";

// 4. Delete 
delete user.isActive;

// 5. List all remaining fields
const keys = Object.keys(user);
console.log("Remaining fields:", keys);

// Final user object
console.log("Updated user:", user);




//Ass2
// Test data
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
// 1. Calculate total marks
let total = 0;
for (let subject in marks) {
  total += marks[subject];
}
console.log("Total Marks:", total);

// 2. Calculate average marks
const average = total / Object.keys(marks).length;
console.log("Average Marks:", average);

// 3. Find highest scoring subject
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}

console.log("Highest Scoring Subject:", highestSubject, "-", highestMarks);

// 4. Add new subject 
marks.computer = 90;
console.log("Updated Marks:", marks);




//Ass3 
// Test data
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

settings.theme = settings.theme === "light" ? "dark" : "light";

// 2. Turn autoSave to true
settings.autoSave = true;

// 3. Remove notifications setting
delete settings.notifications;

// 4. Freeze settings object
Object.freeze(settings);

// Try modifying after freeze (will not work)
settings.language = "fr";

console.log("Final Settings:", settings);

