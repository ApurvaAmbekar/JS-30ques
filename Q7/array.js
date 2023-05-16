// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

//The lastIndexOf() method returns the last index (position) of a specified value.The lastIndexOf() method returns -1 if the value is not found.
//The lastIndexOf() starts at a specified index and searches from right to left.By defalt the search starts at the last element and ends at the first.
//Negative start values counts from the last element (but still searches from right to left).



const EdTech = ["ineuron", "pw skills", "byju's", "pw skills"];
let last_occurence = EdTech.lastIndexOf("pw skills");
console.log("Last occurence of pw skills at index number : ",last_occurence);


//If you pass the fromIndex argument to the string, the lastIndexOf() method will start searching backward from the fromIndex

let first_occurence = EdTech.lastIndexOf("pw skills",2);
console.log("First occurence of pw skills at index number : ",first_occurence);

