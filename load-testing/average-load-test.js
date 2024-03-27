async function averageLoadTest() {
    const numberOfRequests = 100; 
    const urls = ['http://localhost:8080/'];

    const requests = Array.from({ length: numberOfRequests }, async () => {
        try {
            const randomUrl = urls[Math.floor(Math.random() * urls.length)];
            const response = await axios.get(randomUrl);
            console.log('Average-Load Test passed:', response.status);
        } catch (error) {
            console.error('Average-Load Test failed:', error);
        }
    });

    await Promise.all(requests);
}

averageLoadTest();
