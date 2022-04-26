import axios from 'axios'

const getBooksUrl = (categoryId, page = 0, size = 10) => {
  return `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`
}

const getCategoriesUrl = () => {
  return 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories'
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
  const response = await fetch(getBooksUrl(categoryId, page, size))
  const books = await response.json()
  return books
}
