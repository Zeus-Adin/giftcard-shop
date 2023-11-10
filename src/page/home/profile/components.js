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
    gap: '2rem',
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

export const DesktopAvatarNav = styled('div')(() => (`
    margin-left: 8.0rem;
    cursor: pointer;
    background-color: #7165E3;
    border-radius: 1.8rem;
    padding: .8rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const DesktopAvatarNavText = styled('p')(() => (`
    color: #FFFFFF;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 1rem;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const EdithHeaderWrapper = styled.div(() => (`
    padding: .8rem;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 1;
    background-color: var(--colors-white);
`))

export const EdithHeaderBackButtonWrapper = styled.div(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))

export const EdithHeaderBackButton = styled.div(() => (`
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: .8rem;
    cursor: pointer;
`))

export const EdithHeaderText = styled.p(() => (`
    text-align: center;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

// =============
export const DesktopEdithHeaderWrapper = styled.div(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))

export const DesktopEdithHeaderBackButtonWrapper = styled.div(() => (`
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))

export const DesktopEdithHeaderBackButtonText = styled.div(() => (`
    transition: all 0.3s ease 0s;
    cursor: pointer;
    color: #BDBDBD;
    text-align: left;
    font-family: CeraPro-Bold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

export const InputWrappers = styled.div(() => (`
    gap: 1.2rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
    margin-top: 3rem;
`))

export const InputAvatarWrappers = styled.div(() => (`
    position: relative;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))

export const InputAvatar = styled.div(() => (`
    position: relative;
`))

export const InputAvatarBadge = styled.img(() => (`
    position: absolute;
    left: 70%;
    bottom: 0%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
`))

export const InputAvatarImage = styled.img(() => (`
    object-fit: cover;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    overflow: hidden;
`))

export const InputBoxWrapper = styled.div(() => (`
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
`))

export const InputBoxArea = styled.div(() => (`
    background-color: #F2F2F2;
    width: 100%;
    border-radius: 5rem;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out 0s;
`))

export const InputBox = styled.div(() => (`
    width: 100%;
`))

export const InputLabel = styled.label(() => (`
    display: block;
    color: #4F4F4F;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1rem;
    letter-spacing: .4px;
    will-change: color;
    transition: color 0.2s ease-in-out
`))

export const Input = styled.input(() => (`
    transition: all 0.3s ease-in 0s;
    all: unset;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #4F4F4F;
    font-size: 1.6rem;
    letter-spacing: .4rem;
    width: 100%;
`))

export const UpdateBtn = styled.button(() => (`
    margin-top: 3.2rem;
    all: unset;
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    gap: 1.6rem;
    white-space: nowrap;
    transition: all 0.2s ease-in-out 0s;    
`))

export const UpdateBtnText = styled.div(() => (`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1.6rem;    
`))