// Use the Date object to do the following activities
//    - What is the year today?
//    - What is the month today as a number?
//    - What is the date today?
//    - What is the day today as a number?
//    - What is the hours now?
//    - What is the minutes now?
//    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());



// Calculating the time elapsed from 
// 1970-01-01 to up to now
  
// set the time
let past = new Date('1970-01-01');
  
// assigning present time to now variable
let present = new Date();
  
let elapsed = (present - past);
console.log(elapsed);  
// by dividing by 1000 we will get 
// the time in seconds
console.log(elapsed / 1000);

console.log(present);






