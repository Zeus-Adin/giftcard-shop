import { Button, CardMedia, Fab, FormControl, FormHelperText, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const DesktopAppBar = styled(Grid)(({ }) => ({
    display: { xs: 'none', md: 'flex' },
    height: "100vh"
    backgroundColor: '',
    position: "relative",
}))


const DesktopView = () => {
    return (
        <AppGrid container xs={12} sx={{ height: '100vw', width: '100vw', backgroundColor: 'red', }}>

        </AppGrid>
    )
}

export default DesktopView;