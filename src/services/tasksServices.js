import axios from 'axios';
const apiUrl = "http://localhost:3000/tasks";

export function getTask() {
    return axios.get(apiUrl);
}

export function createTask(task) {
    return axios.post(apiUrl(apiUrl, task));
}

export function getTaskById(id) {
    return axios.get(apiUrl + "/" + id, task);
}