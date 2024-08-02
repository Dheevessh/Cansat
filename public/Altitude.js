export function createAltitudeChart() {
    const ctx = document.getElementById('altitudeChart').getContext('2d');
    const altitudeData = [100, 200, 300, 400, 500, 600]; // Sample altitude data
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // Labels for the x-axis

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Altitude (m)',
                data: altitudeData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
                    text: 'Monthly Altitude Data'
                }
            }
        }
    });
}
