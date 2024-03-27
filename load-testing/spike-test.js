function performSpikeTest(spikeDurationInSeconds, spikeLoad) {
    console.log("Spike test initiated.");
    simulateNormalLoad();
    setTimeout(() => {
        console.log(`Spike load of ${spikeLoad} requests/second introduced.`);
        simulateSpikeLoad(spikeLoad);
    }, 5000); 
}

function simulateNormalLoad() {
    console.log("Normal load: Simulating normal system operation...");
}

function simulateSpikeLoad(spikeLoad) {
    let spikeInterval = setInterval(() => {
        console.log(`Spike load: Simulating ${spikeLoad} requests/second...`);
    }, 1000); 

    setTimeout(() => {
        clearInterval(spikeInterval);
        console.log("Spike load ended.");
    }, 10000);
}

performSpikeTest(10, 50);
