import styled from "styled-components";
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