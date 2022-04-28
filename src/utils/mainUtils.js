import axios from 'axios'

const getBooksUrl = (categoryId, size = 1000, page = 0) => {
  return `/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`
}

export const getCategoriesData = async () => {
  try {
    const response = await axios.get('/fee-assessment-categories')
    console.log('Fetching Categories')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const getBooksData = async (categoryId, size = 1000, page) => {
  try {
    const response = await axios.get(getBooksUrl(categoryId, size, page))
    console.log(`Fetching Books with Category: ${categoryId}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const removeSpecialChar = (text) => {
  return text.replace(/[ $#@%!&*()]/g, '').toLowerCase()
}
