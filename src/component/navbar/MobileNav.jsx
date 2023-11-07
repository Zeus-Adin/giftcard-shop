import { Grid } from "@mui/material";
import { MobileNavContent, MobileNavContentImage, MobileNavContentText, MobileNavContentWrap, MobileNavWrap, MobileNavWrapper, NavContent } from "./components";
import styled from "styled-components";

const MobileNavBar = ({ selectedNav, setSelectedNav }) => {

    function handleSelectedNave(i) {
        setSelectedNav(i)
    }

    const active = <svg width="5" height="6" viewBox="0 0 5 6" fill="none"><circle cx="2.5" cy="3" r="2.5" fill="#7165E3"></circle></svg>

    const navImages = [
        { label: 'Home', action: handleSelectedNave, active: active, nonactive: '/svg/home.svg' },
        { label: 'Activities', action: handleSelectedNave, active: active, nonactive: '/svg/activities.svg' },
        { label: 'Wallet', action: handleSelectedNave, active: active, nonactive: '/svg/wallet.svg' },
        { label: 'Support', action: handleSelectedNave, active: active, nonactive: '/svg/support.svg' },
        { label: 'Profile', action: handleSelectedNave, active: active, nonactive: '/svg/profile.svg' }
    ]
    return (
        <Grid sx={{ display: { md: 'flex', lg: 'none', xl: 'none', xs: 'flex', sm: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
            <MobileNavWrapper>
                <MobileNavWrap>
                    {navImages.map(({ label, action, nonactive }, i) => (
                        <>
                            {selectedNav === i
                                ? <MobileNavContentWrap>
                                    <MobileNavContent>
                                        {active}
                                        <MobileNavContentText>{label}</MobileNavContentText>
                                    </MobileNavContent>
                                </MobileNavContentWrap>
                                : <NavContent onClick={() => action(i)}><MobileNavContentImage src={nonactive} /></NavContent>
                            }
                        </>
                    ))}
                </MobileNavWrap>
            </MobileNavWrapper>
        </Grid>
    )
}

export default MobileNavBar;