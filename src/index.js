import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import App from './App'
import './styles/style.scss'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const store = createStore(rootReducer, composeWithDevTools())

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: '10px',
            },
        },
    },
})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)

