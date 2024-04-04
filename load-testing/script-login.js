import http from 'k6/http';

export const options = {
    vus: 10,
    duration: '30s',
    tags: {
        test_type: 'login'
    }
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
}
