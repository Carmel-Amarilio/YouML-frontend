import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/styles/main.scss'

import { store } from './store/store'

import { Home } from './views/Home'
import { CreateAccount } from './views/CreateAccount'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<CreateAccount />} path="/create-account" />
          </Routes>
        </main>
      </Router >
    </Provider>
  )
}

export default App
