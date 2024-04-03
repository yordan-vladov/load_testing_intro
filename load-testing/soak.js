import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 50,
    duration: '1h',
    thresholds: {
        http_req_duration: ['p(95)<1000'],
    },
};

export default function () {
    http.get('http://localhost:8080/');
    sleep(Math.random() * 4 + 1);
}