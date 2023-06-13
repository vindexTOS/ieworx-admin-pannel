import axios from 'axios'
import { AuthType } from '../types/auth-type'

const baseUrl = `http://localhost:5000`

export const LogInFunction = async (body: AuthType) => {
  const auth = await axios.post(`${baseUrl}/login`, body)

  return auth
}
