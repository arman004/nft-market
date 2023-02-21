import React from 'react'
import one from './images/featured-01.png';
import two from './images/featured-02.png';
import three from './images/featured-03.png';
import styles from '../Explore.module.scss';



export default function ExpImg() {
  return (
    <div className={styles['exp-img']}>
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
    </div>
  )
}
