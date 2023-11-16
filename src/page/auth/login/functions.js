import axios from "axios";
import Cookies from "js-cookie";

// const url = "https://test-mlf1.onrender.com/api/user/login"
const url = "http://localhost:3001/api/user/login"
const appOrigin = window.location.origin;

function redirect(path) {
    window.location.href = `${window.location.origin}${path}`;
}

export async function login(email, pwd) {
    let result;
    const authOptions = {
        email: email,
        pwd: pwd
    }
    await axios.post(url, authOptions)
        .then(res => {
            console.log(res)
            if (res.data) {
                const { data } = res;
                result = data
            }
        })
        .catch(err => {
            console.log('Here is the error', err)
            result = { authState: false, message: err.message }
        })
    return result;
}

export async function logUserOut() {
    const currentValue = Cookies.get(appOrigin);
    if (currentValue) Cookies.remove(appOrigin);
    redirect('/login')
}