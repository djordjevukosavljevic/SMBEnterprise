document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const form = e.target;
        const data = {
            name: form.name.value,
            lastname: form.lastname.value,
            email: form.email.value,
            mobileNumber: form.contactNumber.value,
            subject: form.subject.value,
            message: form.message.value
        };

        try {
            const response = await fetch("/api/message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const text = await response.text();
            document.getElementById("status").innerText = text;
            form.reset();
        } catch (err) {
            document.getElementById("status").innerText = "Failed to send... " + err.message;
        }
    });
});
