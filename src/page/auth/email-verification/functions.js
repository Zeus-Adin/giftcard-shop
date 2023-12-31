import axios from "axios";

export async function verifyToken(tokenKey, token) {
    let result;
    const url = `https://test-mlf1.onrender.com/api/activate/user`
    // const url = `http://localhost:3001/api/activate/user`
    const regOptions = { 'token': token, id: tokenKey };
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

export async function resendToken(email) {
    let result;
    const url = 'https://test-mlf1.onrender.com/api/resend/token'
    // const url = 'http://localhost:3001/api/resend/token'
    const regOptions = { 'email': email };
    await axios.post(url, regOptions)
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