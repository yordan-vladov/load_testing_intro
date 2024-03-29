import http from 'k6/http';

export const options = {
    stages: [
        { duration: '3h', target: 1000 }, 
        { duration: '4h', target: 2000 }, 
        { duration: '3h', target: 1500 }, 
        { duration: '4h', target: 2000 }, 
    ],
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
