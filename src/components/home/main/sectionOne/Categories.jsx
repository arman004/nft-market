import React from 'react'
import Line from './images/div.png'
import Application from './CategData.json';
import styles from '../Main.module.scss';

export default function Categories() {
  return (
    <div className={styles['categ-one']}>
        <div className={styles['categ-two']}>
            <img src={Line} alt=""/>
            <h2>Browse Through Our <span>Categories</span> Here.</h2>
        </div>
        <div className={styles['categ-three']}>
            {Application.map(item=>(
                <div key={item.id} className={styles['categ-four']}>
                    <img src={require(`${item.src}`)} alt=""/>
                    <h4>{item.title}</h4>
                </div>
            ))}
        </div>
    </div>
  )
}
