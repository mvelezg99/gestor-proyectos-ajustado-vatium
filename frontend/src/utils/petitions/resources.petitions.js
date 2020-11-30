import axios from 'axios'
import { HEADERS } from './petitions.constants'

import apiURL from '../apiURL'

const resourcesPetitions = axios.create({
  baseURL: apiURL,
})

const resourcesAPI = {
  getResources() {
    return resourcesPetitions
      .get('resources')
      .then((response) => response.data.data)
  },
  insertResource(resource) {
    const { token } = localStorage
    return resourcesPetitions
      .post('resources', resource, {
        headers: { ...HEADERS, authorization: token },
      })
      .then((response) => response.data.data)
  },
  deleteResource(resource) {
    const { token } = localStorage
    return resourcesPetitions
      .delete(`resources/${resource.id}`, {
        headers: { ...HEADERS, authorization: token },
      })
      .then((response) => response.data.data)
  },
}

export default resourcesAPI
