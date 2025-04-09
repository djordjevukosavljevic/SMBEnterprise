document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8082/api/person')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('personTableBody');
            tableBody.innerHTML = ''; // Clear existing content
            
            data.forEach(person => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${person.name}</td>
                    <td>${person.surname || person.surrname}</td>
                    <td>${person.email}</td>
                    <td>${person.number || person.phone}</td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-sm btn-primary">
                                <i class="fa-solid fa-pen-to-square"></i> Izmeni
                            </button>
                            <button class="btn btn-sm btn-danger">
                                <i class="fa-solid fa-trash-can"></i> Obriši
                            </button>
                        </div>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('personTableBody').innerHTML = `
                <tr>
                    <td colspan="6" class="text-danger text-center">
                        Error loading data: ${error.message}
                    </td>
                </tr>
            `;
        });
});