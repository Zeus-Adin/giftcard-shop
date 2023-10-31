import Landing from "./page/landing/Landing";
import Login from "./page/auth/login/Index";
import Register from "./page/auth/register/Index";
import ForgotPassword from "./page/auth/resetpassword/index";
import Home from "./page/home/Index";
import PageNotFound404 from "./page/home/404";
import Sell from "./page/home/cards/sell";
import Email_Verification from "./page/auth/email-verification/Email-Verification";
import AlertBox from "./component/errorbox/AlertBox";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const allowedPath = [
    '/', '/dashboard', '/login', '/register', '/forgotpassword', '/email-verification',
    '/sell'
]

const appOrigin = window.location.origin;
const Routes = ({ path, redirect, authed }) => {
    const [alertBox, setAlertBox] = useState(false);
    const [activationKey, setActivationKey] = useState('');
    const [alertText, setAlertText] = useState({ title: '', paragraph: '', reason: '', sender: '' });

    const [isActive, setIsActive] = useState(true);

    const handleOpenAlertBox = () => {
        setAlertBox(true)
    }
    const handleCloseAlertBox = () => {
        setAlertText({ title: '', paragraph: '', reason: '' })
        setAlertBox(false)
        if (alertText.reason === 'success' && alertText.sender === 'reg') redirect(`/email-verification?actKey=${activationKey}`)
        if (alertText.reason === 'success' && alertText.sender === 'verif') redirect(`/login`)
        if (alertText.reason === 'success' && alertText.sender === 'auth') redirect(`/dashboard`)
    }
    function handleActivity() {
        const currentValue = Cookies.get(appOrigin);
        if (currentValue) {
            Cookies.set(appOrigin, currentValue, { expires: 0.5 / 48 });
        }
    }

    useEffect(() => {
        console.log(alertBox, alertText)
    }, [alertBox, alertText])

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
            {path === "/dashboard" && <Home redirect={redirect} authed={authed} />}
            {path === "/login" && <Login redirect={redirect} handleOpenAlertBox={handleOpenAlertBox} setAlertText={setAlertText} isActive={isActive} />}
            {path === "/register" && <Register redirect={redirect} handleOpenAlertBox={handleOpenAlertBox} setAlertText={setAlertText} setActivationKey={setActivationKey} />}
            {path === "/forgot-password" && <ForgotPassword redirect={redirect} />}
            {path === "/email-verification" && <Email_Verification redirect={redirect} openAlert={handleOpenAlertBox} setAlertText={setAlertText} />}
            {path === "/sell" && <Sell redirect={redirect} />}
            {!allowedPath.includes(path) && <PageNotFound404 />}
            <AlertBox open={alertBox} title={alertText.title} paragraph={alertText.paragraph} reason={alertText.reason} handleClose={handleCloseAlertBox} />
        </>

    )
}

export default Routes;