import axios from 'axios';
const url="https://reactnative-34781-default-rtdb.firebaseio.com";

export function storeCourse(courseData) {
    return axios.post(url+'/courses.json', courseData);
}
export function fetchCourses() {
    return axios.get(url+'/courses.json');
}