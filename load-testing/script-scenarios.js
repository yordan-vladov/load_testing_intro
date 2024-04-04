import http from "k6/http";

export const options = {
    scenarios: {
        shared_iter_scenario: {
            executor: "shared-iterations",
            vus: 10,
            iterations: 100,
            startTime: "0s",
            tags: {
                test_type: 'shared_iterations'
            }
        },
    },
};

export default function () {
    http.get("http://localhost:8080/");
}
