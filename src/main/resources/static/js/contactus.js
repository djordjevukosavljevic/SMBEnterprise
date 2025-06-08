// (async () => await fetch('/api/contact', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },

//     body: JSON.stringify({
//         name: "John",
//         lastname: "John",
//         email: "John",
//         contactNumber: "John",
//         subject: "John",
//         message: "John"
//     })
// })();

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const form = e.target;
    const data = {
        name: form.name.value,
        lastname: form.lastname.value,
        email: form.email.value,
        contactNumber: form.contactNumber.value, 
        subject: form.subject.value,
        message: form.message.value
    };

    try{
        const response = await fetch("/api/message", {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        });

        const text = await response.text();
        document.getElementById("status").innerText = text;
        
    } catch(err){
        document.getElementById("status").innerText = "Failed to send..." + err.message;
    }
});