import axios from 'axios'


export const user = {
    isAuthenticated: async () => {
        return true
    },
    createTxPin: async (userId, username, txpin) => {
        let txStat = false; let message; let userData;
        const txPinOptons = { userId, username, txpin }
        try {
            const { txRegStat, message: regMsg, userInfo } = await (await axios.post('http://localhost:3001/api/create/pin', txPinOptons)).data;
            txStat = txRegStat;
            message = regMsg;
            userData = userInfo;
        } catch (error) {
            txStat = false;
            message = error.message;
            userData = [];
        }
        return { txStat: txStat, message, userData }

    },
    updateTxPin: async (userId, username, old_txpin, new_txpin) => {
        const txUpdatePinOptons = { userId, username, old_txpin, new_txpin }
        try {
            const data = (await axios.post('http://localhost:3001/api/update/txpin', txUpdatePinOptons)).data;
            return data;
        } catch (err) {
            if (err.response) {
                const { data } = err.response;
                return data;
            }
            return { txUpdateStat: false, message: err.message }
        }
    },
    updateUserPassword: async (userId, username, oldPassword, newPassword) => {
        try {
            const res = (await axios.post('http://localhost:3001/api/update/password', { userId, username,oldPassword, newPassword })).data;
            return res
        } catch (err) {
            if (err.response) {
                const { data } = err.response;
                return data
            }
            return { success: false, pin: '', message: err.message }
        }
    },
    getUsersPin: async (userId, username) => {
        try {
            const res = (await axios.post('http://localhost:3001/api/get/txpin', { userId, username })).data;
            return res
        } catch (err) {
            if (err.response) {
                const { data } = err.response;
                return data
            }
            return { success: false, pin: '', message: err.message }
        }
    },
    balanceWithdraw: async (userId, username, amount, txpin) => {
        let withdrawStat = false; let message; let userData; let code;
        const txPinOptons = { userId, username, amount, txpin }
        try {
            const { withdrawStat: reqStat, message: regMsg, userInfo } = await (await axios.post('http://localhost:3001/api/balance/withdraw', txPinOptons)).data;
            withdrawStat = reqStat;
            message = regMsg;
            userData = userInfo;
            code = '';
        } catch (error) {
            console.log(error)
            if (error.response) {
                const { response: { data, status } } = error;
                withdrawStat = data.withdrawStat;
                message = data.message;
                userData = [];
                code = status;
            } else {
                withdrawStat = false;
                message = error.message;
                userData = [];
                code = error.code
            }

        }
        return { withdrawStat: withdrawStat, message, userData, code }
    },
    balanceDeposit: async () => {

    },
    usersOrders: async (userID, username) => {
        console.log(userID, username)
        try {
            const response = (await axios.get(`http://localhost:3001/api/orders/${userID}/${username}`)).data;
            return response
        } catch (error) {
            return []
        }
    }
}