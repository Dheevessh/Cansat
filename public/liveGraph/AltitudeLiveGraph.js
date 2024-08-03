const altitudeCtx = document.getElementById('liveGraphAltitude').getContext('2d');

const altitudeData = {
    labels: [], // Initial empty labels
    datasets: [{
        label: 'Altitude Live Data',
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        data: [], // Initial empty data
        fill: true
    }]
};

const altitudeConfig = {
    type: 'line',
    data: altitudeData,
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
                    text: 'Meters'
                }
            }
        },
        animation: {
            duration: 0 // Disable animations for live updates
        }
    }
};

const altitudeChart = new Chart(altitudeCtx, altitudeConfig);

// Function to generate random data for demonstration
function generateRandomAltitudeData() {
    return Math.random() * 5000; // Altitude in meters
}

// Function to update the graph with new data
function updateAltitudeGraph() {
    const now = Date.now();
    const label = now;
    const value = generateRandomAltitudeData();

    if (altitudeData.labels.length >= 20) {
        altitudeData.labels.shift(); // Remove the first label
        altitudeData.datasets[0].data.shift(); // Remove the first data point
    }

    altitudeData.labels.push(label);
    altitudeData.datasets[0].data.push({ x: label, y: value });

    altitudeChart.update();
}

// Update the graph every second
setInterval(updateAltitudeGraph, 1000);
