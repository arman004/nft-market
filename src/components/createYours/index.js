import React from 'react'
import Blog from './Blog';
import CreateOne from './CreateOne'
import styles from "./CreateYours.module.scss";


export default function CreateYours() {
  return (
    <section>
      <CreateOne/>
      <section className={styles['form-section']}>
        <Blog/>
      </section>
    </section>
  )
}
