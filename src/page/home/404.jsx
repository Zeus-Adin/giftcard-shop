import styled from "styled-components";

const PageNotFound404 = () => {

    const Body = styled('div')(({ }) => ({
        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }))
    const Wrap404 = styled('h1')(({ }) => ({
        display: 'inline-block',
        margin: '0',
        marginRight: '20px',
        padding: '0 23px 0 0',
        fontSize: '24px',
        fontWeight: '500',
        verticalAlign: 'top',
        lineHeight: '49px',
        borderRight: '1px solid rgba(255, 255, 255, .3)',
        boxSizing: 'inherit',
        textAlign: 'center'
    }))
    const SubTextWrap = styled('div')(({ }) => ({
        display: 'inline-block',
        textAlign: 'left',
        lineHeight: '49px',
        height: '49px',
        verticalAlign: 'middle',
    }))
    const SubText = styled('h2')(({ }) => ({
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '49px',
        margin: '0',
        padding: '0',
    }))


    return (
        <Body>
            <div>
                <Wrap404>404</Wrap404>
                <SubTextWrap><SubText>This page could not be found.</SubText></SubTextWrap>
            </div>
        </Body>
    )
}

export default PageNotFound404;