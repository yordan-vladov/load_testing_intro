async function stressTest() {
    const maxRequests = 1000;
    const concurrencyLevel = 10; 

    const requests = Array.from({ length: maxRequests }, async () => {
        try {
            const response = await axios.get('http://localhost:8080');
            console.log('Stress Test passed:', response.status);
        } catch (error) {
            console.error('Stress Test failed:', error);
        }
    });

    await Promise.all(requests);
}

stressTest();
