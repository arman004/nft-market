import React from 'react'
import styles from './Author.module.scss'
import userPhoto from './images/single-author.png';
import heart from './images/heart.png';
import cursor from './images/cursor.png';
import dollar from './images/dollar.png';
import Data from './AuthorData.json';
import line from './images/div.png';

export default function AuthorTwo() {
  return (
    <section className={styles['author-background']}>
        <div className={styles['author-info']}>
            <div className={styles['author-div-one']}>
                <img src={userPhoto} alt=""/>
                <h2>Melanie Smith</h2>
            </div>
            <div className={styles['author-div-two']}>
                <div className={styles['author-div-three']}>
                    <div>
                        <img src={heart} alt="" />
                        <p><span>1238</span> Likes</p>
                    </div>
                    <div>
                        <img src={cursor} alt="" />
                        <p><span>1238</span> Likes</p>
                    </div>
                    <div>
                        <img src={dollar} alt=""/>
                        <p><span>1238</span> Likes</p>
                    </div>   
                </div>
                <div className={styles['author-div-four']}>
                    <h3>559 Followers</h3>
                    <button>Follow @Melanie32</button>
                </div>
            </div>
        </div>
        <section>
            <div className={styles['author-title']}>
                <img src={line} alt="" />
                <h2>Melanie Smith’s <span>Items</span>.</h2>
            </div>
            <div className={styles['author-items']}>
                {Data.map(item=>(
                <div className={styles['a-items-one']}>
                    <img src={require(`${item.img}`)} alt="" />
                    <h2>{item.title}</h2>
                    <hr/>
                    <div className={styles['a-items-two']}>
                        <div>
                            <p>{item.bid}</p>
                            <h3>{item.eth}</h3>
                        </div>
                        <div>
                            <p>{item.date}</p>
                            <h3>{item.date}</h3>
                        </div>
                    </div>
                    <button>View Details</button>
                </div>
            ))}
            </div>
            
        </section>
    </section>
  )
}
