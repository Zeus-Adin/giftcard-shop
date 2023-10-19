import { Alert, AlertTitle, Snackbar } from "@mui/material"

const AlertBox = ({ open, handleClose, title, paragraph, reason }) => {

    return (
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert severity={reason||'info'} >
                <AlertTitle>{title}</AlertTitle>
                {paragraph}
            </Alert>
        </Snackbar>
    )
}

export default AlertBox;