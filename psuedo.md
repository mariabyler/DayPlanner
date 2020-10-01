1. local storage to store time and task AFTER the save button is clicked 
2. on clicks for all the save buttons 
3. timeblocks are text blocks
4. each row has three columns: time, text area, save button 
5. ech text area has its own id 
retrieve value .value , value is what the user is typing into the text area
declare var = $("#timeslot").val(). trim(); 
localStorage.setItem(evenTime, event); 
array with times
using moments to compare current time to stored time in array
var time = 
items in time array match timeslots in html (div) 
time and attribute 
text area is a specific area in html set how many rows you want with rows attribute 
6. get item from local every time page loads
function getLocalStorage(time,element) { 
    var a = localStorage.getItem(time); 
    element.innerHTML = a; 
}


