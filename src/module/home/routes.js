import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screens/home'

export const router = () => (
  <Routes>
    <Route path="/" component={Home} />
    <Route path='*' element={<h1>Not Found</h1>} />
  </Routes>
)
