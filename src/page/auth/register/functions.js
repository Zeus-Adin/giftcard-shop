import axios from "axios";

const appOrigin = window.location.origin;

export async function registerUser(username, contact, email, pwd) {
    console.log(username, contact, email, pwd)
    let result;
    // const url = 'http://localhost:3001/api/register/user/data/'
    const url = 'https://test-mlf1.onrender.com/api/register/user/data/'
    const regOptions = {
        "username": username,
        "contact": contact,
        "email": email,
        "pwd": pwd
    }
    await axios.post(url, regOptions)
        .then(res => {
            if (res.data) {
                const { data } = res;
                result = data
            }
        })
        .catch(err => {
            if (err.response) {
                const { response: { data } } = err;
                result = data
            }
        })
    return result;
}