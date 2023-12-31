import axios from "axios";

export async function getBanks() {
    const options = {
        baseURL: 'https://api.paystack.co',
        url: '/bank',
        method: 'get',
        headers: {
            Authorization: 'Bearer sk_test_e78c1b17eae89ecbd3ed44a3e15f92ed778e8ea2'
        }
    }

    try {
        const response = (await axios(options)).data;
        return response.data
    } catch (error) {
        return null
    }
}

export async function getAccounts(id, username) {
    console.log(id, username)
    const options = {
        // baseURL: 'https://test-mlf1.onrender.com',
        baseURL: 'http://localhost:3001',
        url: `/api/get/bank/info/${id}/${username}`,
        method: 'get',
    }

    try {
        const response = (await axios(options)).data;
        return response
    } catch (error) {
        return { accounts: [] }
    }
}

export async function validateBankAccount(account_number, bank_code) {
    const options = {
        baseURL: 'https://api.paystack.co',
        url: `/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
        method: 'get',
        headers: {
            Authorization: 'Bearer sk_test_e78c1b17eae89ecbd3ed44a3e15f92ed778e8ea2'
        }
    }

    try {
        const response = (await axios(options)).data;
        return response.data
    } catch (error) {
        return []
    }
}

export async function regBankInfo(info) {
    let result;
    const url = 'http://localhost:3001/api/register/bank/info';
    // const url = 'https://test-mlf1.onrender.com/api/register/bank/info';
    await axios.post(url, info)
        .then(res => {
            console.log(res)
            if (res.data) {
                const { data } = res;
                result = data
            }
        })
        .catch(err => {
            if (err.response) {
                const { data } = err.response;
                result = data;
            } else {
                result = { bankReg: false, message: err.message }
            }
        })
    return result;
}