import axios from 'axios';
const url = "https://reactnative-34781-default-rtdb.firebaseio.com";

export async function storeCourse(courseData) {
    const respons = await axios.post(url + '/courses.json', courseData);
    const id = respons.data.name;
    return id; 
} 
export function updateCourse(id, courseData) {
  return  axios.put(url + `/courses/${id}.json`, courseData);
}
export function deleteCourseHtpp(id) {
   return axios.delete(url + `/courses/${id}.json`);
} 
export async function getCourses() {
    const respons = await axios.get(url + '/courses.json');
    const result = []
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