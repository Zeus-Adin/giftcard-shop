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
    updateTxPin: async () => {

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