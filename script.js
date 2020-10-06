$( document ).ready(function() {
    console.log( "ready!" );
    // display current date and time
    function update() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
      }
      setInterval(update, 1000);
      
      //on clicks to save time and user input
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");
        //set items in local storage.
        localStorage.setItem(time, text);
    }); 
    //load any saved data from LocalStorage - do this for each hour created.
    $("#hour8 .text").val(localStorage.getItem("hour8"));
    $("#hour9 .text").val(localStorage.getItem("hour9"));
    $("#hour10 .text").val(localStorage.getItem("hour10"));
    $("#hour11 .text").val(localStorage.getItem("hour11"));
    $("#hour12 .text").val(localStorage.getItem("hour12"));
    $("#hour13 .text").val(localStorage.getItem("hour13"));
    $("#hour14 .text").val(localStorage.getItem("hour14"));
    $("#hour15 .text").val(localStorage.getItem("hour15"));

    function timetracker() {
        // array of time attributes
        var timeAttr = $.map($('div[time]'), function (div) {
          return $(div).attr('time');
        });
        console.log(timeAttr, 'time attr');

        // parsing the string from the array and looping through them  
        var parsedTimes = timeAttr.map(t => parseInt(t));
        
        console.log(parsedTimes, 'var for comparison');

        //get current number of hours.
        var currenttime = moment().hour();
        console.log(currenttime, 'moment js current time');

        // loop over time blocks
        $('.text').each(function (i) {
          //if conditionals to check time and change styling accordingly
          console.log(parsedTimes[i], "parsedtime", currenttime, "curretn")
          if (parsedTimes[i] < currenttime) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
          } else if (parsedTimes[i] === currenttime) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
          } else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
          }
        });
      }
timetracker();

});




