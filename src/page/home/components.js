import { Grid } from "@mui/material";
import styled from "styled-components";

// Content Components
export const ContentWrap = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    padding: '0.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
export const ContentContainer = styled('div')(() => ({
    marginTop: '0.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 15rem)',
}))

// Mobile Header
export const MobileHeader = styled(Grid)(() => ({
    marginBottom: '1.6rem',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileHeaderTextWrap = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const MobileHeaderTextSalutation = styled('p')(() => ({
    color: 'var(--colors-gray300)',
    textAlign: 'left',
    fontFamily: "var(--fonts-bold)",
    lineHeight: 'var(--lineHeights-normal)',
    fontSize: 'var(--fontSizes-5)',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const MobileHeaderTextUser = styled('p')(() => ({
    textAlign: 'left',
    fontFamily: "var(--fonts-bold)",
    lineHeight: 'var(--lineHeights-normal)',
    color: 'var(--colors-blue)',
    fontSize: 'var(--fontSizes-5)',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const MobileHeaderIconWrapper = styled('div')(() => ({
    gap: 'var(--space-3)',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileHeaderIconWrap = styled('div')(() => ({
    height: '48px',
    width: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--colors-gray100)',
    borderRadius: 'var(--radii-3)',
    cursor: 'pointer',
    padding: '1.2rem',
    position: 'relative',
}))
export const MobileHeaderIcon = styled('img')(() => ({
    height: '100%',
    width: '100%',
}))

// Profile and Wallet banners
export const BannerWrapper = styled('div')(() => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const BannerConentWrap = styled('div')(() => ({
    width: '50%',
    position: 'relative',
}))
export const BannerInnerConentWrap = styled('div')(() => ({
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    padding: '2.5rem 2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const BannerWalletText = styled('p')(() => ({
    marginBottom: '6.4rem',
    color: '#FFFFFF',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '.8rem',
    lineHeight: '.8rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const BannerBallanceContentWrap = styled('div')(() => ({
    gap: '.4rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const BannerBallanceHeaderText = styled('p')(() => ({
    color: '#F3F2FD',
    fontSize: '1.2rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const BannerBallanceTextWrapper = styled('div')(() => ({
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const BannerBallanceText = styled('p')(() => ({
    color: '#FFFFFF',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '3rem',
    fontSize: '2.4rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const BannerBallanceUpperText = styled('p')(() => ({
    fontSize: '1.2rem',
    color: 'white',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const BannerBallanceButtonWrapper = styled('div')(() => ({
    marginTop: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const BannerBallanceButton = styled('button')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    height: '6rem',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
}))
export const BannerBallanceButtonTextWrapper = styled('div')(() => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const BannerBallanceButtonText = styled('p')(() => ({
    marginTop: '.4rem',
    color: 'black',
    fontSize: '1.2rem',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

// Profile banner components
export const ProfileBannerWrapper = styled('div')(() => ({
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '.8rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const ProfileBannerImage = styled('img')(() => ({
    height: '4rem'
}))
export const ProfileBannerPercentage = styled('p')(() => ({
    fontSize: '2.8rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const ProfileBannerText = styled('p')(() => ({
    marginBottom: '2rem',
    fontSize: '1.2rem',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    color: '#4F4F4F',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

// Quick actions components
export const QuickActionsWrapper = styled('div')(() => ({
    marginTop: '1.6rem',
    marginBottom: '1.6rem',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const QuickActionsText = styled('p')(() => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const QuickActionsBannerWrapper = styled('div')(() => ({
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const QuickActionsBannerImage = styled('img')(() => ({
    width: "100%"
}))
export const QuickActionsBannerText = styled('p')(() => ({
    position: 'absolute',
    right: '10%',
    top: '30%',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    color: '#7165E3',
    fontSize: '2.4rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const QuickActionsBannerExchangeText = styled('p')(() => ({
    textAlign: 'left',
    fontFamily: "CeraPro-Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    fontSize: '2.4rem',
    letterSpacing: '0.2px',
}))
export const QuickActionsBannerSubText = styled('p')(() => ({
    marginTop: '1rem',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    color: '#4F4F4F',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const QuickActionsBannerTextWrapper = styled('div')(() => ({
    position: 'absolute',
    right: '10%',
    top: '30%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))

// Profile Componetns
// Profile Components
export const ProfileWrapper = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    padding: '.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
export const ProfileWrap = styled('div')(() => ({
    marginTop: '.8rem',
    gridColumn: '2 / 4',
    height: ' calc(100% + 15rem)',
}))
export const ProfileWraps = styled('div')(() => ({
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: '100%',
    display: 'flex',
}))
export const ProfileContents = styled('div')(() => ({
    gap: '2rem',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))

export const Title = styled('p')(() => ({
    textAlign: 'left',
    fontFamily: "CeraPro-Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    color: '#7165E3',
    fontSize: '2.4rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const Container = styled('div')(() => ({
    paddingTop: '2rem',
    paddingBottom: '2rem',
    paddingLeft: '.8rem',
    paddingRight: '.8rem',
    gap: '3.2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const AvatarContainer = styled('div')(() => ({
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const AvatarBox = styled('div')(() => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const AvatarNavButtonImage = styled('img')(() => ({

}))
export const AvatarImage = styled('img')(() => ({
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
}))
export const AvatarTextArea = styled('div')(() => ({
    gap: '.4rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const AvatarText = styled('p')(() => ({
    textAlign: 'left',
    fontFamily: "CeraPro-Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const AvatarName = styled('p')(() => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '.8rem',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const FunctionsContainer = styled('div')(() => ({
    gap:'2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const FunctionsContent = styled('div')(() => ({
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const FunctionsTextImage = styled('div')(() => ({
    gap: '2rem',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const FunctionsText = styled('p')(() => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '.8rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const FunctionsImageWrap = styled('div')(() => ({
    backgroundColor: '#F2F2F2',
    height: '45px',
    width: '45px',
    display: 'flex',
    placeContent: 'center',
    borderRadius: '50%',
    padding: '12px',
}))