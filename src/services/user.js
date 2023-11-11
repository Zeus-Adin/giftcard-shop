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
    balanceWithdraw: async (userId, username, amount) => {

    },
    balanceDeposit: async () => {

    }
}