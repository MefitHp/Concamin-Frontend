import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'

const WithRoute = () => (
    <Router>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Router>
)

ReactDOM.render(<WithRoute />, document.getElementById('root'));