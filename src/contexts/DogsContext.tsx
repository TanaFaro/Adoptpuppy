import React, { FC, useEffect, useReducer } from 'react'
import { getBreeds } from 'services/getBreeds'
import { Breed, Dog } from 'services/interfaces'
import { INITIAL_STATE } from './constants'
import { reducer } from './reducer'
import { ACTIONS } from './interfaces'

export interface ContextProps {
  breed: string
  breeds: Breed[]
  dogs: Dog[]
  loading: boolean
  error: string | null
  updateBreed: (breed: Breed['name']) => void
  updateBreeds: (breeds: Breed[]) => void
  updateDogs: (dogs: Dog[]) => void
  updateLoading: (loading: boolean) => void
  updateError: (error: string | null) => void
}

const Context = React.createContext({} as ContextProps)

export const DogsContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const { breed, breeds, dogs, loading, error } = state

  const updateBreed = (breed: Breed['name']) => {
    dispatch({ type: ACTIONS.UPDATE_BREED, payload: { breed } })
  }

  const updateBreeds = (breeds: Breed[]) => {
    dispatch({ type: ACTIONS.UPDATE_BREEDS, payload: { breeds } })
  }

  const updateDogs = (dogs: Dog[]) => {
    dispatch({ type: ACTIONS.UPDATE_DOGS, payload: { dogs } })
  }

  const updateLoading = (loading: boolean) => {
    dispatch({ type: ACTIONS.UPDATE_LOADING, payload: { loading } })
  }

  const updateError = (error: string | null) => {
    dispatch({ type: ACTIONS.UPDATE_ERROR, payload: { error } })
  }

  useEffect(() => {
    if (breeds.length === 0) {
      updateLoading(true)
      updateError(null)

      getBreeds()
        .then(updateBreeds)
        .catch((err: Error) => {
          updateError(err.message)
        })
        .finally(() => {
          updateLoading(false)
        })
    }
  }, [breeds.length])

  return (
    <Context.Provider
      value={{
        breed,
        breeds,
        dogs,
        loading,
        error,
        updateBreed,
        updateBreeds,
        updateDogs,
        updateLoading,
        updateError
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
