import axios from 'axios'

export async function getAllUsers(userId, username) {
    try {
        const option = { userId, username };
        const res = (await axios.post('http://localhost:3001/api/get/all/users', option)).data;
        return res;
    } catch (error) {
        if (error.response) {
            const { data: { authState, message, result } } = error.response;
            return { authState, message, result }
        }
        return { authState: false, message: error.message, result: [] }
    }
}

export async function getAllCardsTx(userId, username) {
    try {
        const option = { userId, username };
        const res = (await axios.post('http://localhost:3001/api/get/all/cardtx', option)).data;
        return res;
    } catch (error) {
        if (error.response) {
            const { data: { authState, message, result } } = error.response;
            return { authState, message, result }
        }
        return { authState: false, message: error.message, result: [] }
    }
}

export async function getAllOrder(userId, username) {
    try {
        const option = { userId, username };
        const res = (await axios.post('http://localhost:3001/api/get/all/orders', option)).data;
        return res;
    } catch (error) {
        if (error.response) {
            const { data: { authState, message, result } } = error.response;
            return { authState, message, result }
        }
        return { authState: false, message: error.message, result: [] }
    }
}

export async function getAllBank(userId, username) {
    try {
        const option = { userId, username };
        const res = (await axios.post('http://localhost:3001/api/get/all/banks', option)).data;
        console.log(res)
        return res;
    } catch (error) {
        if (error.response) {
            const { data: { authState, message, result } } = error.response;
            return { authState, message, result }
        }
        return { authState: false, message: error.message, result: [] }
    }
}

export async function updateCurrencyRates(option) {
    try {
        const res = (await axios.post('http://localhost:3001/api/update/rates', option)).data;
        return res;
    } catch (error) {
        if (error.response) {
            const { data } = error.response;
            return data
        }
        return { rateUpdateState: false, message: error.message }
    }
}

export async function updateUsersBalance(option) {
    try {
        const res = (await axios.post('http://localhost:3001/api/update/amount', option)).data;
        return res;
    } catch (error) {
        if (error.response) {
            const { data } = error.response;
            return data
        }
        return { rateUpdateState: false, message: error.message }
    }
}

export async function getCardTxImages(option) {
    try {
        const res = (await axios.get('http://localhost:3001/api/get/giftcard/:cid', option)).data;
        return res;
    } catch (error) {
        if (error.response) {
            const { data } = error.response;
            return data
        }
        return { rateUpdateState: false, message: error.message }
    }
}


export async function updateCardTx(option) {
    try {
        const res = (await axios.post('http://localhost:3001/api/update/cardtx/data', option)).data;
        return res;
    } catch (error) {
        if (error.response) {
            const { data } = error.response;
            return data
        }
        return { rateUpdateState: false, message: error.message }
    }
}