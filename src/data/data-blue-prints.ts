import { AuthType } from '../types/auth-type'

export class LogInClass implements AuthType {
  email: string
  password: string
  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
}
