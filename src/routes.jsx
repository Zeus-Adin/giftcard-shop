import { useEffect, useState } from "react";
import Home from "./page/home/Home";
import Landing from "./page/landing/Landing";
import { user } from "./services/user";

import './routes.css'

const Routes = ({ path }) => {
    const [loaded, setLoaded] = useState(true);
    const [isAuthed, setIsAuthed] = useState(false);

    async function init() {
        setIsAuthed(await user.isAuthenticated())
    }

    useEffect(() => {
        if (loaded) {
            init()
            setLoaded(!loaded);
        }
    }, [loaded, isAuthed])

    console.log(isAuthed)

    return (
        <div className="main">
            {path === "/" && isAuthed ? <Home /> : <Landing />}
        </div>
    )
}

export default Routes;