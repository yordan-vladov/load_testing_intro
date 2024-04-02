import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 50 },
        { duration: '1m', target: 50 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
    },
};

export default function () {
    const url = 'http://localhost:8080/login';
    const payload = JSON.stringify({
        email: 'aaa',
        password: 'bbb',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);

    sleep(5);
};
