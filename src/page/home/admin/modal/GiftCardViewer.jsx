import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import BaseModal from '../../../../component/modal/baseModal'
import { Alert, FormLabel, Grid, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { getCardTxImages, updateCardTx } from '../functions';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { TableDataContentImag } from '../../wallet/components';

import axios from 'axios';
import ViewLargImage from './ViewLargImage';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250, }, }, };

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const txStatus = [
    { label: 'Success', value: 'success' },
    { label: 'Pending', value: 'pending' },
    { label: 'Declined', value: 'declined' }
]

const GiftCardViewer = ({ show, close, session, selectCardInfo }) => {
    const theme = useTheme();
    const [status, setStatus] = useState('');
    const [filCounts, setFileCounts] = useState('');
    const [reason, setReason] = useState('');
    const [urls, setUrls] = useState([]);
    const [selectedUrl, setSelectedUrl] = useState('');

    const [alertText, setAlertText] = useState('Note: This modal updates the users balance.');
    const [severity, setSeverity] = useState('info');

    const [showImageLargeView, setShowImageLargeView] = useState(false);
    function openCloseViewLargeImage(url) {
        setSelectedUrl(url)
        setShowImageLargeView(!showImageLargeView);
    }

    async function init() {
        const { success, url, message } = await getCardTxImages(selectCardInfo.cid);
        console.log(success, message, url)
        if (success) {
            console.log(url, selectCardInfo.cid)
            const { data } = await axios.get(`https://${selectCardInfo.cid}.ipfs.w3s.link/${selectCardInfo.txRef}.json`);
            setUrls(data);
        }
    }

    function handleTextChange(e) {
        const { name, value } = e.target;
        if (name === 'reason') setReason(value)
        if (name === 'filecounts') setFileCounts(value)
        if (name === 'status') setStatus(value)
    }

    async function updateCardTxData() {
        const options = {
            adminId: "654e97d013c3feb799557957", adminUsername: 'DaNiel',
            cardTxRef: selectCardInfo.txRef, username: selectCardInfo.userName,
            reason: reason, status: status,
            confirmedFileCount: filCounts
        };
        console.log(options)
        const { cardState, message } = await updateCardTx(options);
        if (cardState) {
            setAlertText(message);
            setSeverity('success');
        } else {
            setAlertText(message);
            setSeverity('error');
        }
    }

    useEffect(() => {
        if (show) {
            console.log('fired', selectCardInfo)
            init();
        }
    }, [show, selectCardInfo])

    console.log(status, reason,)

    return (
        <>
            <BaseModal show={show} close={close}
                title={'Admin CardTx Data Update'}
                subtitle={<Alert variant="outlined" severity={severity} style={{ textAlign: 'justify' }}>{alertText}</Alert>}
                submitBtn={false}
                submit={updateCardTxData}
                btnText={'Update CardTx Data'}
            >
                {/* <FormControl sx={{ m: 1, width: 300, mt: 3 }}> */}
                <ImageList sx={{ width: 300, height: 100 }} cols={3} rowHeight={164}>
                    {urls && urls.map((url, i) => (
                        <ImageListItem key={i}>
                            <TableDataContentImag style={{ width: '100%', height: '100%' }} src={url} onClick={() => openCloseViewLargeImage(url)} />
                        </ImageListItem>
                    ))
                    }
                </ImageList>
                {/* </FormControl> */}
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <Select displayEmpty value={status} onChange={handleTextChange} input={<OutlinedInput />}
                        name='status'
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>CardTx Status</em>
                        </MenuItem>
                        {txStatus.map(({ label, value }, i) => {
                            return (
                                <MenuItem key={i} value={value} style={getStyles(label, value, theme)}>
                                    {label}
                                </MenuItem>
                            )

                        })}
                    </Select>
                    <TextField id="outlined-basic" label="Confirmed Card Images" name='filecounts' onChange={handleTextChange} variant="outlined" style={{ marginTop: '1rem' }} />
                    <TextField multiline id="outlined-basic" label="Reason (optional)" name='reason' onChange={handleTextChange} variant="outlined" style={{ marginTop: '1rem' }} />
                </FormControl>

            </BaseModal>

            {/* ================- */}
            <ViewLargImage show={showImageLargeView} close={openCloseViewLargeImage} url={selectedUrl} />
        </>

    )
}

export default GiftCardViewer;