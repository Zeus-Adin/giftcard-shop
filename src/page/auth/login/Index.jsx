import { Grid } from "@mui/material";
import MobileView from "./mobile";
import styled from "styled-components";

import './style.css'
import DesktopView from "./desktop";

const AppGrid = styled(Grid)(({ }) => ({
    display: 'flex',
    backgroundColor: '',
    position: "relative",
    height: "100vh"
}))

const Login = ({ redirect }) => {

    return (
        <AppGrid  >
            {/* Mobile View */}
            <MobileView redirect={redirect} />

            {/* Desktop View */}
            <DesktopView />

        </AppGrid >
    )
}

export default Login;