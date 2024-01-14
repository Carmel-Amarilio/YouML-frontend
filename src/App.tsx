import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/styles/main.scss'

import { store } from './store/store'

import { Home } from './views/Home'
import { CreateAccount } from './views/CreateAccount'
import { TopCreators } from './views/TopCreators'
import { BrowseMarketplace } from './views/BrowseMarketplace'
import { CreatorPage } from './views/CreatorPage'

export function App() : React.ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<CreateAccount />} path="/create-account" />
            <Route element={<TopCreators />} path="/top-creators" />
            <Route element={<BrowseMarketplace />} path="/marketplace" />
            <Route element={<CreatorPage />} path="/creator/:creatorId" />
          </Routes>
        </main>
      </Router >
    </Provider>
  )
}

export default App
