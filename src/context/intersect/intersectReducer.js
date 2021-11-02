import {SET_CURRENT, CLEAR_CURRENT} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        [action.payload.target]: action.payload.data,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        [action.payload.target]: null,
      }
    default:
      return state
  }
}
