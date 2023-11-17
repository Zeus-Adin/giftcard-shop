import Cookies from 'js-cookie'
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const appOrigin = window.location.origin;
const AdminPage = ({ redirect }) => {

    let session = Cookies.get(appOrigin);
    if (session) {
        const { admin, activation } = JSON.parse(session)
        if (!(admin && activation)) redirect('/dashboard');
    }



    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Item>xs=8</Item>
            </Grid>
        </Grid>
    )
}

export default AdminPage;