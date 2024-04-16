import axios from "axios"
import { ApiBaseUrl } from "./Config"

export const client = axios.create({
  baseURL: ApiBaseUrl,
})

async function REQUEST(options) {
  const onSuccess = function (response) {
    return response.data
  }

  const onError = async function (error) {
    if (error.response) {
      if (error.response.status === 401) {
      }
      return Promise.reject(error.response.data)
    }

    return Promise.reject(error)
  }

  return client({
    headers: {
      ...axios.defaults.headers,
      // Authorization: "Bearer " + token,
    },
    ...options,
  })
    .then(onSuccess)
    .catch(onError)
}

export default REQUEST
