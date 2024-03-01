import axios from "axios";

const API_KEY = 'AIzaSyBUIOAFNVLdFYQw3jUGbwzJKi8aMj43pcM';

async function createUser(email, password) {

   const response= await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    
}