document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("contactus").addEventListener("submit", async function (e) {
        e.preventDefault();
        
        const form = e.target;
        const data = {
            fullname: form.fullname.value,
            email: form.email.value,
            mobileNumber: form.mobileNumber.value,
            subject: form.subject.value,
            message: form.message.value
        };

        try {
            const response = await fetch("/api/message",{
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(data)
            });

            const text = await response.text();
            document.getElementById("status").innerText = text;
            form.reset();
        } catch(err){
            throw new Error(err.message);
        }
    });
});