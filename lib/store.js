import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './features/themeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeSlice,
    },
  })
}
