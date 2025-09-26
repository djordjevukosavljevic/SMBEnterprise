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
            // Added in order to check if there are numbers in a place where it needs to be letters.
            const hasNumbers = (str) => /\d/.test(str);
            if (hasNumbers(form.name.value) || hasNumbers(form.lastname.value)) {
                window.alert("Name, lastname must not contain numbers.");
                window.location.reload();
                throw new Error('We are not going to send this.');
            }

            const response = await fetch("/api/message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const text = await response.text();
            document.getElementById("status").innerText = text;
            window.alert("Thank you for contacting us!")
            form.reset();
            window.location.reload();
        } catch (err) {
            document.getElementById("status").innerText = "Failed to send... " + err.message;
            window.alert("Failed to send message.");
            window.location.reload();
        }
    });
});
