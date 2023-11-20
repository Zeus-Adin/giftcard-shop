import axios from "axios";

// const url = "https://test-mlf1.onrender.com/api/register/giftcard/tx"
const url = "http://localhost:3001/api/register/giftcard/tx"

export async function submitCardTxRequest(userId, userName, currency, amount, rate, files, ecode, fileCount, cardType) {
    let result;
    const txOptions = {
        userId: userId,
        userName,
        currency,
        amount,
        rate,
        files,
        ecode,
        fileCount,
        cardType,
        action: 'sell'
    }
    await axios.post(url, txOptions)
        .then(res => {
            console.log(res)
            if (res.data) {
                const { data } = res;
                result = data
            }
        })
        .catch(err => {
            result = { regCardTx: false, message: err.message, result: {} }
        })
    return result;
}

export async function getPlateFormRates() {
    try {
        const rates = (await axios.get('http://localhost:3001/api/get/rates')).data
        return rates
    } catch (error) {
        return []
    }
}