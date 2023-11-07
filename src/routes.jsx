import Landing from "./page/landing/Landing";
import Login from "./page/auth/login/Index";
import Register from "./page/auth/register/Index";
import ForgotPassword from "./page/auth/resetpassword/index";
import Home from "./page/home/Index";
import PageNotFound404 from "./page/home/404";
import Sell from "./page/home/sell/sell";
import Email_Verification from "./page/auth/email-verification/Email-Verification";
import AlertBox from "./component/errorbox/AlertBox";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ManageBanks from "./page/manage_banks";

import BankModal from "./component/modal/BankModal";
import DepositModal from "./component/modal/DepositModal";
import WithdrawModal from "./component/modal/WithdrawModal";
import TradeCard from "./page/home/trade-cards/trade-card";
import SelectCard from "./page/home/cards/selectcard";

const allowedPath = [
    '/', '/login', '/register', '/forgotpassword', '/email-verification',
    '/dashboard',
    '/trade-cards',
    '/cards',
    '/sell',
    '/manage-banks',
]

const appOrigin = window.location.origin;
const Routes = ({ path, redirect, authed }) => {
    const [activationKey, setActivationKey] = useState('');
    const [isActive, setIsActive] = useState(true);

    const [alertBox, setAlertBox] = useState(false);
    const [alertText, setAlertText] = useState({ title: '', paragraph: '', reason: '', sender: '' });

    const [showBankModal, setShowBankModal] = useState(false);
    function openBankModal() { setShowBankModal(true); }
    function closeBankModal() { setShowBankModal(false); }

    const [showDepositModal, setShowDepositModal] = useState(false);
    function openDepositModal() { setShowDepositModal(true); }
    function closeDepositModal() { setShowDepositModal(false); }

    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    function openWithdrawModal() { setShowWithdrawModal(true); }
    function closeWithdrawModal() { setShowWithdrawModal(false); }



    const handleOpenAlertBox = () => {
        setAlertBox(true)
    }
    const handleCloseAlertBox = () => {
        setAlertBox(false)
        setAlertText({ title: '', paragraph: '', reason: '' })
        if (alertText.reason === 'success' && alertText.sender === 'reg') redirect(`/email-verification?actKey=${activationKey}`)
        if (alertText.reason === 'success' && alertText.sender === 'verif') redirect(`/login`)
        if (alertText.reason === 'success' && alertText.sender === 'auth') redirect(`/dashboard`)
        if (alertText.reason === 'success' && alertText.sender === 'sell') redirect(`/dashboard`)
    }
    function handleActivity() {
        const currentValue = Cookies.get(appOrigin);
        if (currentValue) {
            Cookies.set(appOrigin, currentValue, { expires: 0.5 / 48 });
        } else {
            console.log('No session')
        }
    }

    useEffect(() => {
    }, [alertBox, alertText, isActive])

    // Activity tracker
    useEffect(() => {
        const inactivityTimeout = setTimeout(() => {
            setIsActive(false);
        }, 300000); // 5 minutes (adjust this timeout as needed)
        // Set up event listeners to detect user activity
        window.addEventListener('click', handleActivity);
        window.addEventListener('keydown', handleActivity);
        // Clean up event listeners and timeout on unmount
        return () => {
            clearTimeout(inactivityTimeout);
            window.removeEventListener('click', handleActivity);
            window.removeEventListener('keydown', handleActivity);
        };
    }, []);

    return (
        <>
            {path === "/" && <Landing redirect={redirect} />}
            {path === "/login" && <Login redirect={redirect} handleOpenAlertBox={handleOpenAlertBox} setAlertText={setAlertText} />}
            {path === "/register" && <Register redirect={redirect} handleOpenAlertBox={handleOpenAlertBox} setAlertText={setAlertText} setActivationKey={setActivationKey} />}
            {path === "/forgot-password" && <ForgotPassword redirect={redirect} />}
            {path === "/email-verification" && <Email_Verification redirect={redirect} openAlert={handleOpenAlertBox} setAlertText={setAlertText} />}

            {path === "/dashboard" && <Home redirect={redirect} authed={authed} />}
            {path === '/cards' && <SelectCard redirect={redirect} authed={authed} />}
            {path === '/trade-cards' && <TradeCard redirect={redirect} authed={authed} />}
            {path === "/sell" && <Sell redirect={redirect} openAlert={handleOpenAlertBox} setAlertText={setAlertText} />}
            {path === "/manage-banks" && <ManageBanks redirect={redirect} openBankModal={openBankModal} />}
            {!allowedPath.includes(path) && <PageNotFound404 />}

            <AlertBox open={alertBox} title={alertText.title} paragraph={alertText.paragraph} reason={alertText.reason} handleClose={handleCloseAlertBox} />
            <BankModal show={showBankModal} close={closeBankModal} redirect={redirect} openAlert={handleOpenAlertBox} setAlertText={setAlertText} />
            <DepositModal show={showDepositModal} close={closeDepositModal} redirect={redirect} />
            <WithdrawModal show={showWithdrawModal} close={closeWithdrawModal} redirect={redirect} />
        </>

    )
}

export default Routes;