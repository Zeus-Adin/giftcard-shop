import axios from 'axios'
const url = 'http://localhost:3001/api/get/giftcard'

export async function getCardTx(username, id) {
    let result;
    try {
        const { data: { results } } = await axios.get(`${url}/${username}/${id}`);
        result = results;
    } catch (error) {
        result = [];
    }
    return result;
}