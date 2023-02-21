import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './images/logo.png'
import styles from './Header.module.scss'

export default function NavBar() {
  return (
    <div className={styles['nav-bar']}>
        <div>
            <img src={Logo}/>
        </div>
        <ul>
            <li>
              <NavLink to='/' className={({isActive})=>isActive ? styles['actived'] : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to='explore' className={styles['nav-link']}>Explore</NavLink>
            </li>
            <li>
              <NavLink to='item' className={styles['nav-link']}>Item Details</NavLink>
            </li>
            <li>
              <NavLink to='author' className={styles['nav-link']}>Author</NavLink>
            </li>
            <li>
              <NavLink to='create' className={styles['nav-link']}>Blog</NavLink>
            </li>
        </ul>
    </div>
  )
}
