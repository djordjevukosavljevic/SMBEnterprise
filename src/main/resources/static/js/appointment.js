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
    document.getElementById("bookform").addEventListener("submit",   async function e() {
        e.preventDefault();
        
        const form = e.target;
        const data = 
        {   
            name: form.name.value,
            lastname: form.lastname.value,
            email: form.email.value,
            mobileNumber: form.mobileNumber.value,
            subject: form.subject.value,
            message: form.message.value,
            dateCreated: form.dateCreated.value,
            isactive: form.isactive.value,
            istaken: form.istaken.value
        };
        try {
            const response = await fetch("/api/appointment", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            
            const text = await response.text();
            document.getElementById("status").innerText = text;
            window.alert("Thank you for arranging an appointment, we will contact you soon");
            form.reset();
            window.location.reload();
        }
        catch(err){
            document.getElementById("status").innerText = "Failed to book an appointment." + err.message;
        }
    });
});