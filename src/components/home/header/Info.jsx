import React from 'react'
import infoData from './InfoData.json'
import styles from './Header.module.scss';

export default function Info() {
  return (
    <div>
        {infoData.map(item=>(
          <div key={item.id} className={styles['info-section']}>
            {item?.id === 2 ? <h2>{item.text}</h2> : <p>{item.text}</p>}    
          </div> 
        ))}

        <div className={styles['info-btn']}>
          <button className={styles['btn-one']}>Explore Top NFTs</button>
          <button className={styles['btn-two']}>Watch Our Videos</button>
        </div>
    </div>
  )
}
