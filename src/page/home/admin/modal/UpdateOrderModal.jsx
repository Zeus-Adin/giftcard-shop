import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import BaseModal from '../../../../component/modal/baseModal'
import { Alert, FormLabel, Grid, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { getCardTxImages, updateCardTx, updateOrder } from '../functions';
import { curreniesSymbols } from '../../../../lib/currency';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250, }, }, };

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const txStatus = [
    { label: 'Success', value: 'success' },
    { label: 'Pending', value: 'pending' },
    { label: 'Declined', value: 'declined' }
]

const UpdateOrderModal = ({ show, close, session, selectOrderInfo }) => {
    const theme = useTheme();
    const [status, setStatus] = useState('');

    const [alertText, setAlertText] = useState('Note: This modal updates the order status.');
    const [severity, setSeverity] = useState('info');

    function handleTextChange(e) {
        const { name, value } = e.target;
        if (name === 'status') setStatus(value)
    }

    async function updateOrderStatus() {
        const options = {
            adminId: "654e97d013c3feb799557957", adminUsername: 'DaNiel',
            orderRef: selectOrderInfo.orderRef, username: selectOrderInfo.userName,
            status: status,
        };
        console.log(options)
        const { orderState, message } = await updateOrder(options);
        if (orderState) {
            setAlertText(message);
            setSeverity('success');
        } else {
            setAlertText(message);
            setSeverity('error');
        }
    }

    return (
        <>
            <BaseModal show={show} close={close}
                title={'Admin Order Status Update'}
                subtitle={<Alert variant="outlined" severity={severity} style={{ textAlign: 'justify' }}>{alertText}</Alert>}
                submitBtn={false}
                submit={updateOrderStatus}
                btnText={'Update Order Status'}
            >
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <FormLabel style={{ fontSize: '1.5rem' }}>{selectOrderInfo.action} amount:  <span style={{ fontSize: '2rem' }}>{curreniesSymbols["NGN"].symbol} {selectOrderInfo.amount}</span></FormLabel>
                    <Select displayEmpty value={status} onChange={handleTextChange} input={<OutlinedInput />}
                        name='status'
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>Order Status</em>
                        </MenuItem>
                        {txStatus.map(({ label, value }, i) => {
                            return (
                                <MenuItem key={i} value={value} style={getStyles(label, value, theme)}>
                                    {label}
                                </MenuItem>
                            )

                        })}
                    </Select>
                </FormControl>

            </BaseModal>
        </>

    )
}

export default UpdateOrderModal;