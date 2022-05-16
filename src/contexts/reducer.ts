import { INITIAL_STATE } from './constants'
import { Action, State, ACTIONS } from './interfaces'

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.UPDATE_BREED:
      return {
        ...state,
        breed: action.payload.breed || INITIAL_STATE.breed
      }
    case ACTIONS.UPDATE_BREEDS:
      return {
        ...state,
        breeds: action.payload.breeds || INITIAL_STATE.breeds
      }
    case ACTIONS.UPDATE_DOGS:
      return {
        ...state,
        dogs: action.payload.dogs || INITIAL_STATE.dogs
      }
    case ACTIONS.UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload.loading || false
      }
    case ACTIONS.UPDATE_ERROR:
      return {
        ...state,
        error: action.payload.error || INITIAL_STATE.error
      }
    default:
      return state
  }
}
