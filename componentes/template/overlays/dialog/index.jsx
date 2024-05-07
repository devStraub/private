import React from 'react'

// MUI
import { 
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, 
} from '@mui/material'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeDialog } from '../../../../redux/reducers/component/template/overlays/dialog'

export default function Dialogs(){

    const dispatch = useDispatch()

    const show = useSelector(state => state.dialog.show)
    const title = useSelector(state => state.dialog.props.title)
    const content = useSelector(state => state.dialog.props.content)
    const actions = useSelector(state => state.dialog.props.actions)    

    React.useEffect(() => {

    }, [])

    function handleClose(){
        dispatch(closeDialog())
    }    

    return(
        <Dialog
            open={show}
            onClose={handleClose}            
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>
    )
}