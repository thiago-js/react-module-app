import React from 'react'
import { List, SignUp } from '../module/customer'
import { Home } from '../module/home'
import { Switch, Route } from 'react-router'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path="/customer/lists" component={List} />
    <Route path="/customer/sign-up" component={SignUp} />
  </Switch>
)

export default Routes
