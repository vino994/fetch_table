document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready'); // Debugging line
    // You should replace 'data.json' with the actual path to your JSON file.
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log('JSON Data:', data); // Debugging line
            // Store the JSON data in a variable for later use
            const jsonData = data;
            
            // Event listener for the 'Load' button
            document.getElementById('load-button').addEventListener('click', (e) => {
                // Get the selected status from the dropdown
                e.preventDefault();
                const selectedStatus = document.getElementById('status').value;
                console.log('Selected Status:', selectedStatus); // Debugging line
                
                // Update the selected status in the title
                document.getElementById('selectStatus').innerHTML = selectedStatus;
                
                // Filter the data based on the selected status
                const filteredData = jsonData.filter(item => item.status === selectedStatus);
                console.log('Filtered Data:', filteredData); // Debugging line
                
                // Populate the table with filtered data
                populateTable(filteredData);
            });
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
        });
});

// Function to populate the table with data
function populateTable(data) {
    const tableBody = document.querySelector('#result-table tbody');
    tableBody.innerHTML = ''; // Clear previous data

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.capsule_id}</td>
            <td>${item.missions.length}</td>
            <td>${item.details}</td>
        `;
        tableBody.appendChild(row);
    });
}
