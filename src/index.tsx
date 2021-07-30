import React from 'react'
import ReactDOM from 'react-dom'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from 'src/pages/Home'
import Dash from 'src/pages/Dashboard'
import LoginPage from 'src/pages/Login'

import { AuthProvider } from 'src/contexts/AuthContext'
import { TransactionsProvider } from 'src/contexts/TransactionsContext'

import 'src/styles/globals.scss'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <CookiesProvider>
    <TransactionsProvider>
      <AuthProvider>
        <React.StrictMode>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/home" component={Dash} />
              <Route path="/auth0" component={LoginPage} />
            </Switch>
          </BrowserRouter>
        </React.StrictMode>
      </AuthProvider>
    </TransactionsProvider>
  </CookiesProvider>,
  document.getElementById('root')
)

reportWebVitals()
