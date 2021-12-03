
// here is the main function that will run once the page loads.
$(document).ready(function() {
    // creating a variable that will display the current day to the user to the top of the page
    var currentDateTime = moment().format('MMMM Do YYYY');
    $('#currentDay').text(currentDateTime);
    // starting a function here to run this function once the user clicks the save button
    $('.save-button').on("click", function() {
        // setting variables for time and textbox here. this will determine what the user has click on and determine what will display.
        var time = $(this).parent().attr("id")
        var textBox = $(this).siblings(".description").val();
        // storing these variables in local storage here.
        localStorage.setItem(time, textBox);
        // showing the notification that was created in the html file.
        $('.notification').addClass("show");
        // creating a function to remove the notification after 5 seconds so it does not display permanently.
        setTimeout(function() {
            $('.notification').removeClass("show");

        }, 5000)
    
    })
    // for each hour in the planner, we are getting the id and class from the html file and displaying the value of the local storage
    // for the hour if the user has enter anything.
    $('#hour7 .description').val(localStorage.getItem("hour7"));
    $('#hour8 .description').val(localStorage.getItem("hour8"));
    $('#hour9 .description').val(localStorage.getItem("hour9"));
    $('#hour10 .description').val(localStorage.getItem("hour10"));
    $('#hour11 .description').val(localStorage.getItem("hour11"));
    $('#hour12 .description').val(localStorage.getItem("hour12"));
    $('#hour13 .description').val(localStorage.getItem("hour13"));
    $('#hour14 .description').val(localStorage.getItem("hour14"));
    $('#hour15 .description').val(localStorage.getItem("hour15"));
    $('#hour16 .description').val(localStorage.getItem("hour16"));
    $('#hour17 .description').val(localStorage.getItem("hour17"));
    
    // starting a function here to help display colors to the planner
    function timeUpdate() {
        // getting the current hour and setting it as a variable
        var currentHour = moment().hours();
        // starting a function here that will run through each time-block class.
        $('.time-block').each(function() {
            var checkTime = $(this).attr("id")
            var blockTime = checkTime.match(/\d+/)
            // running if statements to determine if the current hour is in the past, present, or future.
            // depending on which hour we are in, the color of that row will change.
            if (parseInt(blockTime[0]) < currentHour) {
                $(this).addClass("past");

            }
            else if (parseInt(blockTime[0]) === currentHour) {
                $(this).removeClass("past");

                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }



        })

    }
    //calling the time update function
    timeUpdate();


});



