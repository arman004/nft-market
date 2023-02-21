import React from 'react'
import lineDiv from './images/div.png'
import styles from '../Main.module.scss';
import { Link } from 'react-router-dom';

export default function Title() {
  return (
    <div className={styles['title-div-one']}>
        <div>
            <img src={lineDiv} />
            <h2>Create Your NFT & Put It On The Market.</h2>
        </div>
        {/* <div className={styles['btn-create-div']}>
            <Link to='create'>Create Your NFT Now</Link>
        </div> */}
    </div>
  )
}
