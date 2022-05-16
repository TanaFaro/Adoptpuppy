import { Breed, Dog } from 'services/interfaces'

export enum ACTIONS {
  UPDATE_BREED = 'update_breed',
  UPDATE_BREEDS = 'update_breeds',
  UPDATE_DOGS = 'update_dogs',
  UPDATE_LOADING = 'update_loading',
  UPDATE_ERROR = 'update_error'
}

export interface State {
  breed: string
  breeds: Breed[]
  dogs: Dog[]
  loading: boolean
  error: string | null
}

export interface Action {
  type: ACTIONS
  payload: {
    breed?: string
    breeds?: Breed[]
    dogs?: Dog[]
    loading?: boolean
    error?: string | null
  }
}
