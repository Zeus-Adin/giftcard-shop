import styled from "styled-components";
import MobileView from "./mobile";
import DesktopView from "./desktop";


const AppBar = styled('div')(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
}))

const ForgotPassword = ({ redirect }) => {
    return (
        <AppBar>
            {/* Mobile View */}
            <MobileView />

            {/* Desktop View */}
            <DesktopView />
        </AppBar>
    )
}

export default ForgotPassword;