import React from 'react'
import Title from '../home/main/sectionTwo/Title'
import TitleInfo from '../home/main/sectionTwo/TitleInfo'
import ItemDetailsOne from './ItemDetailsOne'
import ItemDetailsTwo from './ItemDetailsTwo'
import styles from './ItemDetails.module.scss';

export default function ItemDetails() {
  return (
    <section>
      <ItemDetailsOne />
      <ItemDetailsTwo />
      <section className={styles['item-detal-info']}>
        <Title />
        <TitleInfo />
      </section>
    </section>
  )
}
