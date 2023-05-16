// Create a human readable time format using the Date time object
//    - YYYY-MM-DD HH:mm
//    - DD-MM-YYYY HH:mm
//    - DD/MM/YYYY HH:mm




const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

let formattedDate = event.toLocaleString().split(',')[0];



const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;