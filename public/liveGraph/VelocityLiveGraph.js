const velocityCtx = document.getElementById('liveGraphVelocity').getContext('2d');

const velocityData = {
    labels: [], // Initial empty labels
    datasets: [{
        label: 'Velocity Live Data',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: [], // Initial empty data
        fill: true
    }]
};

const velocityConfig = {
    type: 'line',
    data: velocityData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time'
                },
                ticks: {
                    callback: function(value) {
                        return new Date(value).toLocaleTimeString(); // Format X-axis labels as time
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Meters per Second'
                }
            }
        },
        animation: {
            duration: 0 // Disable animations for live updates
        }
    }
};

const velocityChart = new Chart(velocityCtx, velocityConfig);

// Function to generate random data for demonstration
function generateRandomVelocityData() {
    return Math.random() * 50;
}

// Function to update the graph with new data
function updateVelocityGraph() {
    const now = Date.now();
    const label = now;
    const value = generateRandomVelocityData();

    if (velocityData.labels.length >= 20) {
        velocityData.labels.shift(); // Remove the first label
        velocityData.datasets[0].data.shift(); // Remove the first data point
    }

    velocityData.labels.push(label);
    velocityData.datasets[0].data.push({ x: label, y: value });

    velocityChart.update();
}

// Update the graph every second
setInterval(updateVelocityGraph, 1000);
