import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        show: false,
        severity: 'info',
        text: 'mensagem'
    },
    reducers: {
        showMessage: (state, action) => {
            state.show = true
            state.severity = 'info'
            state.text = action.payload
        },
        showMessageSucess: (state, action) => {
            state.show = true
            state.severity = 'success'
            state.text = action.payload            
        },
        showMessageWarning: (state, action) => {
            state.show = true
            state.severity = 'warning'
            state.text = action.payload   
        },
        showMessageError: (state, action) => {
            state.show = true
            state.severity = 'error'
            state.text = action.payload   
        },
        closeMessage: (state, action) => {
            state.show = false
        },
    }
})

export const { 
    showMessage, 
    showMessageSucess, 
    showMessageWarning,
    showMessageError, 
    closeMessage,
} = messageSlice.actions

export default messageSlice.reducer