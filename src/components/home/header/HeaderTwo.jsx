import React from 'react'
import logo from './images/logo.png';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export default function HeaderTwo() {
  return (
    <header className={styles['two-header']}>
        <img  src={logo}/>
        <ul className={styles['nav-two']}>
            <li>
                <NavLink to='/' className={styles['nav-link']}>Home</NavLink>
            </li>
            <li>
                <NavLink to='explore'  className={({isActive})=>isActive ? styles['actived'] : styles['nav-link']}>Explore</NavLink>
            </li>
            <li>
                <NavLink to='item' className={({isActive})=>isActive ? styles['actived'] : styles['nav-link']}>Item Details</NavLink>
            </li>
            <li>
                <NavLink to='author' className={({isActive})=>isActive ? styles['actived'] : styles['nav-link']}>Author</NavLink>
            </li>
            <li>
                <NavLink to='create' className={({isActive})=>isActive ? styles['actived'] : styles['nav-link']}>Blog</NavLink>
            </li>
        </ul>
    </header>
  )
}
