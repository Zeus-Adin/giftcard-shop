import { useEffect, useState } from "react";
import Home from "./page/home/Home";
import Landing from "./page/landing/Landing";
import { user } from "./services/user";

import './routes.css'
import Login from "./page/auth/login/Index";

const Routes = ({ path, redirect, authed }) => {
    return (
        <div className="main">
            {path === "/" && <Home redirect={redirect} authed={authed} />}
            {path === "/landing" && <Landing redirect={redirect} />}
            {path === "/login" && <Login redirect={redirect} />}
            {path === "/register" && <Login redirect={redirect} />}
        </div>
    )
}

export default Routes;