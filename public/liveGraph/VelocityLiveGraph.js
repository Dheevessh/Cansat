const velocityCtx = document.getElementById('liveGraphVelocity').getContext('2d');

const velocityData = {
    labels: [], // Initial empty labels
    datasets: [{
        label: 'Velocity',
        borderColor: 'rgb(203, 137, 70)', // Blue color for the line
        backgroundColor: 'rgba(228, 211, 145, 0.2)', // Light blue for the fill
        data: [], // Initial empty data
        fill: false,
        tension: 0.1 // Smooth the line
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
                        return (value / 1000).toFixed(0); // Format X-axis labels as time in seconds
                    }
                }
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Meters per Second'
                }
            }
        },
        animation: {
            duration: 0 // Disable animations for live updates
        },
        plugins: {
            title: {
                display: true,
                text: 'Velocity'
            }
        }
    }
};

const velocityChart = new Chart(velocityCtx, velocityConfig);

// Function to generate random increasing velocity data for demonstration
function generateRandomVelocityData(prevValue) {
    const fluctuation = Math.random() * 0.2 - 0.1; // Small random fluctuation
    return (prevValue || 0) + fluctuation; // Start around 0 m/s and fluctuate
}

// Function to update the graph with new data
function updateVelocityGraph() {
    const now = Date.now();
    const label = now;
    const prevValue = velocityData.datasets[0].data.length ? velocityData.datasets[0].data[velocityData.datasets[0].data.length - 1].y : 0;
    const value = generateRandomVelocityData(prevValue);

    if (velocityData.labels.length >= 50) {
        velocityData.labels.shift(); // Remove the first label
        velocityData.datasets[0].data.shift(); // Remove the first data point
    }

    velocityData.labels.push(label);
    velocityData.datasets[0].data.push({ x: label, y: value });

    velocityChart.update();
}

// Update the graph every second
setInterval(updateVelocityGraph, 1000);
