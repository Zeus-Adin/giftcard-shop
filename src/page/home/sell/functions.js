import axios from "axios";

const url = "https://test-mlf1.onrender.com/api/register/giftcard/tx"
// const url = "http://localhost:3001/api/register/giftcard/tx"

export async function submitCardTxRequest(user, cardCurrency, amount, rate, fileCount, files, currency) {
    let result;
    const txOptions = {
        user: user,
        cardCurrency: cardCurrency,
        amount: amount,
        rate: rate,
        fileCount: fileCount,
        files: files,
        status: 'pending',
        currency: currency
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
            console.log(err)
            if (err.response) {
                const { response: { data } } = err;
                result = data
            }
        })
    return result;
}