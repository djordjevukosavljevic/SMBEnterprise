document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8082/api/image')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('imageTableBody');
            tableBody.innerHTML = ''; // Clear existing content

            data.forEach(image => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <th scope="row">${image.id}</th>
                    <td>${image.name}</td>
                    <td>${image.size}</td>
                    <td>${image.extns}</td>
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
            console.error("Error:", error);
            document.getElementById('imageTableBody').innerHTML = `
                <tr>
                    <td colspan="6" class="text-danger text-center">
                        Error loading data: ${error.message}
                    </td>
                </tr>
            `;
        });
});