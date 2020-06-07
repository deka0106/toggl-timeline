import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Auth } from './auth/Auth'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Auth login="/login">
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Auth>
      </Switch>
    </BrowserRouter>
  )
}
