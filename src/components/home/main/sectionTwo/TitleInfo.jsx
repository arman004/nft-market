import React from 'react'
import TitleData from './TitleInfoData.json';
import styles from '../Main.module.scss';

export default function TitleInfo() {
  return (
    <div className={styles['title-info-div']}>
        {TitleData.map(item=>(
            <div key={item.id}>
                <img src={require(`${item.img}`)} alt="" />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
  )
}
