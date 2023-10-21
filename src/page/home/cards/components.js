import styled from "styled-components";

// Mobile Header
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
export const MobileHeaderContent = styled('div')(() => ({
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const MobileHeaderBackBottunWrap = styled('div')(() => ({
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: '.8rem',
    cursor: 'pointer',
}))
export const MobileHeaderBackBottonText = styled('div')(() => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '.8rem',
    textAlign: 'center',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))

// Content
export const ContentWrapper = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    padding: '.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(2, minmax(min-content, 20rem)) 1fr',
    position: 'relative',
}))
export const ContentWrap = styled('div')(() => ({
    marginTop: '4.8rem',
    gridColumn: '2 / 4',
    height: 'calc(100% + 15rem)',
}))
export const Content = styled('div')(() => ({
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    display: 'flex',
}))
export const Contents = styled('div')(() => ({
    opacity: '1',
    visibility: 'visible',
    transform: 'none',
    position: 'absolute',
    width: '100%',
    top: '0px',
    left: '0px',
}))
export const ContentsHolder = styled('div')(() => ({
    marginTop: '2.4rem',
    gap: '2rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const CurrencySelect = styled('div')(() => ({
    maxWidth: '45rem'
}))
export const CurrencySelectButton = styled('button')(() => ({
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.6rem',
    lineHeight: '1',
    height: '35px',
    backgroundColor: '#F2F2F2',
    color: 'black',
    cursor: 'pointer',
    width: '-webkit-fill-available',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    letterSpacing: '0.4px',
    fontWeight: '700px',
    borderRadius: '4rem',
    padding: '1.6rem 2rem',
    gap: '5px',
}))
export const CurrencySelectButtonImage = styled('img')(() => ({
    width: '1.6rem'
}))

export const CurrencyDivivder = styled('div')(() => ({
    marginTop: '0px',
    marginBottom: '0px',
    gap: '1.6rem',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const CurrencyText = styled('p')(() => ({
    whiteSpace: 'nowrap',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '.8rem',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const CurrencyLine = styled('div')(() => ({
    width: '100%',
    height: '1px',
    backgroundColor: '#EBE9FB',
}))

export const CardTypeWrapper = styled('div')(() => ({
    flexWrap: 'wrap',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const CardTypeContentWrapperActive = styled('div')(() => ({
    border: '1px solid #7165E3',
    backgroundColor: '#EBE9FB',
    gap: '2rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12rem',
    height: '8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    borderRadius: '.8rem',
    paddingLeft: '.4rem',
    paddingRight: '.4rem',
    display: 'flex',
}))
export const CardTypeContentWrapperInActive = styled('div')(() => ({
    gap: '2rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12rem',
    height: '8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out 0s',
    borderRadius: '.8rem',
    backgroundColor: '#F2F2F2',
    border: '1px solid transparent',
    paddingLeft: '.4rem',
    paddingRight: '.4rem',
    display: 'flex',
}))
export const CardTypeContenText = styled('p')(() => ({
    fontSize: '.8rem',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
    fontWeight: '700'
}))

export const CardSalesWrapper = styled('div')(() => ({
    maxWidth: '45rem',
    gap: '1.6rem',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
}))
export const CardSalesInputArea = styled('div')(() => ({
    gap: '1.6rem',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const CardSalesInputWrapper = styled('div')(() => ({
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    display: 'flex',
}))
export const CardSalesInputWrap = styled('div')(() => ({
    backgroundColor: '#F2F2F2',
    width: '100%',
    borderRadius: '5rem',
    padding: '1.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid transparent',
    transition: 'all 0.2s ease-in-out 0s',
}))
export const CardSalesInputContents = styled('div')(() => ({
    width: '100%'
}))
export const CardSalesInputContentsLabel = styled('label')(() => ({
    display: 'block',
    color: '#4F4F4F',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    fontSize: '.8rem',
    letterSpacing: '0.8rem)',
    willChange: 'color',
    transition: 'color 0.2s ease-in-out 0s',
}))
export const CardSalesInputContentsInput = styled('input')(() => ({
    transition: 'all 0.3s ease-in 0s',
    all: 'unset',
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    color: '#4F4F4F',
    fontSize: '1.6rem',
    letterSpacing: '.2rem',
    fontWeight:'500',
    width: '100%',
    marginTop: '.8rem',
}))

export const CardSalesCalculator = styled('div')(() => ({
    marginTop: '2.5rem',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
}))
export const CardSalesCalculatorText = styled('p')(() => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'left',
    fontSize: '1rem',
    lineHeight: '1.6rem',
    letterSpacing: '1px',
    textDecoration: 'none',
    fontWeight:'600',
}))
export const CardSalesCalculatorBalanceWrapper = styled('div')(() => ({
    gap: '.8rem',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
}))
export const CardSalesCalculatorBalanceText = styled('p')(() => ({
    marginTop:'.8rem',
    color: '#EBE9FB',
    fontSize: '2.8rem',
    textAlign: 'left',
    fontFamily: "CeraPro-Bold,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    lineHeight: '1.6rem',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))
export const CardSalesCalculatorBalanceSubText = styled('p')(() => ({
    fontFamily: "CeraPro-Medium,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    textAlign: 'center',
    fontSize:'1.4rem',
    lineHeight: '1.6rem',
    color: '#7165E3',
    letterSpacing: '0.2px',
    textDecoration: 'none',
}))