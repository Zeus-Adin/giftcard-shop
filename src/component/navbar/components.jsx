import styled from "styled-components";

// Desktop
export const NavWrapper = styled('div')(() => (`
    width: 250px;
    overflow: auto;
    height: 100vh;
    background-color: rgb(248, 247, 254);
    transition: width 0.3s ease-in-out 0s;
`))
export const NavWrap = styled('div')(() => (`
    padding: 1.6rem;
    height: 100%;
    gap: 2.4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const NavContent = styled('div')(() => (`
    gap: .4rem;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))

export const NavLogoWrapper = styled('div')(() => (`
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    margin-bottom: 4.8rem;
    display: flex;
`))
export const NavLogoImage = styled('img')(() => (`
    height: 1.8rem;
`))
export const NavLogo = styled('img')(() => (`
    cursor: pointer;
    height: 1.8rem;
`))

export const NavContentWrapper = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    flex-wrap: nowrap;
    display: flex;
`))
export const NavContentWrap = styled('div')(({ active }) => (`
    background-color: ${active};
    border-radius: 6rem;
    padding: 1rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    width: 100%;
    transition: all 0.2s ease-in-out 0s;
    display: flex;
`))
export const NavWrapContent = styled('div')(() => (`
    gap: 1.8rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const NavImage = styled('img')(() => (`
    height: 2rem;
    transition: all 0.2s ease-in-out 0s;
    transform: unset;
`))
export const NavImageText = styled('p')(({ active }) => (`
    width: 100%;
    white-space: nowrap;
    color: ${active};
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    line-height: 1.6rem;
    letter-spacing: 0.2px;
    text-decoration: none;
`))

// Mobile
export const MobileNavWrapper = styled('div')(() => (`
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    padding: 2.4rem;
    background-color: white;
    border-top: 1px solid rgba(64, 0, 255, 0.2); 
`))
export const MobileNavWrap = styled('div')(() => (`
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const MobileNavContentWrap = styled('div')(() => (`
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
    display: flex;
`))
export const MobileNavContent = styled('div')(() => (`
    gap: .4rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    display: flex;
`))
export const MobileNavContentText = styled('p')(({ active }) => (`
    font-family: CeraPro-Medium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.6rem;
    color: ${active};
    letter-spacing: 0.2px;
    text-decoration: none;
`))
export const MobileNavContentImage = styled('img')(({ active }) => (`
    height: 2.2rem;
    width: 2.2rem;
    opacity: 0.5;
`))