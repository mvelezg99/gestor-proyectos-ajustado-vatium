import axios from 'axios'
//import { HEADERS } from './petitions.constants'

import apiURL from '../apiURL'

const rolesPetitions = axios.create({
  baseURL: apiURL,
})

const rolesAPI = {
  getRoles() {
    return rolesPetitions
      .get('roles')
      .then((response) => response.data.data)
  },
}

export default rolesAPI