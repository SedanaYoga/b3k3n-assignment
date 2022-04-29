import { useReducer } from 'react'

export function useBookmarkReducer() {
  const initialState = {
    bookmarkBooks: [],
    error: '',
  }
  const bookmarkReducer = (state, action) => {
    switch (action.type) {
      case 'BOOKMARK_SET_SUCCESS':
        return {
          ...state,
          bookmarkBooks: action.payload,
          error: '',
        }
      case 'BOOKMARK_ADD_SUCCESS':
        return {
          ...state,
          bookmarkBooks: [...state.bookmarkBooks, action.payload],
          error: '',
        }
      case 'BOOKMARK_REMOVE_SUCCESS':
        return {
          ...state,
          bookmarkBooks: state.bookmarkBooks.filter(
            (bookmark) =>
              bookmark.id !== action.id &&
              bookmark.category_id !== action.category_id
          ),
          error: '',
        }
      case 'BOOKMARK_SET_ERROR':
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state
    }
  }

  return useReducer(bookmarkReducer, initialState)
}
