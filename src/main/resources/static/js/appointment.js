document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:8082/api/appointment')
        .then(response => {
            if(!response.ok)
                {
                    throw new Error('Network response was not ok!');
                }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('appointmentTableBody');
            tableBody.innerHTML = '';

            data.forEach(appointment => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${appointment.createdAt}</td>
                    <td>${appointment.updatedAt}</td>
                    <td>${appointment.message}</td>
                    <td>${appointment.isActive}</td>
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
            })
        })
        .catch(error => {
            console.log('Error:', error);
            document.getElementById('appointmentTableBody').innerHTML = `
                <tr>
                    <td colspan="6" class="text-danger text-center">
                        Error loading data: ${error.message}
                    </td>
                </tr>
            `;
        })
});