import React from 'react'
import Line from './images/div.png'
import CollData from "./CollectData.json";
import styles from '../Main.module.scss';


export default function Collections() {
  return (
    <div className={styles['head-collect']}>
        <div className={styles['collect-one']}>
            <img src={Line} alt=""/>
            <h2>Explore Some Hot <span>Collections</span> In Market.</h2>
        </div>
        <div className={styles['collect-two']}>
            {CollData.map(item=>(
                <div key={item.id}>
                    <img src={require(`${item.img}`)} alt=""/>
                    <div className={styles['text-divs']}>
                        <h3>{item.title}</h3>
                        <hr/>
                        <div className={styles['info-divs']}>
                            <div>
                                <p>{item.p}</p>
                                <h4>{item.number}</h4>
                            </div>
                            <div>
                                <p>{item.categ}</p>
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                        <button>{item.btn}</button>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}
