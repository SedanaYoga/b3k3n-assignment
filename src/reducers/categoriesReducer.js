import { useReducer } from 'react'

export function useCategoryReducer() {
  const initialState = {
    isLoading: false,
    categories: [],
    currentCategory: { name: 'Happiness & Mindfulness', id: 1 },
    error: '',
  }
  const categoryReducer = (state, action) => {
    switch (action.type) {
      case 'CATEGORIES_FETCH_LOADING':
        return {
          ...state,
          isLoading: true,
          error: '',
        }
      case 'CATEGORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          categories: action.payload,
          currentCategory: action.payload[0],
          error: '',
        }
      case 'CURRENTCATEGORY_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          currentCategory: action.payload,
          error: '',
        }
      case 'CATEGORIES_FETCH_ERROR':
        return {
          ...state,
          isLoading: false,
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
