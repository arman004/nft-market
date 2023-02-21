import React from 'react'
import line from './images/div.png'
import UserData from './UsersData.json'
import styles from '../Explore.module.scss'

export default function Users() {
    return (
        <div className={styles['head-user']}>
            <div className={styles['user-title']}>
                <img src={line} alt="" />
                <h1>Our Top Sellers This Week.</h1>
            </div>
            <div className={styles['parent-users']}>
                <div className={styles['child-users']}>
                    {UserData.one.map(item => (
                        <div key={item.id} className={styles['users']}>
                            <h2>{item.num}</h2>
                            <img src={require(`${item.img}`)} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.eth}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles['child-users']}>
                    {UserData.two.map(item => (
                        <div key={item.id} className={styles['users']}>
                            <h2>{item.num}</h2>
                            <img src={require(`${item.img}`)} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.eth}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles['child-users']}>
                    {UserData.three.map(item => (
                        <div key={item.id} className={styles['users']}>
                            <h2>{item.num}</h2>
                            <img src={require(`${item.img}`)} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.eth}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
