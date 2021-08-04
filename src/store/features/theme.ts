import { createSlice } from '@reduxjs/toolkit'

interface InfoData {
    themeState: string | any
    titleName: string
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeState: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
        titleName: '',
    } as InfoData,
    reducers: {
        setTheme(state, action) {
            state.themeState = action.payload
        },
        setTitleName(state, action) {
            state.titleName = action.payload
        },
    },
})

export default themeSlice.reducer
export const { setTheme, setTitleName } = themeSlice.actions
