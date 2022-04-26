import { useReducer } from 'react'

export function useCategoryReducer() {
  const initialState = {
    categories: [],
    error: '',
  }
  const categoryReducer = (state, action) => {
    switch (action.type) {
      case 'CATEGORIES_FETCH_SUCCESS':
        return {
          ...state,
          categories: action.payload,
          error: '',
        }
      case 'CATEGORIES_FETCH_ERROR':
        return {
          ...state,
          categories: [],
          error: action.payload,
        }
      default:
        return state
    }
  }

  return useReducer(categoryReducer, initialState)
}
