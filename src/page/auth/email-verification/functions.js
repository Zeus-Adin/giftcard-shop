import axios from "axios";

export async function verifyToken(tokenKey, token) {
    let result;
    const url = 'https://test-mlf1.onrender.com/api/activate/user/'
    const regOptions = { 'tokenKey': tokenKey, 'token': token };
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

export async function resendToken(tokenKey) {
    let result;
    const url = 'https://test-mlf1.onrender.com/api/resend/token'
    const regOptions = { 'tokenKey': tokenKey };
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