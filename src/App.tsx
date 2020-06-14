import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Timeline } from './pages/Timeline'
import { Login } from './pages/Login'
import { Auth } from './auth/Auth'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Auth login="/login">
          <Switch>
            <Route exact path="/" component={Timeline}></Route>
          </Switch>
        </Auth>
      </Switch>
    </BrowserRouter>
  )
}
