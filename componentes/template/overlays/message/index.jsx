import React from 'react'

// MUI
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeMessage } from '../../../../redux/reducers/component/template/overlays/message'

export default function Messages() {

    const dispatch = useDispatch();

    const show = useSelector(state => state.message.show)
    const severity = useSelector(state => state.message.severity)
    const text = useSelector(state => state.message.text)

    React.useEffect(() => {

    }, [])

    function handleClose() {
        dispatch(closeMessage())
    }

    return (
        <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {text}
            </Alert>
        </Snackbar>
    )
}