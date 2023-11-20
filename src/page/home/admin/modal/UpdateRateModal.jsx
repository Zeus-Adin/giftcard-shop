import { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BaseModal from '../../../../component/modal/baseModal'
import { Alert, Box, TextField } from '@mui/material';
import Cookies from 'js-cookie';
import { updateCurrencyRates } from '../functions';
import { currencies, curreniesSymbols } from '../../../../lib/currency';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250, }, }, };

const names = [
    { label: 'United States Dollar', value: 'usd' },
    { label: 'Euro', value: 'eur' },
    { label: 'Poland', value: 'pln' },
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const appOrigin = window.location.origin;
const RateModal = ({ show, close }) => {
    const theme = useTheme();
    const [currency, setCurrency] = useState('');
    const [amount, setAmount] = useState(0);

    const [alertText, setAlertText] = useState('Note: If the following currency had a previous value it will be updated, and if currency is not in rate list it will be added.');
    const [severity, setSeverity] = useState('info');

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let session = Cookies.get(appOrigin);
    if (session) {
        session = JSON.parse(session);
    }

    function handleTextChange(e) {
        const { name, value } = e.target;
        if (name === 'currency') setCurrency(value)
        if (name === 'amount') setAmount(value)
    }
    const localCurrencies = currencies.map(obj => Object.keys(obj));

    async function updateOrRegisterRate() {
        const options = {
            userId: "654e97d013c3feb799557957", username: 'DaNiel', currency, amount
        };
        const { rateUpdateState, message } = await updateCurrencyRates(options);
        if (rateUpdateState) {
            setAlertText(message);
            setSeverity('success');
        } else {
            setAlertText(message);
            setSeverity('error');
        }
    }

    return (
        <BaseModal show={show} close={close}
            title={'Admin Rate Update'}
            subtitle={<Alert variant="outlined" severity={severity} style={{ textAlign: 'justify' }}>{alertText}</Alert>}
            submitBtn={false}
            submit={updateOrRegisterRate}
            btnText={'Update Rate'}
        >
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select displayEmpty value={currency} onChange={handleTextChange} input={<OutlinedInput />}
                    name='currency'
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Currency Rate to Update</em>
                    </MenuItem>
                    {localCurrencies.map((res, i) => {
                        const { name, symbol } = currencies[i][res[0]];
                        return (
                            <MenuItem key={i} value={res[0]} style={getStyles(name, currency, theme)}>
                                {name} {res[0]}
                            </MenuItem>
                        )

                    })}
                </Select>
                <TextField id="outlined-basic" label="Amount" name='amount' onChange={handleTextChange} variant="outlined" style={{ marginTop: '1rem' }} />
            </FormControl>

        </BaseModal>
    )
}

export default RateModal;