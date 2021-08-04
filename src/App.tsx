import { MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import { MenuBar } from './components/menuBar/MenuBar'
import { createTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { VerticalMenuBar } from './components/menuBar/VerticalMenuBar'
import { MenuIndex } from './components/menuBar/MenuIndex'
import { useSelector } from 'react-redux'
import { RootState } from './store'
function App() {
    const { themeState } = useSelector((state: RootState) => state.theme)
    const theme = createTheme({
        palette: {
            type: themeState,
            primary: {
                // main: themeState === 'light' ? '#001a78' : '#5f81fa',
                main: '#5f81fa',
            },
            secondary: {
                main: '#f50057',
            },
        },
    })
    return (
        <>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <MenuIndex />
            </MuiThemeProvider>
        </>
    )
}

export default App
