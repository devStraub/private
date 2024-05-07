import { createSlice } from '@reduxjs/toolkit'

export const mainHeaderSlice = createSlice({
    name: 'message',
    initialState: {
        breadcrumbs: 'Fornecedores > Cadastro',
        pageTitle: 'Título da Pagina',
        breadcrumbsLine: false,
    },
    reducers: {
        setProperties: (state, action) => {
            return { ...state, ...action.payload };
        },
    }
})

export const {
    setProperties,
} = mainHeaderSlice.actions

export default mainHeaderSlice.reducer