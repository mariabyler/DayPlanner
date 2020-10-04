$(document).ready(function () {// essentially tells engine to load 1)html & 2)css first.
    //display current day & time.
    function update() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
      }
    
     var calender = $.map($("div[time]"), function(div) {
        return $(div).attr("time");
    });
    
    console.log(calender, "time"); 
    
    // calender.forEach(function(){{
    //     if (calender.moment === "ago" ) {
    //     calender.style.color = ".past";
    //     } 
    //     else if (calender.moment === "from now") {
    //         calender.style.color = ".future";
    //         }
    //         else {
    //             calender.style.color = ".present";
    //         }
    // };
    });
    setInterval(update, 1000);
    
    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");
        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#hour8 .text").val(localStorage.getItem("hour8"));
    $("#hour9 .text").val(localStorage.getItem("hour9"));
    $("#hour10 .text").val(localStorage.getItem("hour10"));
    $("#hour11 .text").val(localStorage.getItem("hour11"));
    $("#hour12 .text").val(localStorage.getItem("hour12"));
    $("#hour13 .text").val(localStorage.getItem("hour13"));
    $("#hour14 .text").val(localStorage.getItem("hour14"));
    $("#hour15 .text").val(localStorage.getItem("hour15"));

}); 
