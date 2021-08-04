import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './store'
import { EnglishPage } from './pages/english/EnglishPage'
import { FormPage } from './pages/form/FormPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
            <Switch>
                <Route exact path="/" component={EnglishPage} />
                <Route exact path="/form" component={FormPage} />
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
