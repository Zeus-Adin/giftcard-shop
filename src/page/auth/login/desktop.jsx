import { Button, CardMedia, Fab, FormControl, FormHelperText, FormLabel, Grid, InputBase, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const DesktopAppBar = styled(Grid)(({ }) => ({
    height: "100vh",
    backgroundColor: '',
    position: "relative",
}))


const DesktopView = () => {
    return (
        <DesktopAppBar container xs={12} sx={{ display: { xs: 'none', md: 'flex' } }}>

        </DesktopAppBar>
    )
}

export default DesktopView;