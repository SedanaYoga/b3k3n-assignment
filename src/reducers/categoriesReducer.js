import { useReducer } from 'react'

export function useCategoryReducer() {
  const initialState = {
    categories: [],
    currentCategory: { name: 'Happiness & Mindfulness', id: 1 },
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
      case 'CURRENTCATEGORY_FETCH_SUCCESS':
        return {
          ...state,
          currentCategory: action.payload,
          error: '',
        }
      case 'CATEGORIES_FETCH_ERROR':
        return {
          ...state,
          categories: [],
          currentCategory: {},
          error: action.payload,
        }
      default:
        return state
    }
  }

  return useReducer(categoryReducer, initialState)
}
