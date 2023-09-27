import Home from "./page/home/Home";
import Landing from "./page/landing/Landing";
import './routes.css'
import Login from "./page/auth/login/Index";
import Register from "./page/auth/register/Index";

const Routes = ({ path, redirect, authed }) => {
    return (
        <div className="main">
            {path === "/" && <Landing redirect={redirect} />}
            {path === "/dashboard" && <Home redirect={redirect} authed={authed} />}
            {path === "/login" && <Login redirect={redirect} />}
            {path === "/register" && <Register redirect={redirect} />}
        </div>
    )
}

export default Routes;