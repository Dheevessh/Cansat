const altitudeCtx = document.getElementById('liveGraphAltitude').getContext('2d');

const altitudeData = {
    labels: [], // Initial empty labels
    datasets: [{
        label: 'Altitude',
        borderColor: 'rgb(153, 102, 255)', // Line color
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Background color
        data: [], // Initial empty data
        fill: false,
        tension: 0.1 // Smooth the line
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
                    text: 'Meters'
                }
            }
        },
        animation: {
            duration: 0 // Disable animations for live updates
        },
        plugins: {
            title: {
                display: true,
                text: 'Altitude'
            }
        }
    }
};

const altitudeChart = new Chart(altitudeCtx, altitudeConfig);

// Function to generate random fluctuating altitude data for demonstration
function generateRandomAltitudeData(prevValue) {
    const fluctuation = Math.random() * 50 - 25; // Larger random fluctuation
    return (prevValue || 2500) + fluctuation; // Start around 2500 meters and fluctuate
}

// Function to update the graph with new data
function updateAltitudeGraph() {
    const now = Date.now();
    const label = now;
    const prevValue = altitudeData.datasets[0].data.length ? altitudeData.datasets[0].data[altitudeData.datasets[0].data.length - 1].y : 2500;
    const value = generateRandomAltitudeData(prevValue);

    if (altitudeData.labels.length >= 50) {
        altitudeData.labels.shift(); // Remove the first label
        altitudeData.datasets[0].data.shift(); // Remove the first data point
    }

    altitudeData.labels.push(label);
    altitudeData.datasets[0].data.push({ x: label, y: value });

    altitudeChart.update();
}

// Update the graph every second
setInterval(updateAltitudeGraph, 1000);
