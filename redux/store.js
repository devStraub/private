import { configureStore } from '@reduxjs/toolkit'

import configReducers from './reducers/config'
import componentReducers from './reducers/component'
import pageReducers from './reducers/pages'

export default configureStore({
    reducer: {
        ...configReducers,
        ...componentReducers,
        ...pageReducers,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})        