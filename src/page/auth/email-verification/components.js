import styled from "styled-components";

// Mobile Header Components
export const MobileHeaderWrapper = styled('div')(() => ({
    padding: '0.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: '0px',
    zIndex: '1',
    backgroundColor: 'white',
}))

export const BackButtonWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const BackButton = styled('div')(() => ({
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '0.8rem',
    cursor: 'pointer',
}))
export const Logo = styled('img')(() => ({
    justifySelf: 'center'
}))

export const ContentWrapper = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    padding: '0.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
export const ContentWrap = styled('div')(() => ({
    marginTop: '4.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 15rem)',
}))

export const FormContent = styled('div')(() => ({
    height: '100%',
    gap: '6.4rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    padding: '3.2rem 0',
    display: 'flex',
}))
export const FormContentInputTextWrapper = styled('div')(() => ({
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const FormContentHeaderText = styled('p')(() => ({
    color: '#3F1E4B',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.6rem',
    fontSize: '2.8rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '700'
}))
export const FormContentInnerWrapper = styled('div')(() => ({
    gap: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const FormContentSubText = styled('p')(() => ({
    width: '80%',
    textAlign: 'center',
    marginTop: '0px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '2.4rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '500'
}))
export const FormContentInputWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
export const FormContentInputWrap = styled('div')(() => ({
    backgroundColor: '#F2F2F2',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: '5rem',
    padding: '1.7rem 2.4rem',
    transition: 'all 0.3s ease-in 0s',
    display: 'flex',
}))
export const FormContentInput = styled('input')(() => ({
    transition: 'all 0.3s ease-in 0s',
    all: 'unset',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '2.4rem',
    letterSpacing: '1.6rem',
    width: '100%',
    textAlign: 'center',
}))

export const VerifyButtonWrapper = styled('div')(() => ({
    gap: '1.6rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

}))
export const VerifyButton = styled('button')(() => ({
    all: 'unset',
    position: 'relative',
    display: 'flex',
    flexShrink: '0',
    flexGrow: '0',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    whiteSpaceCollapse: 'collapse',
    textWrap: 'nowrap',
    gap: "1.6rem",
    transition: "all 0.2s ease-in-out 0s",
}))
export const VerifyButtonTextWrap = styled('div')(() => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
}))

// Desktop Wrapper Components
export const DesktopWrapper = styled('div')(() => ({
    backgroundImage: 'url(/svg/auth-bg-purple.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))
export const DesktopContentWrapper = styled('div')(() => ({
    opacity: '1',
    transform: 'none',
}))
export const DesktopContentWrap = styled('div')(() => ({
    gap: '0.8rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    width: '45rem',
    height: '70vh',
    backgroundColor: 'white',
    borderRadius: '2.4rem',
    padding: '3.2rem 2.4rem',
    display: 'flex',
}))
export const DesktopContentImage = styled('img')(() => ({
    margin: '0 auto',
    width: '60%',
}))

export const ResendVerificationTokenButton = styled('span')(() => ({
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#7165E3'
}))