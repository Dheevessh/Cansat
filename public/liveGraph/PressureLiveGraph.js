const pressureCtx = document.getElementById('liveGraphPressure').getContext('2d');

const pressureData = {
    labels: [], // Initial empty labels
    datasets: [{
        label: 'Pressure',
        borderColor: 'rgb(255, 99, 132)', // Red color for the line
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: [], // Initial empty data
        fill: false,
        tension: 0.1 // Smooth the line
    }]
};

const pressureConfig = {
    type: 'line',
    data: pressureData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'time (s)'
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
                    text: 'hPa'
                }
            }
        },
        animation: {
            duration: 0 // Disable animations for live updates
        },
        plugins: {
            title: {
                display: true,
                text: 'Pressure'
            }
        }
    }
};

const pressureChart = new Chart(pressureCtx, pressureConfig);

// Function to generate random increasing pressure data for demonstration
function generateRandomPressureData(prevValue) {
    const fluctuation = Math.random() * 2 - 1; // Small random fluctuation
    return (prevValue || 1013) + fluctuation; // Start around 1013 hPa and fluctuate
}

// Function to update the graph with new data
function updatePressureGraph() {
    const now = Date.now();
    const label = now;
    const prevValue = pressureData.datasets[0].data.length ? pressureData.datasets[0].data[pressureData.datasets[0].data.length - 1].y : 1013;
    const value = generateRandomPressureData(prevValue);

    if (pressureData.labels.length >= 50) {
        pressureData.labels.shift(); // Remove the first label
        pressureData.datasets[0].data.shift(); // Remove the first data point
    }

    pressureData.labels.push(label);
    pressureData.datasets[0].data.push({ x: label, y: value });

    pressureChart.update();
}

// Update the graph every second
setInterval(updatePressureGraph, 1000);
