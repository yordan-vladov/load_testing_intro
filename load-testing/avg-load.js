import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 50,
    duration: '1m',
    thresholds: {
        http_req_duration: ['p(95)<500'],
    },
};

export default function () {
    http.get('http://localhost:8080/');
    sleep(Math.random() * 10 + 5);
}
