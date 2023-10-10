import Landing from "./page/landing/Landing";
import './routes.css'
import Login from "./page/auth/login/Index";
import Register from "./page/auth/register/Index";
import ForgotPassword from "./page/auth/resetpassword/index";
import Home from "./page/home/Index";
import PageNotFound404 from "./page/home/404";
import Steam from "./page/home/cards/steam";

const allowedPath = [
    '/', '/dashboard', '/login', '/register', '/forgotpassword',
    '/steam'
]

const Routes = ({ path, redirect, authed }) => {
    console.log('Current path', path, allowedPath[path], allowedPath)
    return (
        <div className="main">
            {path === "/" && <Landing redirect={redirect} />}
            {path === "/dashboard" && <Home redirect={redirect} authed={authed} />}
            {path === "/login" && <Login redirect={redirect} />}
            {path === "/register" && <Register redirect={redirect} />}
            {path === "/forgotpassword" && <ForgotPassword redirect={redirect} />}
            {path === "/steam" && <Steam redirect={redirect} />}
            {!allowedPath.includes(path) && <PageNotFound404 />}
        </div>
    )
}

export default Routes;