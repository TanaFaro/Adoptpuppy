import { useContext } from 'react'
import DogsContext from 'contexts/DogsContext'
import { Breed, Dog } from 'services/interfaces'
import { getDogs } from 'services/getDogs'

export interface DogsHook {
  breed: string
  breeds: Breed[]
  dogs: Dog[]
  loading: boolean
  error: string | null
  updateBreed: (breed: Breed['name']) => void
  refreshDogs: () => void
}

export const useDogs = (): DogsHook => {
  const {
    breed,
    breeds,
    dogs,
    loading,
    error,
    updateBreed,
    updateDogs,
    updateLoading,
    updateError
  } = useContext(DogsContext)

  const refreshDogs = () => {
    updateLoading(true)
    updateError(null)

    getDogs(breed)
      .then(updateDogs)
      .catch((err: Error) => {
        updateError(err.message)
      })
      .finally(() => {
        updateLoading(false)
      })
  }

  return {
    breed,
    breeds,
    dogs,
    loading,
    error,
    updateBreed,
    refreshDogs
  }
}
