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

export const FormWrap = styled('div')(() => ({
    height: '100%',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: '3.2rem 0',
    display: 'flex',
}))
export const FormHeader = styled('p')(() => ({
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#3F1E4B',
    fontSize: '2.8rem',
    fontFamily: " CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '700'
}))
export const FormContentWrapper = styled('div')(() => ({
    marginBottom: '4rem',
    gap: '0.8rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    display: 'flex',
}))
export const FormInputWrapper = styled('div')(() => ({
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    display: 'flex',
}))
export const FormInputWrap = styled('div')(() => ({
    backgroundColor: '#F2F2F2',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5rem',
    padding: '1.5rem 2rem',
    gap: '0.5rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderImage: 'initial',
    transition: 'all 0.2s ease-in-out 0s',
}))
export const FormInputContent = styled('div')(() => ({
    width: '100%'
}))
export const FormInputLabel = styled('label')(() => ({
    display: 'block',
    color: '#4F4F4F',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.2rem',
    letterSpacing: '0.4',
    willChange: 'color',
    transition: 'color 0.2s ease-in-out 0s',
}))
export const FormInputBox = styled('input')(() => ({
    transition: 'all 0.3s ease-in 0s',
    all: 'unset',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '1.6rem',
    letterSpacing: '0.8rem',
    width: '100%',
    marginTop: '0.4rem',
}))
export const FormToggleButton = styled('button')(() => ({
    all: 'unset',
    cursor: 'pointer',
}))
export const FormSubtext = styled('span')(() => ({
    marginTop: '1.6rem',
    color: '#7165E3',
    textAlign: 'center',
    fontSize: '1.4rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '600'
}))
export const FormButtonWrapper = styled('div')(() => ({
    gap: '1.6rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const FormButton = styled('button')(() => ({
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
    gap: '1.6rem',
    transition: 'all 0.2s ease-in-out 0s',
}))
export const FormButtonText = styled('div')(() => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
    fontWeight: '600'
}))
export const FormButtonSubText = styled('p')(() => ({
    marginTop: '.4rem',
    textAlign: 'center',
    color: '#4F4F4F',
    fontSize: '1.4rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const FormLoginSubTextButton = styled('button')(() => ({
    cursor: 'pointer',
    color: '#7165E3',
    textAlign: 'center',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

export const DesktopHeaderText = styled('p')(()=>({    
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#7165E3',
    fontSize: '2.8rem',
    fontFamily: " CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '700'
}))
export const DesktopWrapper = styled('div')(() => ({
    backgroundImage: 'url(/svg/auth-bg-purple.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))
export const DesktopWrap = styled('div')(() => ({
    position: 'relative'
}))
export const DesktopContentWrapper = styled('div')(() => ({
    opacity: '1',
    transform: 'none',
}))
export const DesktopContentWrap = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '85rem',
    height: '75vh',
    backgroundColor: 'white',
    borderRadius: '2.4rem',
    overflow: 'hidden',
    display: 'flex',
}))
export const DesktopContent = styled('div')(() => ({
    width: '40%',
    height: '100%',
}))
export const DesktopContentInputArea = styled('div')(() => ({
   width:'60%',
   padding:'3.2rem'
}))

export const DesktopSlideImage = styled('img')(({ }) => ({
    width: '100%',
    height: '75vh',
    objectFit: 'cover',
    borderTopLeftRadius: '2.4rem',
    borderBottomLeftRadius: '2.4rem'
}))

export const DesktopFloatImage = styled('image')(() => ({
    position: 'absolute',
    left: '-10%',
    bottom: '-10%',
}))
