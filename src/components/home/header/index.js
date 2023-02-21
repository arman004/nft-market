import React from 'react'
import NavBar from './NavBar'
import styles from './Header.module.scss'
import Info from './Info'
import Img from './Img'

export default function Header() {
  return (
    <header className={styles['one-header']}>
        <section className={styles['nav-section']}>
            <NavBar/>
        </section>
        <section className={styles['head-section']}>
          <Info/>
          <Img/>
        </section>
        
    </header>
  )
}
