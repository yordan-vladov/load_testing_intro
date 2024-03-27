async function smokeTest() {
    try {
        const response = await axios.get('http://localhost:8080'); 
        console.log('Smoke Test passed:', response.status);
    } catch (error) {
        console.error('Smoke Test failed:', error);
    }
}

smokeTest();
