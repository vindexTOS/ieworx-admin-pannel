import React from 'react'
import NavBar from '../../components/navigation/NavBar'
import SideNav from '../../components/navigation/SideNav'
import { Outlet } from 'react-router-dom'
const MainScreen = () => {
  const style = {
    main: ` w-[100vw] h-[100vh]`,
  }
  return (
    <main className={style.main}>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default MainScreen
