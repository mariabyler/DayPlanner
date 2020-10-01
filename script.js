$(document).ready(function() {});

function getLocalStorage(time, task) { 
    var a = localStorage.getItem(time); 
    task.innerHTML = a; 
}

$("#save1").on("click", function() {
// retrieve value from text area and put in variable
var task = $("text1").val(); 
// create another variable and make it equal to attribute with time
var time = $("#time1").attr("time"); 
// put both variables in local storage
localStorage.setItem(time, task); 
console.log(task); 
}
); 


console.log(localStorage); 

