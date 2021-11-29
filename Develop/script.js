$(document).ready(function() {
    var currentDateTime = moment().format('MMMM Do YYYY');
    $('#currentDay').text(currentDateTime);

    $('.save-button').on("click", function() {
        var time = $(this).parent().attr("id")
        var textBox = $(this).siblings(".description").val();
        localStorage.setItem(time, textBox);
        $('.notification').addClass("show");
        setTimeout(function() {
            $('.notification').removeClass("show");

        }, 10000)
    
    })

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

    function timeUpdate() {
        var currentHour = moment().hours();
        $('.time-block').each(function() {
            var checkTime = $(this).attr("id")
            var blockTime = checkTime.match(/\d+/)
            console.log(blockTime[0]);
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
    
    timeUpdate();


});



