import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '1m', target: 50 }, 
        { duration: '3m', target: 50 }, 
        { duration: '1m', target: 100 }, 
        { duration: '3m', target: 100 },
        { duration: '1m', target: 0 }, 
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'],
    },
};

export default function () {
    http.get('http://localhost:8080/');
    sleep(Math.random() * 4 + 1);
}
