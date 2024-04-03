import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 2000 },
        { duration: '1m', target: 0 },
    ],
};

export default () => {
    const urlRes = http.get('https://localhost:8080');
    sleep(1);
};