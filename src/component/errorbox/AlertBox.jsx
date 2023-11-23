import { Alert, Snackbar } from "@mui/material"
const AlertBox = ({ open, handleClose, title, paragraph, reason }) => {

    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={5000} onClose={handleClose}>
            {reason && <Alert severity={reason} style={{ height: '5rem', width: '25rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem' }}>{title + ' —'} {paragraph}</Alert>}
        </Snackbar>
    )
}

export default AlertBox;