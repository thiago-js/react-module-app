import React from 'react'
import { Route } from 'react-router'

import SignUp from './screens/sign-up'
import List from './screens/list'

export const router = () => (
  <div>
    <Route path="/customer/lists" component={List} />
    <Route path="/customer/sign-up" component={SignUp} />
  </div>
)
