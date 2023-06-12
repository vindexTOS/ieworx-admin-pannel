import React, { useEffect, useState } from 'react'

import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'
const NavBar = () => {
  const cookies = new Cookies()

  const [user, setUser] = useState()
  useEffect(() => {
    const token = cookies.get('jwt_authorization')
    const decode: any = jwt(token)

    setUser(decode.user)
  }, [])
  const style = {
    nav: `h-[60px] w-[100vw] bg-gray-100`,
  }
  return <nav className={style.nav} onClick={() => console.log(user)}></nav>
}

export default NavBar
