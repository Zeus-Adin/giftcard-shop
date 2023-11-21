import { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import BaseModal from '../../../../component/modal/baseModal'
import { Alert, FormLabel, TextField } from '@mui/material';
import { updateCurrencyRates, updateUsersBalance } from '../functions';
import { curreniesSymbols } from '../../../../lib/currency';

const UpdateBalanceModal = ({ show, close, session, selectUserInfo }) => {
    const [amount, setAmount] = useState(0);

    const [alertText, setAlertText] = useState('Note: This modal updates the users balance.');
    const [severity, setSeverity] = useState('info');

    function handleTextChange(e) {
        const { name, value } = e.target;
        if (name === 'amount') setAmount(value)
    }

    async function updateUserBalance() {
        const options = {
            adminId: "654e97d013c3feb799557957", adminUsername: 'DaNiel', userId: selectUserInfo.usersId, username: selectUserInfo.username, amount
        };
        const { balanceUpdateState, message } = await updateUsersBalance(options);
        if (balanceUpdateState) {
            setAlertText(message);
            setSeverity('success');
        } else {
            setAlertText(message);
            setSeverity('error');
        }
    }
    console.log(selectUserInfo)
    return (
        <BaseModal show={show} close={close}
            title={'Admin Users Balance Update'}
            subtitle={<Alert variant="outlined" severity={severity} style={{ textAlign: 'justify' }}>{alertText}</Alert>}
            submitBtn={false}
            submit={updateUserBalance}
            btnText={'Update Amount'}
        >
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <FormLabel style={{ fontSize: '1.5rem' }}>Available amount: <span style={{ fontSize: '2rem' }}>{curreniesSymbols["NGN"].symbol} {parseFloat(selectUserInfo.balance).toLocaleString()}</span></FormLabel>
                <TextField id="outlined-basic" label="Amount" name='amount' onChange={handleTextChange} variant="outlined" style={{ marginTop: '1rem' }} />
            </FormControl>

        </BaseModal>
    )
}

export default UpdateBalanceModal;