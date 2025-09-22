document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridWeek',
        // Trying to customize from here
        themeSystem: 'bootstrap5',
        editable: true, 
        selectable: true,
        customButtons: {
            bookNow: {
                text: "Book an appointment",
                click: function(){

                }
            }
        }
        // -> to here
    });
    calendar.render();
})
