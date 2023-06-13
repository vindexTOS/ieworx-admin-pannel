import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  const style = {
    nav: `w-[260px] h-[100vh] bg-gray-800`,
  }
  return (
    <nav className={style.nav}>
      <Link to="mail">Mails</Link>
    </nav>
  )
}

export default SideNav
