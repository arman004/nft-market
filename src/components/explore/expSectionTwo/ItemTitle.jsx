import React from 'react'
import line from './images/div.png';
import styles from '../Explore.module.scss'

export default function ItemTitle() {
  return (
    <div className={styles['item-title']}>
        <img src={line} />
        <h1>Discover Some Of Our <span>Items</span>.</h1>
    </div>
  )
}
