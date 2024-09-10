//declaring variable
let name,age,isStudent;
//function that will execute when the submit button is clicked
//add a click event listener to submit button
document.getElementById("submit_button").onclick = function(){
    //retrieve the value entered in the name and age input field and store in the respective variable
    name = document.getElementById("name").value;
    age=document.getElementById("age").value;
    // Set the 'isStudent' variable to true (assuming the user is a student)
    // This can be changed later if more logic is needed to determine student status
    isStudent = true;

    // Log the values of 'name', 'age', and 'isStudent' to the browser console
    console.log("Name: " + name);  // Output the name
    console.log("Age: " + age);    // Output the age
    console.log("Is student: " + isStudent);  // Output the student status (true/false)
}