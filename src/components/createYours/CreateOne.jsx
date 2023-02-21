import React from 'react'
import styles from '../itemDetails/ItemDetails.module.scss'

export default function CreateOne() {
  return (
    <section className={styles['details-title']}>
    <p>Liberty NFT Market</p>
    <h1>NFT Blog.</h1>
    <p><span>Home</span> - Blog</p>
    <div>
        <button className={styles['exp-btn']}>Explore Our Items</button>
        {/* <button className={styles['create-btn']}>Create Your NFT</button> */}
    </div>
</section>
  )
}
