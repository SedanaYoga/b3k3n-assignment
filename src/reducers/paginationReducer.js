import { useReducer } from 'react'

export function usePaginationReducer() {
  const initialState = {
    currentPage: 1,
    error: '',
  }
  const paginationReducer = (state, action) => {
    switch (action.type) {
      case 'PAGINATION_SET_SUCCESS':
        return {
          ...state,
          currentPage: action.payload,
          error: '',
        }
      case 'PAGINATION_SET_ERROR':
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state
    }
  }

  return useReducer(paginationReducer, initialState)
}
