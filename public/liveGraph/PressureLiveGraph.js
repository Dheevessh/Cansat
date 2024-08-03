const pressureCtx = document.getElementById('liveGraphPressure').getContext('2d');

const pressureData = {
    labels: [], // Initial empty labels
    datasets: [{
        label: 'Pressure Live Data',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: [], // Initial empty data
        fill: true
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
                    text: 'hPa'
                }
            }
        },
        animation: {
            duration: 0 // Disable animations for live updates
        }
    }
};

const pressureChart = new Chart(pressureCtx, pressureConfig);

// Function to generate random data for demonstration
function generateRandomPressureData() {
    return Math.random() * 1000;
}

// Function to update the graph with new data
function updatePressureGraph() {
    const now = Date.now();
    const label = now;
    const value = generateRandomPressureData();

    if (pressureData.labels.length >= 20) {
        pressureData.labels.shift(); // Remove the first label
        pressureData.datasets[0].data.shift(); // Remove the first data point
    }

    pressureData.labels.push(label);
    pressureData.datasets[0].data.push({ x: label, y: value });

    pressureChart.update();
}

// Update the graph every second
setInterval(updatePressureGraph, 1000);
