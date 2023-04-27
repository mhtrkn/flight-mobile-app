import { configureStore } from '@reduxjs/toolkit'
import { Counter, Theme, Started, Auth, ReadyApp } from './reducer'
export const store = configureStore({
    reducer: {
        Counter,
        Theme,
        Started,
        Auth,
        ReadyApp
    },
})