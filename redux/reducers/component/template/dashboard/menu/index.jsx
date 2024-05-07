import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'message',
    initialState: {
        drawerOpen: false,
    },
    reducers: {
        setDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        },
    }
})

export const {
    setDrawerOpen,
} = menuSlice.actions

export default menuSlice.reducer