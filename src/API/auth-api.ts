import axios from 'axios'
import { AuthType } from '../types/auth-type'
import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'
const cookies = new Cookies()
const baseUrl = `http://localhost:5000`

export const LogInFunction = async (body: AuthType) => {
  const auth = await axios.post(`${baseUrl}/login`, body)
  const token = auth.data.token
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const decode: any = jwt(token)
  cookies.set('jwt_authorization', token, {
    expires: new Date(decode.exp * 1000),
  })
  return auth
}
