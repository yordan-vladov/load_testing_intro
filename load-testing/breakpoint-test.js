function performBreakpointTest(maxLoad) {
    console.log(`Breakpoint test initiated with maximum load of ${maxLoad} requests/second.`);
    let currentLoad = 0;

    function simulateSystemOperation() {
        console.log(`System operating at ${currentLoad} requests/second...`);
        setTimeout(() => {
            if (currentLoad < maxLoad) {
                currentLoad += 10;
                simulateSystemOperation();
            } else {
                console.log(`Breakpoint reached: System failed at ${currentLoad} requests/second.`);
            }
        }, 1000); 
    }

    simulateSystemOperation();
}

performBreakpointTest(100);
