import { useState } from "react";
import BaseModal from "./baseModal";
import { Alert } from "@mui/material";
import { WithdrawalAmountText, WithdrawalAmountTextWrapper, WithdrawalNumberKeysWrapper, WithdrawalNumberRowOneWrapper, WithdrawalNumberText, WithdrawalWrapper } from "./components";
import { user } from '../../services/user'
import Cookies from 'js-cookie'
const appOrigin = window.location.origin;
const CreatePinModal = ({ show, close, session, openAlert, setAlertText }) => {
    const [submitBtn, setSubmitBtn] = useState(false);
    const [pin, setPin] = useState('');
    const [displayedPin, setDisplayedPin] = useState([]);

    async function createPin() {
        setSubmitBtn(true);
        const { _id: userId, username } = session;
        const { txStat, message, userData } = await user.createTxPin(userId, username, pin);

        if (txStat) {
            Cookies.set(appOrigin, JSON.stringify(userData, { expires: 0.5 / 48 }));
            setAlertText({ title: 'Success', paragraph: message, reason: 'success', sender: 'createPin' })
            openAlert();
            close();
        } else {
            setAlertText({ title: 'Error', paragraph: message, reason: 'error', sender: 'createPin' })
            openAlert();
            setSubmitBtn(false);
        }

    }

    function handleClose() {
        setPin('')
        close()
    }

    function handleKeyStokes(value) {
        if (displayedPin.length === 4) return
        setDisplayedPin(displayedPin => [...displayedPin, '*']);
        setPin(pin => pin + value)
    }
    function handleBackSpace() {
        if (displayedPin.length === 0) return
        setDisplayedPin([]);
        setPin('')
    }


    const backSpace = <svg width="11" height="15" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2.37093 9.13768C1.61428 9.94477 1.65659 11.2128 2.46536 11.9677L10 19" stroke="#3F1E4B" strokeWidth="2" strokeLinecap="round"></path></svg>;
    const numbersActions = [
        {
            row: [
                { label: 1, value: 1, action: handleKeyStokes },
                { label: 2, value: 2, action: handleKeyStokes },
                { label: 3, value: 3, action: handleKeyStokes }
            ]
        },
        {
            row: [
                { label: 4, value: 4, action: handleKeyStokes },
                { label: 5, value: 5, action: handleKeyStokes },
                { label: 6, value: 6, action: handleKeyStokes }
            ]
        },
        {
            row: [
                { label: 7, value: 7, action: handleKeyStokes },
                { label: 8, value: 8, action: handleKeyStokes },
                { label: 9, value: 9, action: handleKeyStokes }
            ]
        },
        {
            row: [
                { label: 0, value: 0, action: handleKeyStokes },
                { label: backSpace, value: '', action: handleBackSpace }
            ]
        }
    ]
    return (
        <BaseModal show={show} close={handleClose}
            title={'Create Pin'}
            subtitle={''}
            submitBtn={submitBtn}
            submit={createPin}
            btnText={'Create Pin'}
        >

            <WithdrawalWrapper style={{ width: '1rem' }}>

                <WithdrawalAmountTextWrapper>
                    {displayedPin.length > 0 && <WithdrawalAmountText style={{ color: 'black' }}>{displayedPin.join('.')}</WithdrawalAmountText>}
                    {displayedPin.length === 0 && <WithdrawalAmountText>*.*.*.*</WithdrawalAmountText>}
                </WithdrawalAmountTextWrapper>

                <WithdrawalNumberKeysWrapper>
                    <Alert style={{ width: '100%', justifyContent: 'center' }} severity="info">Set your 4 digit transaction pin</Alert>
                    {
                        numbersActions.map(({ row }, i) => (
                            <WithdrawalNumberRowOneWrapper key={i}>
                                <WithdrawalNumberText onClick={() => row[0].action(row[0].value)}>{row[0].label}</WithdrawalNumberText>
                                <WithdrawalNumberText onClick={() => row[1].action(row[1].value)} >{row[1].label}</WithdrawalNumberText>
                                {row[2] && <WithdrawalNumberText onClick={() => row[2].action(row[2].value)}>{row[2].label}</WithdrawalNumberText>}
                            </WithdrawalNumberRowOneWrapper>
                        ))
                    }

                </WithdrawalNumberKeysWrapper>

            </WithdrawalWrapper>
        </BaseModal>
    )
}

export default CreatePinModal;