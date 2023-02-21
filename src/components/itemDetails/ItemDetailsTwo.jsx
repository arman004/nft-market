import React from 'react'
import styles from './ItemDetails.module.scss';
import line from './images/div.png'
import DetalData from './DetailsData.json';

export default function ItemDetailsTwo() {
  return (
    <section className={styles['fon']}>
        <div>
            <img src={line}/>
            <h1>View Details <span>For Item</span> Here.</h1>
        </div>
        <section>
            {DetalData.one.map(item=>(
                <div className={styles['detal-one']} key={item.id}>
                    <div>
                        <img src={require(`${item.img}`)}/>
                    </div>
                    <div className={styles['lorem']}>
                        <h2>{item.title}</h2>
                        <div className={styles['nick-name']}>
                            <img src={require(`${item.userLogo}`)}/>
                            <p>{item.nickName}</p>
                        </div>
                        <p>{item.text}</p>
                        <div className={styles['detal-infor']}>
                            <div>
                                <p>{item.bid}</p>
                                <h2>{item.eth}</h2>
                            </div>
                            <div>
                                <p>{item.ow}</p>
                                <h2>{item.name}</h2>
                            </div>
                            <div>
                                <p>{item.end}</p>
                                <h2>{item.date}</h2>
                            </div>
                        </div>
                        <button>Submit Now</button>
                    </div>
                    
                </div>
            ))}
        </section>
        <section className={styles['detal-all']}>
            <div>
                <h1>Current Biddings Prices ( ETH )</h1>
            </div>
            <div className={styles['user-section']}>
                {DetalData.two.map(item=>(
                    <div className={styles['detal-two']} key={item.id}>
                        <div>
                            <img src={require(`${item.img}`)}/>
                        </div>
                        <div>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.nickName}</p>
                            </div>
                            <hr/>
                            <div>
                                <h3>{item.eth}</h3>
                                <h4>{item.date}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </section>
  )
}
