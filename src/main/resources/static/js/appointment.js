document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
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


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookbtn").addEventListener("submit",   async function e() {
        e.preventDefault();
        
        const form = e.target;
        

        try{

        }
        catch(err){
            document.getElementById("status").innerText = "Failed to book an appointment." + err.message;
            window.location.reload();
        }
    });
});