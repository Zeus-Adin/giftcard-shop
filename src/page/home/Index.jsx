import { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Cookies from "js-cookie";

import DesktopNavBar from "../../component/navbar/DesktopNav";
import MobileNavBar from "../../component/navbar/MobileNav";

import DashBoard from "./dashboard/dashboard";
import Activities from "./activities/activities";
import Wallet from "./wallet/wallet";
import Support from "./support/support";
import Profile from "./profile/profile";
import Security from "./security/security";


const MobileAppBar = styled(Grid)(() => (`
    position: relative;
    height: 100vh;
`))
const DesktopAppBar = styled(Grid)(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    display: flex;
`))

const appOrigin = window.location.origin;
const Home = ({ authed, redirect }) => {
    const [selectedNav, setSelectedNav] = useState(0);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const session = Cookies.get(appOrigin);
        if (session) {
            setUserData(JSON.parse(session));
        } else {
            redirect('/login');
        }
    }, [])

    useEffect(() => { }, [selectedNav])
    return (
        <>
            {/* Mobile Left Side Bar */}
            <MobileAppBar sx={{ display: { md: 'flex', lg: 'none', xl: 'none', xs: 'flex', sm: 'flex', justifyContent: 'center' } }}>
                {selectedNav === 0 && <DashBoard redirect={redirect} />}
                {/* {selectedNav === 1 && <Activities redirect={redirect} />} */}
                {/* {selectedNav === 2 && <Wallet redirect={redirect} />} */}
                {/* {selectedNav === 3 && <Support redirect={redirect} />} */}
                {selectedNav === 4 && <Profile redirect={redirect} />}
                {selectedNav === 5 && <Security redirect={redirect} />}
                <MobileNavBar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
            </MobileAppBar >

            {/* Desktop Left Side Bar */}
            < DesktopAppBar sx={{ display: { md: 'none', lg: 'flex', xl: 'flex', xs: 'none', sm: 'none' } }}>
                <DesktopNavBar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
                {selectedNav === 0 && <DashBoard redirect={redirect} />}
                {/* {selectedNav === 1 && <Activities redirect={redirect} />} */}
                {/* {selectedNav === 2 && <Wallet redirect={redirect} />} */}
                {/* {selectedNav === 3 && <Support redirect={redirect} />} */}
                {selectedNav === 4 && <Profile redirect={redirect} />}
                {selectedNav === 5 && <Security redirect={redirect} />}
            </DesktopAppBar >
        </>
    )
}

export default Home;