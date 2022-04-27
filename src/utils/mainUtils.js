import axios from 'axios'

const getBooksUrl = (categoryId, page = 0, size = 10) => {
  return `/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`
}

export const getCategoriesData = async () => {
  try {
    const response = await axios.get('/fee-assessment-categories')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const getBooksData = async (categoryId, page, size) => {
  try {
    const response = await axios.get(getBooksUrl(categoryId, page, size))
    return response.data
  } catch (err) {
    console.log(err)
  }
}
