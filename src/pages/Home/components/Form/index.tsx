import { BaseSyntheticEvent, FC, FormEvent, FormEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'components/Button'
import Spinner from 'components/Spinner'
import { useDogs } from 'hooks/useDogs'
interface Props {
  onSubmit: () => void
}

const SearchForm: FC<Props> = ({ onSubmit }) => {
  const { breed, breeds, loading, error, updateBreed } = useDogs()

  const { t } = useTranslation()

  const handleChange = (event: BaseSyntheticEvent) => {
    updateBreed(event.target.value)
  }

  const handleSubmit: FormEventHandler = (event: FormEvent) => {
    event.preventDefault()

    onSubmit()
  }

  return loading ? (
    <Spinner loading={loading} text={t('home.loadingBreeds')} />
  ) : error !== null ? (
    <div>{error}</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        <select value={breed} onChange={handleChange}>
          <option disabled value="-1">
            {t('home.selectBreed')}
          </option>
          {breeds.map((b) => (
            <option key={b.name}>{b.name}</option>
          ))}
        </select>
      </label>
      <Button>{t('home.search')}</Button>
    </form>
  )
}

export default SearchForm
