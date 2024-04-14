import axios from 'axios';
const url = "https://reactnative-34781-default-rtdb.firebaseio.com";

export function storeCourse(courseData) {
    return axios.post(url + '/courses.json', courseData);
}
export async function getCourses() {
    const respons = await axios.get(url + '/courses.json');
const result=[]
    for (const key in respons.data) {
        const courseObj = {
            date: new Date(respons.data[key].date),
            id: key,
            amount: parseFloat(respons.data[key].amount),
            description: respons.data[key].description, 
        }
        result.push(courseObj); 
    }

    return result;
}