import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { App } from 'src/pages/Home'
import { Dash }from 'src/pages/Dashboard'

import { GlobalStyle } from './globalStyles'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/dashboard" component={Dash} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
