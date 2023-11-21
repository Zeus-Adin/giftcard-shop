import Backdrop from '@mui/material/Backdrop';
import { TableDataContentImag } from '../../wallet/components';

export default function ViewLargImage({ show, close, url }) {
    return (
        <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 101 }} open={show} onClick={close}>
                <TableDataContentImag style={{ width: '50rem', height: '50rem', position: 'absolute', top: '5%', objectFit: 'cover', backgroundColor:'transparent' }} src={url} />
            </Backdrop>
        </div>
    );
}