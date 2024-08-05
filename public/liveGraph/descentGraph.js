// Function to generate linearly correlated data for the descent of a satellite
function generateDescentData(points = 100) {
    const data = {
        x: [],
        y: [],
        z: []
    };

    let x = 0, y = 0, z = 0;

    for (let i = 0; i < points; i++) {
        x += Math.random() * 10; // Increment X values
        y += Math.random() * 10; // Increment Y values
        z += Math.random() * 10; // Increment Z values

        data.x.push(x); // Linearly correlated X values
        data.y.push(y); // Linearly correlated Y values
        data.z.push(z); // Linearly correlated Z values
    }

    return data;
}

// Generate initial descent data
const descentData = generateDescentData();

// Plot the 3D line graph
Plotly.newPlot('descentGraph', [{
    x: descentData.x,
    y: descentData.y,
    z: descentData.z,
    mode: 'lines',
    line: {
        width: 2,
        color: 'rgb(255, 99, 132)' // Fixed color for the line
    },
    type: 'scatter3d'
}], {
    title: 'Descent Path',
    scene: {
        xaxis: { title: 'X Axis' },
        yaxis: { title: 'Y Axis' },
        zaxis: { title: 'Z Axis' }
    }
});

// Function to update the 3D line graph with new data
function updateDescentGraph() {
    const newDescentData = generateDescentData();

    Plotly.update('descentGraph', {
        x: [newDescentData.x],
        y: [newDescentData.y],
        z: [newDescentData.z]
    });
}

// Update the graph every second
setInterval(updateDescentGraph, 1000);
