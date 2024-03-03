import axios from "axios";

const API_KEY = 'AIzaSyBUIOAFNVLdFYQw3jUGbwzJKi8aMj43pcM';

async function autohenticate(mode, email, password) {
    
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    // console.log(response.data);
    const token=response.data.idToken;
    return token;

}
export  function createUser(email, password) { 
   return  autohenticate('signUp', email, password);

}
export  function LoginUser(email, password) { 
    return  autohenticate('signInWithPassword', email, password);
 
 }