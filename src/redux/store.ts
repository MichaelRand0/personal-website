import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './features/modalSlice'
import { githubAPI } from './api/github.api'

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    [githubAPI.reducerPath]: githubAPI.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch