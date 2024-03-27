function performSoakTest(durationInSeconds) {
    let startTime = Date.now();
    let endTime = startTime + (durationInSeconds * 1000); 
    let interval = setInterval(() => {
        if (Date.now() >= endTime) {
            clearInterval(interval);
            console.log("Soak test completed.");
        } else {
          
            console.log("System operating normally...");
        }
    }, 1000);
}

performSoakTest(10);
