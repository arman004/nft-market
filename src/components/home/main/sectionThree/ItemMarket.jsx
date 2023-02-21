import React from 'react'
import styles from '../Main.module.scss';
import line from './images/div.png';
import market from './MarketData.json';

export default function ItemMarket() {
    return (
        <div>
            <div className={styles['item-head']}>
                <img src={line} />
                <h2><span>Items</span> Currently In The Market.</h2>
            </div>
            <div className={styles['market-one']}>
                {market.map(item => (
                    <div className={styles['market-two']}>
                        <div>
                            <img src={require(`${item.img}`)} />
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            <div className={styles['market-three']}>
                                <div>
                                    <img src={require(`${item.user}`)} />
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                    <a href='#'>{item.nickName}</a>
                                </div>
                            </div>
                            <hr />
                            <div className={styles['market-for']}>
                                <div>
                                    <p>{item.bid}</p>
                                    <h3>{item.eth}</h3>
                                    <p>{item.cash}</p>
                                </div>
                                <div>
                                    <h3>{item.time}</h3>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div>
                                <a href='#'>{item.link}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
