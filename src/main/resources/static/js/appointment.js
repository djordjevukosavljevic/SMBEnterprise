document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:8082/api/appointment")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error was not resolved');
            }
            return response.json();

        })
        .then(data => {
            const tableBody = document.getElementById("appointmentTableBody");
            tableBody.innerHTML = '';   // Clear existing

            data.forEach(appointment => {
                console.log(appointment);
                const row = document.createElement('tr');

                row.innerHTML =
                `
                <th scope="row">${appointment.id}<th>
                <td>${appointment.createdAt}<td>
                <td>${appointment.updatedAt}<td>
                <td>${appointment.title}<td>
                <td>${appointment.name}<td>
                <td>${appointment.lastname}<td>
                <td>${appointment.email}<td>
                <td>${appointment.mobilePhone}<td>
                <td>${appointment.message}<td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-sm btn-primary">
                            <i class="fa-solid fa-pen-to-square"></i> Change
                        </button>
                        <button class="btn btn-sm btn-danger">
                            <i class="fa-solid fa-trash-can"></i> Delete
                        </button>
                    </div>
                </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error:", error.message);
            document.getElementById('appointmentTableBody').innerHTML = `
                <tr>
                    <td colspan="6" class="text-danger text-cented">
                        Error loading data: ${error.message}
                    </td>
                </tr>
            `;
        });
});