import { FC, lazy, Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import Spinner from 'components/Spinner'
import { useDogs } from 'hooks/useDogs'
import SearchForm from './components/Form'

/**
 * Se carga el componente del listado de perros de forma lazy, sólo cuando
 * se haga la primera consulta y se obtengan correctamente los resultados.
 */
const LazyDogList = lazy(() => import('./components/DogList'))

const Home: FC = () => {
  const { dogs, loading, error, refreshDogs } = useDogs()

  const { t } = useTranslation()

  /**
   * Habría sido mejor lanzar el "refreshDogs" aquí para que al pasarle un
   * handler a ul componente hijo por prop, este no se reenderice cuando se
   * reenderice el padre, ya que el handler no va a cambiar nunca en realidad.
   */
  const handleSubmit = useCallback(() => {
    refreshDogs()
  }, [refreshDogs])

  return (
    <section className="App-page">
      <Helmet>
        <title>
          {t('home.title')} | {t('common.title')}
        </title>
      </Helmet>
      <h2>{t('home.title')}</h2>
      <SearchForm onSubmit={handleSubmit} />
      {loading ? (
        <Spinner loading={loading} text={t('home.loadingDogs')} />
      ) : error !== null ? (
        <div>{error}</div>
      ) : null}
      {dogs.length > 0 && (
        <Suspense fallback={<span>{t('common.loading')}</span>}>
          <LazyDogList dogs={dogs} />
        </Suspense>
      )}
    </section>
  )
}

export default Home
