import React from 'react'
import Title from '../home/main/sectionTwo/Title'
import TitleInfo from '../home/main/sectionTwo/TitleInfo'
import styles from './Author.module.scss'
import AuthorOne from './AuthorOne'
import AuthorTwo from './AuthorTwo'

export default function Author() {
  return (
    <section>
      <section>
        <AuthorOne/>
      </section>
      <section>
        <AuthorTwo/>
      </section>
      <section className={styles['author-three']}>
        <Title/>
        <TitleInfo/>
      </section>
    </section>
  )
}
