import React from 'react'
import Data from './ItemListData.json';
import styles from '../Explore.module.scss'

export default function ItemList() {
  return (
    <section className={styles['all-item']}>
      {Data.doubleItem.map(item => (
        <div className={styles['db-item']} key={item.id}>
          <div>
            <p className={styles['db-title']}>{item.name}</p>
          </div>
          
          <div className={styles['item-img']}>
            <div>
              <img src={require(`${item.img1}`)} />
              <h2>{item.title1}</h2>
            </div>
            <div>
              <img src={require(`${item.img2}`)} />
              <h2>{item.title2}</h2>
            </div>
          </div>
          <hr/>
          <div className={styles['item-info']}>
            <div>
              <p>{item.bid}</p>
              <h3>{item.eth}</h3>
            </div>
            <div>
              <p>{item.categ}</p>
              <h3>{item.art}</h3>
            </div>
            <div>
              <p>{item.collect}</p>
              <h3>{item.num}</h3>
            </div>
            <div>
              <p>{item.end}</p>
              <h3>{item.date}</h3>
            </div>
          </div>

          <button>{item.btn}</button>
        </div>
      ))}
      {Data.otherItems.map(item=>(
        <div className={styles['other-item']} key={item.id}>
          <img src={require(`${item.img}`)}/>
          <h3>{item.title}</h3>
          <hr/>
          <div className={styles['crypto-info']}>
            <div>
              <p>{item.bid}</p>
              <h3>{item.eth}</h3>
            </div>
            <div>
              <p>{item.end}</p>
              <h3>{item.date}</h3>
            </div>
          </div>
          <button>{item.btn}</button>
        </div>
      ))}
    </section>
  )
}
