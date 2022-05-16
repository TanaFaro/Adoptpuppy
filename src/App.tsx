import React, { Suspense } from 'react'
import { Route, Switch } from 'wouter'
import { useTranslation } from 'react-i18next'
import { DogsContextProvider } from 'contexts/DogsContext'
import Spinner from 'components/Spinner'
import './App.css'

// Load pages in lazy mode.
const LazyHome = React.lazy(() => import('pages/Home'))
const LazyDogDetail = React.lazy(() => import('pages/DogDetail'))
const LazyErrorPage = React.lazy(() => import('pages/ErrorPage'))

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <h1>{t('common.title')}</h1>
      <section className="App-content">
        <DogsContextProvider>
          <Suspense fallback={<Spinner loading />}>
            <Switch>
              <Route component={LazyHome} path="/" />
              <Route component={LazyDogDetail} path="/dog/:breed/:id/:ext" />
              <Route component={LazyErrorPage} />
            </Switch>
          </Suspense>
        </DogsContextProvider>
      </section>
    </div>
  )
}

export default App
