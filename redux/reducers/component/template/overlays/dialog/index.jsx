import { createSlice } from '@reduxjs/toolkit'

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        show: false,
        props: {
            title: 'title',
            content: 'content',
            actions: 'actions'
        }
    },
    reducers: {
        showDialog: (state, action) => {
            state.show = true
            state.props = action.payload
        },
        closeDialog: (state, action) => {
            state.show = false  
        },
    }
})

export const { 
    showDialog, 
    closeDialog,
} = dialogSlice.actions

export default dialogSlice.reducer