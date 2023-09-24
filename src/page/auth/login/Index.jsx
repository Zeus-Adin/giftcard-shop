import { Grid } from "@mui/material";
import MobileView from "./mobile";
import styled from "styled-components";

import './style.css'

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

        </AppGrid >
    )
}

export default Login;