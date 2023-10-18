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
export const MobileHeaderBackButtonWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileHeaderBackButtonContent = styled('div')(() => ({
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '.8rem',
    cursor: 'pointer',
}))
export const MobileHeaderLogo = styled('img')(() => ({
    justifySelf: 'center'
}))

// Content Components
export const Content = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    padding: '0.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
export const ContentWrapper = styled('div')(() => ({
    marginTop: '4.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 15rem)',
}))
export const ContentWrap = styled('div')(() => ({
    gap: '8.0rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: '100%',
    padding: '3.2rem 0',
    display: 'flex'
}))

// Form Content
export const FormWrapper = styled('div')(() => ({
    gap: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const FormHeaderText = styled('p')(() => ({
    color: '#3F1E4B',
    fontSize: '2.8rem',
    fontFamily: "CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '700'
}))
export const FormInputWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    gap: '0.8rem',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const FormInputBoxWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
export const FormInputBoxWrap = styled('div')(() => ({
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
    borderIOmage: 'initial',
    transition: 'all 0.2s ease-in-out 0s',
}))
export const FormInputBox = styled('div')(() => ({
    width: '100%'
}))
export const FormInputLabel = styled('label')(() => ({
    display: 'block',
    color: '#4F4F4F',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.2rem',
    letterSpacing: '0.1rem',
    willChange: 'color',
    transition: 'color 0.2s ease-in-out 0s',
    fontWeight: '700'
}))
export const FormInput = styled('input')(() => ({
    transition: 'all 0.3s ease-in 0s',
    all: 'unset',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '1.6rem',
    letterSpacing: '0.4rem',
    width: '100%',
    marginTop: '.4rem',
}))
export const FormInputButton = styled('button')(() => ({
    all: 'unset',
    cursor: 'pointer',
}))
export const FormInputSubtext = styled('span')(() => ({
    marginTop: '1.6rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '1.4rem',
    textAlign: 'center',
    lineHeight: "1.6rem",
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const FormSubmitButtonWrapper = styled('div')(() => ({
    gap: '1.6rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
}))
export const FormForgotButton = styled('button')(() => ({
    cursor: 'pointer',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontSize: '2rem'
}))
export const FormSubmitButton = styled('button')(() => ({
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
    transition: 'all 0.2s ease-in-out 0s',
}))
export const FormSubmitButtonText = styled('div')(() => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
    fontSize: '2rem',
}))
export const FormSubmitButtonSubText = styled('p')(() => ({
    marginTop: '0.4rem',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '1.4rem',
    textAlign: 'center',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const FormLoginButton = styled('button')(() => ({
    cursor: 'pointer',
    fontFamily: "CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))