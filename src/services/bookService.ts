import axios from 'axios'
require('dotenv').config({ path: require('find-config')('.env') })

import { NYTResponse } from '../types/nytbook'
import { serializeObj } from '../utils/object'
import { shuffle } from '../utils/array'

const fetchBooksFromNytApi = async (params: { [key: string]: string | number }) => {
  let result = {}

  const nytApiBaseUrl = process.env.NYT_API_BASE_URL!
  const nytApiKey = process.env.NYT_API_KEY!
  const endpoint = '/lists/best-sellers/history.json'
  const options = { method: 'GET', headers: { Accept: 'application/json' } }

  let stringParams = serializeObj(params)
  let url = `${nytApiBaseUrl}${endpoint}?${stringParams}&api-key=${nytApiKey}`

  if (params.query) {
    const authorParams = { author: params.query, offset: params.offset || 0 }
    const stringAuthorParams = serializeObj(authorParams)
    const authorUrl = `${nytApiBaseUrl}${endpoint}?${stringAuthorParams}&api-key=${nytApiKey}`

    const titleParams = { title: params.query, offset: params.offset || 0 }
    const stringTitleParams = serializeObj(titleParams)
    const titleUrl = `${nytApiBaseUrl}${endpoint}?${stringTitleParams}&api-key=${nytApiKey}`

    try {
      const response = await Promise.all([await axios.get(authorUrl, options), await axios.get(titleUrl, options)])

      let list = [...(response[0].data || {}).results, ...(response[1].data || {}).results].map((row) => ({
        title: row?.title,
        author: row?.author,
        price: String(parseInt(row?.price)) + ' GBP'
      }))
      list = shuffle(list)
      list = list.slice(0, 20)

      result = { books: list, total: list.length }
    } catch (error) {
      console.error(error)
    }
  } else {
    try {
      const response = await axios.get(url, options)

      if (response && String(response.status).startsWith('2')) {
        let data: NYTResponse = response.data
        const list = (data?.results || []).map((row) => ({
          title: row?.title,
          author: row?.author,
          price: String(parseInt((row?.price || 0).toString())) + ' GBP'
        }))

        result = { books: list, total: list.length }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return result
}

const fetchFavouritesByUserId = () => {
  return []
}

const addNewFavourite = () => {
  return true
}

const updateFavourite = () => {
  return true
}

const deleteFavourite = () => {
  return true
}

export default {
  fetchBooksFromNytApi,
  fetchFavouritesByUserId,
  addNewFavourite,
  updateFavourite,
  deleteFavourite
}
