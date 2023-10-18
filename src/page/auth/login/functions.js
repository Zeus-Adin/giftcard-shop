import axios from "axios";

const url = "https://test-mlf1.onrender.com/api/user/login"
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
            console.log(err)
            if (err.response) {
                const { response: { data } } = err;
                result = data
            }
        })
    return result;
}