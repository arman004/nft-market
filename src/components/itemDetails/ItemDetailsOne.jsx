import React from 'react'
import styles from './ItemDetails.module.scss';

export default function ItemDetailsOne() {
  return (
    <section className={styles['details-title']}>
        <p>Liberty NFT Market</p>
        <h1>View Item Details</h1>
        <p><span>Home</span> - Item Details</p>
        <div>
            <button className={styles['exp-btn']}>Explore Our Items</button>
        </div>
    </section>
  )
}
