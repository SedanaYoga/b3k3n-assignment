import { useReducer } from 'react'

export function useBookReducer() {
  const initialState = {
    books: [],
    error: '',
  }
  const bookReducer = (state, action) => {
    switch (action.type) {
      case 'BOOKS_FETCH_SUCCESS':
        return {
          ...state,
          books: action.payload,
          error: '',
        }
      case 'BOOKS_FETCH_ERROR':
        return {
          ...state,
          books: [],
          error: action.payload,
        }
      default:
        return state
    }
  }

  return useReducer(bookReducer, initialState)
}
