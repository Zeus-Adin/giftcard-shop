import { Grid } from "@mui/material";
import MobileView from "./mobile";
import DesktopView from "./desktop";
import styled from "styled-components";

import './style.css'

const AppGrid = styled(Grid)(({ }) => ({
    display: 'flex',
    backgroundColor: '',
    position: "relative",
    height: "100vh"
}))

const Register = ({ redirect }) => {

    return (
        <AppGrid  >
            {/* Mobile View */}
            <MobileView redirect={redirect} />

            {/* Desktop View */}
            <DesktopView />

        </AppGrid >
    )
}

export default Register;