export function createPressureChart() {
    const ctx = document.getElementById('pressureChart').getContext('2d');
    const pressureData = [1013, 1012, 1011, 1010, 1009, 1008]; // Sample pressure data
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // Labels for the x-axis

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Pressure (hPa)',
                data: pressureData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
                x: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Pressure Data'
                }
            }
        }
    });
}
