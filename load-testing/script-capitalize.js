import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10m', target: 200 },
        { duration: '30m', target: 200 },
        { duration: '5m', target: 0 },
    ],
};

/* STRESS TEST */

export default function () {
    http.post('http://localhost:8080/capitalize', 
        JSON.stringify({ name: 'john', email: 'john@doe.email' }));
    sleep(1);
}
