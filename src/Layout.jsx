import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/home/footer'
import Header from './components/home/header'
import HeaderTwo from './components/home/header/HeaderTwo'

export default function Layout() {
  return (
    <div>
      <HeaderTwo/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
