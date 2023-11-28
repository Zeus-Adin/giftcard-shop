import { useEffect, useRef, useState } from "react";
import BaseModal from "./baseModal";
import { Alert } from "@mui/material";
import { PasswordContentHeaderInputBox, PasswordContentHeaderText, PasswordContentWrapper, WithdrawalNumberKeysWrapper, WithdrawalNumberRowOneWrapper, WithdrawalNumberText, } from "./components";
import { user } from '../../services/user';

const ChangePinModal = ({ show, close, session, openAlert, setAlertText }) => {
    const oldInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const newInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const [submitBtn, setSubmitBtn] = useState(false);

    const [oldPin, setOldPin] = useState('');
    const [newPin, setNewPin] = useState('');

    const [errorMsg, setErrorMsg] = useState({ label: 'Enter your 4 digit pin', severity: 'info' });

    function handleClose() {
        setOldPin('')
        setNewPin('')
        setSubmitBtn(false);
        close()
    }

    async function updatePin() {
        setSubmitBtn(true);
        const { _id: userId, username } = session;
        const { updatePinState, message } = await user.updateTxPin(userId, username, oldPin, newPin);

        if (updatePinState) {
            setAlertText({ title: 'Success', paragraph: message, reason: 'success', sender: 'updatePin' })
            openAlert();
            handleClose();
        } else {
            setAlertText({ title: 'Error', paragraph: message, reason: 'error', sender: 'updatePin' })
            openAlert();
            setSubmitBtn(false);
        }

    }



    function handleChangeFocus() {
        const opl = oldPin.length;
        const npl = newPin.length;
        if (opl !== 4) {
            oldInputRefs[opl].current.focus();
            return
        }
        if (npl !== 4) {
            newInputRefs[npl].current.focus();
            return
        }
    }

    async function handleOldKeyStokes(i, e) {
        try {
            const { value } = e.target;
            if (oldPin.length === 3) {
                const confirmPin = oldPin + value;
                const { _id: userId, username } = session;
                const { success, pin } = await user.getUsersPin(userId, username);
                console.log(pin)
                if (success) {
                    if (confirmPin !== pin) {
                        setErrorMsg({ label: 'Incorrect pin', severity: 'error' })
                        for (let i = 0; i < oldInputRefs.length; i++) {
                            oldInputRefs[i].current.value = '';
                        }
                        setOldPin('')
                        oldInputRefs[0].current.focus();
                        return
                    }
                    setErrorMsg({ label: 'Enter your 4 digit pin', severity: 'info' })
                }
            }

            if (value === '') {
                oldInputRefs[i - 1].current.focus();
            }
            if (oldPin.length !== 4) {
                setOldPin(oldPin => oldPin + value);
                if (oldPin.length !== 3) {
                    oldInputRefs[i + 1].current.focus();
                }
            }
            return
        } catch (error) { }

    }

    function handleNewKeyStokes(i, e) {
        const { value } = e.target;
        if (newPin.length !== 4) {
            setNewPin(newPin => newPin + value);
            if (newPin.length !== 3) {
                newInputRefs[i + 1].current.focus();
            }
        }
        return
    }

    const handleOldKeyDown = (e, i) => {
        try {
            if (e.key === 'Backspace') {
                setOldPin(oldPin.substring(0, oldPin.length - i));
                oldInputRefs[i - 1].current.value = '';
                oldInputRefs[i - 1].current.focus();
            }
        } catch (error) { }

    }

    const handleNewKeyDown = (e, i) => {
        try {
            if (e.key === 'Backspace') {
                setNewPin(newPin.substring(0, newPin.length - i));
                newInputRefs[i - 1].current.value = '';
                newInputRefs[i - 1].current.focus();
            }
        } catch (error) { }

    }

    return (
        <BaseModal show={show} close={handleClose}
            title={'Change Pin'}
            subtitle={''}
            submitBtn={submitBtn}
            submit={updatePin}
            btnText={'Update Pin'}
        >

            <PasswordContentWrapper>
                <img height="11rem" src="/svg/pix.svg" alt="" />
                {oldPin.length !== 4
                    ? <PasswordContentHeaderText>Enter Current Pin</PasswordContentHeaderText>
                    : <PasswordContentHeaderText>Enter New Pin</PasswordContentHeaderText>
                }
                <div>
                    <div style={{ display: 'flex' }}>
                        {oldPin.length !== 4 &&
                            oldInputRefs.map((inputRef, i) => (
                                <PasswordContentHeaderInputBox key={i} ref={inputRef} onKeyUp={(e) => handleOldKeyDown(e, i)} onChange={(e) => handleOldKeyStokes(i, e)} onClick={handleChangeFocus} inputMode="numeric" min={'0'} max={'9'} maxLength={'1'} type="password" />
                            ))
                        }
                        {oldPin.length === 4 &&
                            newInputRefs.map((inputRef, i) => (
                                <PasswordContentHeaderInputBox key={i} ref={inputRef} onKeyUp={(e) => handleNewKeyDown(e, i)} onChange={(e) => handleNewKeyStokes(i, e)} onClick={handleChangeFocus} inputMode="numeric" min={'0'} max={'9'} maxLength={'1'} type="password" />
                            ))
                        }
                    </div>
                </div>
                <Alert style={{ width: '100%', justifyContent: 'center' }} severity={errorMsg.severity}>{errorMsg.label}</Alert>
            </PasswordContentWrapper>

        </BaseModal>
    )
}


export default ChangePinModal;