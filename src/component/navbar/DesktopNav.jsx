import { Grid } from "@mui/material";
import {
    NavContent,
    NavLogo, NavLogoImage, NavLogoWrapper, NavWrap, NavWrapper,
    NavContentWrapper, NavContentWrap, NavWrapContent, NavImage, NavImageText,
} from "./components";
import { logUserOut } from "../../page/auth/login/functions";

const DesktopNavBar = ({ selectedNav, setSelectedNav }) => {

    function handleSelectedNave(i) {
        setSelectedNav(i)
    }

    const navImages = [
        { label: 'Home', action: handleSelectedNave, active: '/svg/home-active.svg', nonactive: '/svg/home.svg' },
        { label: 'Activities', action: handleSelectedNave, active: '/svg/activities-active.svg', nonactive: '/svg/activities.svg' },
        { label: 'Wallet', action: handleSelectedNave, active: '/svg/wallet-active.svg', nonactive: '/svg/wallet.svg' },
        { label: 'Support', action: handleSelectedNave, active: '/svg/support-active.svg', nonactive: '/svg/support.svg' },
        { label: 'Profile', action: handleSelectedNave, active: '/svg/profile-active.svg', nonactive: '/svg/profile.svg' },
        { label: 'Security', action: handleSelectedNave, active: '/svg/security.svg', nonactive: '/svg/security.svg' },
        { label: 'Logout', action: logUserOut, active: '/svg/logout.svg', nonactive: '/svg/logout.svg' }
    ]

    return (
        <Grid sx={{ display: { md: 'none', lg: 'flex', xl: 'flex', xs: 'none', sm: 'none' } }}>
            <NavWrapper>
                <NavWrap>
                    <NavContent>

                        <NavLogoWrapper>
                            <NavLogoImage src="/svg/ridima-logo.svg" />
                            <NavLogo src="/svg/collapse.svg" />
                        </NavLogoWrapper>

                        {navImages.map(({ label, action, active, nonactive }, i) => (
                            <NavContentWrapper key={i}>
                                <NavContentWrap active={selectedNav === i ? '#7165E3' : 'rgb(248, 247, 254)'}>
                                    <NavWrapContent onClick={() => action(i)}>
                                        <NavImage src={selectedNav === i ? active : nonactive} />
                                        <NavImageText active={selectedNav === i ? '#FFFFFF' : '#7165E3'}>{label}</NavImageText>
                                    </NavWrapContent>
                                </NavContentWrap>
                            </NavContentWrapper>
                        ))}

                    </NavContent>
                </NavWrap>
            </NavWrapper>
        </Grid>
    )
}

export default DesktopNavBar;