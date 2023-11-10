import { useEffect, useState } from "react";
import BaseModal from "./baseModal";
import { WithdrawalAmountText, WithdrawalAmountTextWrapper, WithdrawalNumberKeysWrapper, WithdrawalNumberRowOneWrapper, WithdrawalNumberText, WithdrawalWrapper } from "./components";
import { Alert } from "@mui/material";
import Cookies from 'js-cookie'

import PinModal from "../../component/modal/PinModal";
import CreatePinModal from "./CreatePinModal";

const currencySvg = <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.03846 22V0H8.09508L15.4972 14.2371V0H20.2188V22H15.1622L7.76 7.76286V22H3.03846Z" fill="#3F1E4B"></path><path d="M0.5 10.0882V6.11111H22.5V10.0882H0.5ZM0.5 16.5873V12.6102H22.5V16.5873H0.5Z" fill="#3F1E4B"></path></svg>
const appOrigin = window.location.origin;

const WithdrawModal = ({ show, close, withdrawToAccount, openAlert, setAlertText }) => {
    const [submitBtn, setSubmitBtn] = useState(true);
    const [amount, setAmount] = useState('');

    const [withdrawError, setWithdrawError] = useState(false);
    const [withdrawErrorMessage, setWithdrawErrorMessage] = useState({ severity: '', message: '' });

    const [showPinModal, setShowPinModal] = useState(false);
    function openPinModal() { setShowPinModal(true); }
    function closePinModal() { setShowPinModal(false); }

    const [showCreatePinModal, setCreateShowPinModal] = useState(false);
    function openCreatePinModal() { setCreateShowPinModal(true); }
    function closeCreatePinModal() { setCreateShowPinModal(false); }

    let session = Cookies.get(appOrigin);
    if (session) {
        session = JSON.parse(session);
    }

    function cancelWithDraw() {
        setAmount('');
        setWithdrawError(false);
        close();
    }

    async function requestWithdrawal() {
        setSubmitBtn(true);
        if (parseInt(amount) > session.balance) {
            setWithdrawErrorMessage({ severity: 'error', message: `Invalid amount, available balance is NGN ${parseInt(session.balance).toLocaleString()}` });
            setWithdrawError(true);
            return
        }
        if (parseInt(amount) < 50 || !amount) {
            setWithdrawErrorMessage({ severity: 'error', message: `Invalid amount, minimum is NGN 50` });
            setWithdrawError(true);
            return
        }
        if (!session.txpin) {
            openCreatePinModal();
            return
        }
        openPinModal();
    }

    function handleKeyStokes(value) {
        if (!amount && value === '.') return
        setAmount(amount => amount + value)
    }
    function handleBackSpace() {
        setAmount(amount.slice(0, amount.length - 1))
    }

    useEffect(() => {
        if (session) {
            if (amount && amount !== '.') setSubmitBtn(false)
            if (parseInt(amount) > session.balance) {
                setWithdrawErrorMessage({ severity: 'error', message: 'Insufficient balance' });
                setWithdrawError(true);
            } else {
                setWithdrawError(false);
            }
        }
    }, [amount])

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
                { label: '.', value: '.', action: handleKeyStokes },
                { label: 0, value: 0, action: handleKeyStokes },
                { label: backSpace, value: '', action: handleBackSpace }
            ]
        }
    ]
    return (
        <>
            <BaseModal show={show} close={cancelWithDraw}
                title={'Withdraw to bank'}
                subtitle={'Transacftion will be confirmed withen 24 hours.'}
                submitBtn={submitBtn && showPinModal}
                submit={requestWithdrawal}
                btnText={'Request Withdrawal'}
            >

                <WithdrawalWrapper>

                    <WithdrawalAmountTextWrapper>
                        {currencySvg}
                        <WithdrawalAmountText>{amount ? parseInt(amount).toLocaleString() : '0.00'}</WithdrawalAmountText>
                    </WithdrawalAmountTextWrapper>
                    <WithdrawalNumberKeysWrapper>
                        {!withdrawError && <Alert style={{ width: '100%', justifyContent: 'center' }} severity="info">Minimum withdraws is NGN 50 </Alert>}
                        {withdrawError && <Alert style={{ width: '100%', justifyContent: 'center' }} severity={withdrawErrorMessage.severity}>{withdrawErrorMessage.message}</Alert>}

                        {
                            numbersActions.map(({ row }, i) => (
                                <WithdrawalNumberRowOneWrapper key={i}>
                                    <WithdrawalNumberText onClick={() => row[0].action(row[0].value)}>{row[0].label}</WithdrawalNumberText>
                                    <WithdrawalNumberText onClick={() => row[1].action(row[1].value)} >{row[1].label}</WithdrawalNumberText>
                                    <WithdrawalNumberText onClick={() => row[2].action(row[2].value)}>{row[2].label}</WithdrawalNumberText>
                                </WithdrawalNumberRowOneWrapper>
                            ))
                        }

                    </WithdrawalNumberKeysWrapper>
                </WithdrawalWrapper>
            </BaseModal>
            <PinModal show={showPinModal} close={closePinModal} withdrawToAccount={withdrawToAccount} amount={amount} session={session} />
            <CreatePinModal show={showCreatePinModal} close={closeCreatePinModal} withdrawToAccount={withdrawToAccount} amount={amount} session={session} openAlert={openAlert} setAlertText={setAlertText} />
        </>
    )
}

export default WithdrawModal;