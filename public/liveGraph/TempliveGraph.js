const tempCtx = document.getElementById('liveGraphTemp').getContext('2d');

const tempData = {
    labels: [], // Initial empty labels
    datasets: [{
        label: 'Temperature Live Data',
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: [], // Initial empty data
        fill: true
    }]
};

const tempConfig = {
    type: 'line',
    data: tempData,
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
                    text: 'Celsius'
                }
            }
        },
        animation: {
            duration: 0 // Disable animations for live updates
        }
    }
};

const tempChart = new Chart(tempCtx, tempConfig);

// Function to generate random data for demonstration
function generateRandomTempData() {
    return Math.random() * 100;
}

// Function to update the graph with new data
function updateTempGraph() {
    const now = Date.now();
    const label = now;
    const value = generateRandomTempData();

    if (tempData.labels.length >= 20) {
        tempData.labels.shift(); // Remove the first label
        tempData.datasets[0].data.shift(); // Remove the first data point
    }

    tempData.labels.push(label);
    tempData.datasets[0].data.push({ x: label, y: value });

    tempChart.update();
}

// Update the graph every second
setInterval(updateTempGraph, 1000);
