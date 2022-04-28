import { useReducer } from 'react'

export function useBookReducer() {
  const initialState = {
    books: [],
    isLoading: false,
    error: '',
  }
  const bookReducer = (state, action) => {
    switch (action.type) {
      case 'BOOKS_FETCH_LOADING':
        return {
          ...state,
          isLoading: true,
          books: [],
          error: '',
        }
      case 'BOOKS_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          books: action.payload,
          error: '',
        }
      case 'BOOKS_FETCH_ERROR':
        return {
          ...state,
          isLoading: false,
          books: [],
          error: action.payload,
        }
      default:
        return state
    }
  }

  return useReducer(bookReducer, initialState)
}
