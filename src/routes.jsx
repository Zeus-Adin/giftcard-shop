import Landing from "./page/landing/Landing";
import Login from "./page/auth/login/Index";
import Register from "./page/auth/register/Index";
import ForgotPassword from "./page/auth/resetpassword/index";
import Home from "./page/home/Index";
import PageNotFound404 from "./page/home/404";
import Steam from "./page/home/cards/steam";
import Email_Verification from "./page/auth/email-verification/Email-Verification";
import AlertBox from "./component/errorbox/AlertBox";
import { useEffect, useState } from "react";

const allowedPath = [
    '/', '/dashboard', '/login', '/register', '/forgotpassword', '/email-verification',
    '/steam'
]

const Routes = ({ path, redirect, authed }) => {
    const [alertBox, setAlertBox] = useState(false);
    const [alertText, setAlertText] = useState({ title: '', paragraph: '', reason: '' });
    const [activationKey, setActivationKey] = useState('');

    const handleOpenAlertBox = (title, paragraph, reason) => {
        setAlertBox({ title: title, paragraph: paragraph, reason: reason })
        setAlertBox(true)
    }

    const handleCloseAlertBox = () => {
        setAlertBox({ title: '', paragraph: '', reason: '' })
        setAlertBox(false)
        if (alertText.reason === 'success') {
            redirect(`/email-verification?actKey=${activationKey}`)
        }
    }

    useEffect(() => {

    }, [alertBox, alertText])

    return (
        <>
            <div className="main">
                {path === "/" && <Landing redirect={redirect} />}
                {path === "/dashboard" && <Home redirect={redirect} authed={authed} />}
                {path === "/login" && <Login redirect={redirect} />}
                {path === "/register" && <Register redirect={redirect} handleOpenAlertBox={handleOpenAlertBox} setAlertText={setAlertText} setActivationKey={setActivationKey} />}
                {path === "/forgotpassword" && <ForgotPassword redirect={redirect} />}
                {path === "/email-verification" && <Email_Verification redirect={redirect} openAlert={handleOpenAlertBox} setAlertText={setAlertText} />}
                {path === "/steam" && <Steam redirect={redirect} />}
                {!allowedPath.includes(path) && <PageNotFound404 />}
            </div>
            <AlertBox open={alertBox} title={alertText.title} paragraph={alertText.paragraph} reason={alertText.reason} handleClose={handleCloseAlertBox} />
        </>

    )
}

export default Routes;