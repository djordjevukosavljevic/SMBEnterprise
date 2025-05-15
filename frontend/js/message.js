document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8082/api/message')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById("msgTableBody");
            tableBody.innerHTML = ''; // Clear if something exists

            data.forEach(message => {
                console.log(message)
                const row = document.createElement('tr');
                row.innerHtml = `
                    <td>${message.email}<td>
                    <td>${message.text}<td>
                    <td>${message.createdAt}<td>
                    <td>${message.isActive}<td>
                    <td>
                        <div class="btn-grup">
                            <button class="btn btn-sm btn-primary">
                                <i class="fa-solid fa-pen-to-square"></i> Change
                            </button>
                            <button class="btn btn-sm btn-danger">
                                <i class="fa-solid fa-pen-to-square"></i> Delete
                            </button>
                        </div>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error', error);
            document.getElementById('msgTableBody').innerHTML =
                `
                <tr>
                    <td colspan="6" class="text-danger text-center">
                        Error loading data: ${error.message}
                    </td>
                </tr>
            `
        })
})