import { Button, CardMedia, Fab, FormControl, FormHelperText, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const DesktopAppBar = styled(Grid)(({ }) => ({
    display: 'flex',
    backgroundColor: '',
    position: "relative",
    height: "100vh"
}))
const DesktopLogoGrid = styled(Grid)(({ }) => ({
    padding: "var(--space - 2)",
    alignItems: "center",
    width: "100%",
    top: "0px",
    zIndex: 1,
    backgroundColor: "var(--colors-white)",
    display: 'flex'
}))
const DesktopBackButton = styled(Button)(({ }) => ({
    height: "4rem",
    width: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#BDBDBD",
    borderRadius: "10px",
    cursor: "pointer",
}))
const DesktopInputWrapper = styled('div')(({ }) => ({
    backgroundColor: "#F2F2F2",
    height: "80px",
    width: "50rem",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    borderRadius: "5rem",
    // padding: "1.5rem 2rem",
    display: "flex",
    gap: "0.5rem",
    border: "1px solid transparent",
    transition: "all 0.2s ease-in-out 0s",
    margin: "0",
    padding: "0",
    boxSizing: "inherit"
}))
const DesktopLogoHeaderWrapper = styled(Typography)(({ }) => ({
    color: "var(--colors-purple)",
    fontFamily: "var(--fonts-bold)",
    textAlign: "center",
    lineHeight: "var(--lineHeights-normal)",
    fontSize: "var(--fontSizes-6)",
    letterSpacing: "0.2px",
    textDecoration: "none",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
}))
const DesktopSubText = styled(Grid)(({ }) => ({
    marginTop: "var(--space-3)",
    fontFamily: "var(--fonts-medium)",
    fontSize: "var(--fontSizes-2)",
    textAlign: "center",
    lineHeight: "var(--lineHeights-normal)",
    color: "#7165E3",
    letterSpacing: "0.2px",
    textDecoration: "none"
}))

const DesktopView = () => {
    return (
        <AppGrid container xs={12} sx={{ height: '100vw', width: '100vw', backgroundColor: 'red', display: { xs: 'none', md: 'flex' } }}>

        </AppGrid>
    )
}

export default DesktopView;