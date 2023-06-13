import React, { useEffect, useState } from 'react'
import { AdminInfo } from '../../types/auth-type'
import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const [user, setUser] = useState<AdminInfo>()
  useEffect(() => {
    const token = cookies.get('jwt_authorization')
    const decode: any = jwt(token)

    setUser(decode.user)
  }, [])
  const hanndleLogOut = () => {
    cookies.remove('jwt_authorization')
    navigate('/login')
  }
  const style = {
    nav: `h-[60px] w-[100vw] bg-gray-100 flex justify-between  items-center px-10 shadow-xl`,
    adminInfo: ` flex gap-2 `,
  }
  const { email, role } = user || {}
  return (
    <nav className={style.nav}>
      <div>LOGO</div>
      <div className={style.adminInfo}>
        <p>{email}</p>
        <p className="text-orange-400 font-bold">{role}</p>
        <button
          className="btn btn-xs btn-warning text-white   "
          onClick={hanndleLogOut}
        >
          Log-out
        </button>
      </div>
    </nav>
  )
}

export default NavBar
