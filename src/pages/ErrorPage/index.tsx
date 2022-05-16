import * as React from 'react'
import Button from 'components/Button'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const ErrorPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="App-page">
      <Helmet>
        <title>
          {t('errorPage.title')} | {t('common.title')}
        </title>
      </Helmet>
      <h2>{t('errorPage.title')}</h2>
      <div className="App-back">
        <Button href="/">{t('dogDetail.backToHome')}</Button>
      </div>
    </section>
  )
}

export default ErrorPage
