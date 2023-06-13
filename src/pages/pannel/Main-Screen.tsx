import React, { useEffect } from 'react'
import NavBar from '../../components/navigation/NavBar'
import SideNav from '../../components/navigation/SideNav'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'
const MainScreen = () => {
  const cookies = new Cookies()

  const token = cookies.get('jwt_authorization')
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  }, [])
  const style = {
    main: ` w-[100vw] h-[100vh] `,
    section: `flex `,
  }

  if (token) {
    return (
      <main className={style.main}>
        <NavBar />
        <section className={style.section}>
          <SideNav />
          <Outlet />
        </section>
      </main>
    )
  } else {
    return <Navigate to="/login" />
  }
}

export default MainScreen
