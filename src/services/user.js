export const user = {
    isAuthenticated: async () => {
        return true
    },
    createTxPin: async (userId, username) => {

        let txStat = false; let message;
        return { txStat: false, message }
    },
    updateTxPin: async () => {

    }
}