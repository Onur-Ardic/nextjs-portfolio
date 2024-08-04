import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, option) => {
      state.theme = option.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
