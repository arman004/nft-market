import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './CreateYours.module.scss';

export default function Blog() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://retoolapi.dev/ZxfqaS/data")
            .then(res => setData(res.data))
    }, [])
    return (
        <div className={styles['blog-divs']}>
            {data.map(i => (
                <div key={i.id}>
                    <img src={i.img} />
                    <h4>{i.title}</h4>
                    <button>{i.btn}</button>
                </div>
            ))}
        </div>
    )
}
