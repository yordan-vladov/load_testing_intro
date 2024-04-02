import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '30s',
};

export function setup() {
    http.get("http://localhost:8080/login");
    sleep(1);
}

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
    sleep(1);
}

export function teardown() {
    http.get("http://localhost:8080/");
    sleep(1);
}
